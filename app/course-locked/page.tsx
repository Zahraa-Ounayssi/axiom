"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const courseNames: Record<string, string> = {
  M1100: "Algebra",
  M1101: "Analysis",
  M1102: "M1102",
  M1104: "M1104",
  M1106: "M1106",
};

function CourseLockedContent() {
  const searchParams = useSearchParams();

  const courseCode = searchParams.get("course") || "";
  const courseName = courseNames[courseCode] || courseCode;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
            🔒
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Course Access
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Course Access Required
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            You do not currently have an active subscription for{" "}
            <span className="font-bold text-slate-900">
              {courseCode} {courseName}
            </span>
            .
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Please contact AXIOM administration to activate this course.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              href="/dashboard"
              className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              ← Back to Dashboard
            </Link>

            <Link
              href="/profile"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
            >
              My Profile
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}

export default function CourseLockedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseLockedContent />
    </Suspense>
  );
}