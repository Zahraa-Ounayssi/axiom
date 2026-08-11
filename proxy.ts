
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const COURSE_CODES: Record<string, string> = {
  algebra: "M1100",
  analysis: "M1101",
  M1102: "M1102",
  M1104: "M1104",
  M1106: "M1106",
};

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // ==========================================
  // ADMIN
  // ==========================================

  if (pathname.startsWith("/admin")) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.search = "";

      return NextResponse.redirect(url);
    }

    return response;
  }

  // ==========================================
  // DASHBOARD / PROFILE
  // ==========================================

  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile")
  ) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.search = "";

      return NextResponse.redirect(url);
    }

    return response;
  }

  // ==========================================
  // COURSES
  // ==========================================

  if (!pathname.startsWith("/courses")) {
    return response;
  }

  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";

    return NextResponse.redirect(url);
  }

  const parts = pathname.split("/");
  const courseName = parts[2];
  const courseCode = COURSE_CODES[courseName];

  if (!courseCode) {
    return response;
  }

  const { data: subscription, error } = await supabase
    .from("subscriptions")
    .select("status")
    .eq("user_id", user.id)
    .eq("course_code", courseCode)
    .maybeSingle();

  if (error) {
    console.error("Subscription check error:", error);
  }

if (!subscription || subscription.status !== "active") {
  const url = request.nextUrl.clone();

  url.pathname = "/course-locked";
  url.search = `?course=${courseCode}`;

  return NextResponse.redirect(url);
}

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/admin/:path*",
    "/courses/:path*",
  ],
};

