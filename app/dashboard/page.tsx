
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LogoutButton from "@/app/components/LogoutButton";

export default function DashboardPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.replace("/login");
        return;
      }

      setEmail(user.email ?? "");
      setLoading(false);
    }

    getUser();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <h1 className="text-2xl font-bold tracking-tight">
            AXIOM<span className="text-blue-600">.</span>
          </h1>

          <LogoutButton />

        </div>
      </nav>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* Welcome */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Dashboard
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Welcome back 👋
          </h2>

          <p className="mt-3 text-slate-600">
            {email}
          </p>
        </div>

        {/* Courses */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Algebra */}
          <a
            href="/courses/algebra"
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              M1100
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Algebra
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Continue your Algebra course.
            </p>

            <p className="mt-6 font-semibold">
              Open course →
            </p>
          </a>

          {/* Analysis */}
          <a
            href="/courses/analysis"
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              M1101
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Analysis
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Continue your Analysis course.
            </p>

            <p className="mt-6 font-semibold">
              Open course →
            </p>
          </a>

          {/* M1102 */}
          <a
            href="/courses/M1102"
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              M1102
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              M1102
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Continue your M1102 course.
            </p>

            <p className="mt-6 font-semibold">
              Open course →
            </p>
          </a>

          {/* M1104 */}
          <a
            href="/courses/M1104"
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              M1104
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              M1104
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Continue your M1104 course.
            </p>

            <p className="mt-6 font-semibold">
              Open course →
            </p>
          </a>

          {/* M1106 */}
          <a
            href="/courses/M1106"
            className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              M1106
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              M1106
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Continue your M1106 course.
            </p>

            <p className="mt-6 font-semibold">
              Open course →
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}

