
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

type Student = {
  id: string;
  full_name: string | null;
  email: string | null;
  is_admin: boolean;
};

type Subscription = {
  id: string;
  user_id: string;
  course_code: string;
  status: string;
};

const courses = ["M1100", "M1101", "M1102", "M1104", "M1106"];

export default function AdminPage() {
  const router = useRouter();

  const [students, setStudents] = useState<Student[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("id, full_name, email, is_admin")
      .eq("id", user.id)
      .single();

    if (error || !profile?.is_admin) {
      alert(
        `Admin check failed.\n\nis_admin: ${
          profile?.is_admin
        }\n\nerror: ${
          error?.message ?? "none"
        }`
      );

      router.replace("/dashboard");
      return;
    }

    await loadData();

    setLoading(false);
  }

  async function loadData() {
    const { data: studentsData, error: studentsError } = await supabase
      .from("profiles")
      .select("id, full_name, email, is_admin")
      .eq("is_admin", false)
      .order("full_name");

    if (studentsError) {
      console.error("STUDENTS ERROR:", studentsError);
    }

    const { data: subscriptionsData, error: subscriptionsError } =
      await supabase
        .from("subscriptions")
        .select("id, user_id, course_code, status");

    if (subscriptionsError) {
      console.error("SUBSCRIPTIONS ERROR:", subscriptionsError);
    }

    setStudents(studentsData ?? []);
    setSubscriptions(subscriptionsData ?? []);
  }

  function studentSubscriptions(studentId: string) {
    return subscriptions.filter(
      (subscription) =>
        subscription.user_id === studentId &&
        subscription.status === "active"
    );
  }

  function isActive(studentId: string, courseCode: string) {
    return subscriptions.some(
      (subscription) =>
        subscription.user_id === studentId &&
        subscription.course_code === courseCode &&
        subscription.status === "active"
    );
  }

  async function toggleSubscription(
    studentId: string,
    courseCode: string
  ) {
    setSaving(true);
    setMessage("");

    const existing = subscriptions.find(
      (subscription) =>
        subscription.user_id === studentId &&
        subscription.course_code === courseCode
    );

    // ==========================================
    // DEACTIVATE
    // Delete subscription completely
    // ==========================================

    if (existing) {
      const { error } = await supabase
        .from("subscriptions")
        .delete()
        .eq("id", existing.id);

      if (error) {
        console.error("SUBSCRIPTION DELETE ERROR:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        });

        setMessage(
          `Error: ${error.message || "Could not deactivate subscription."}`
        );
      } else {
        setMessage(`${courseCode} deactivated successfully.`);
      }
    }

    // ==========================================
    // ACTIVATE
    // Create active subscription
    // ==========================================

    else {
      const { error } = await supabase
        .from("subscriptions")
        .insert({
          user_id: studentId,
          course_code: courseCode,
          status: "active",
        });

      if (error) {
        console.error("SUBSCRIPTION INSERT ERROR:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        });

        setMessage(
          `Error: ${error.message || "Could not create subscription."}`
        );
      } else {
        setMessage(`${courseCode} activated successfully.`);
      }
    }

    await loadData();
    setSaving(false);
  }

  async function logout() {
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading admin dashboard...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              AXIOM<span className="text-blue-600">.</span>
            </h1>

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Admin Panel
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => router.push("/dashboard")}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
            >
              Dashboard
            </button>

            <button
              onClick={logout}
              className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Logout
            </button>

          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Administration
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight">
            Students
          </h2>

          <p className="mt-3 text-slate-600">
            Manage student access to AXIOM courses.
          </p>
        </div>

        {message && (
          <div className="mb-6 rounded-xl bg-blue-50 p-4 text-sm font-medium text-blue-700">
            {message}
          </div>
        )}

        {/* Students */}
        <div className="space-y-5">

          {students.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-slate-500">
                No students found.
              </p>
            </div>
          ) : (
            students.map((student) => {

              const activeCourses =
                studentSubscriptions(student.id);

              const isSelected =
                selectedStudent?.id === student.id;

              return (
                <div
                  key={student.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >

                  {/* Student */}
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                      <h3 className="text-xl font-bold">
                        {student.full_name || "Unnamed Student"}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {student.email}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">

                        {activeCourses.length === 0 ? (
                          <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                            No active courses
                          </span>
                        ) : (
                          activeCourses.map((subscription) => (
                            <span
                              key={subscription.id}
                              className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
                            >
                              {subscription.course_code}
                            </span>
                          ))
                        )}

                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedStudent(
                          isSelected ? null : student
                        )
                      }
                      className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600"
                    >
                      {isSelected
                        ? "Close"
                        : "Manage Courses"}
                    </button>

                  </div>

                  {/* Course Management */}
                  {isSelected && (
                    <div className="mt-6 border-t border-slate-200 pt-6">

                      <h4 className="mb-4 font-bold">
                        Course Access
                      </h4>

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                        {courses.map((course) => {

                          const active = isActive(
                            student.id,
                            course
                          );

                          return (
                            <button
                              key={course}
                              disabled={saving}
                              onClick={() =>
                                toggleSubscription(
                                  student.id,
                                  course
                                )
                              }
                              className={`rounded-xl border px-4 py-4 text-sm font-bold transition ${
                                active
                                  ? "border-green-300 bg-green-50 text-green-700 hover:bg-red-50 hover:text-red-600"
                                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                            >
                              <div>{course}</div>

                              <div className="mt-1 text-xs font-medium">
                                {active
                                  ? "Active"
                                  : "Activate"}
                              </div>
                            </button>
                          );
                        })}

                      </div>

                      <p className="mt-4 text-xs text-slate-500">
                        Click an active course to deactivate it,
                        or an inactive course to activate it.
                      </p>

                    </div>
                  )}

                </div>
              );
            })
          )}

        </div>

      </section>
    </main>
  );
}

