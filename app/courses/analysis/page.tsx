
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const chapters = [
  { number: "01", lessons: 5 },
  { number: "02", lessons: 5 },
  { number: "03", lessons: 5 },
  { number: "04", lessons: 5 },
  { number: "05", lessons: 5 },
  { number: "06", lessons: 5 },
];

export default function AnalysisPage() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    checkAccess();
  }, []);

  async function checkAccess() {
    setLoading(true);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    // If the student is not logged in,
    // they can still view the course structure.
    if (userError || !user) {
      setAllowed(false);
      setLoading(false);
      return;
    }

    // Check M1101 subscription
    const { data, error } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_code", "M1101")
      .eq("status", "active")
      .maybeSingle();

    if (error) {
      console.error("Subscription error:", error);
      setAllowed(false);
      setLoading(false);
      return;
    }

    setAllowed(!!data);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading course...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-3xl">

            <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-bold text-blue-400">
              M1101
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Analysis
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A complete learning experience designed to help you
              understand analysis, practice effectively, and prepare
              confidently for your university exams.
            </p>

            {!allowed && (
              <div className="mt-8 inline-flex items-center rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
                🔓 Preview the course structure and try the first lesson
                of each chapter for free.
              </div>
            )}

            {allowed && (
              <div className="mt-8 inline-flex items-center rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                ✓ You have full access to this course.
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Course content */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Main */}
          <div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Course content
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Learn step by step
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Each chapter combines video lessons, applications,
                and a quiz to help you check your understanding.
              </p>
            </div>

            {/* Chapters */}
            <div className="mt-10 space-y-5">

              {chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                        {chapter.number}
                      </span>

                      <div>

                        <h3 className="text-xl font-bold">
                          {`Chapter ${chapter.number}`}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {chapter.lessons} video lessons
                        </p>

                      </div>

                    </div>

                    <Link
                      href={`/courses/analysis/chapter-${parseInt(
                        chapter.number
                      )}`}
                      className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-600"
                    >
                      Open
                    </Link>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Sidebar */}
          <aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="mb-5 text-lg font-semibold text-slate-900">
                Course resources
              </h3>

              <div className="space-y-3">

                <Link
                  href="/courses/analysis/partial"
                  className="block w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="font-medium text-slate-900">
                    📄 Partial Exams
                  </div>

                  <span className="mt-1 block text-sm text-slate-500">
                    Subjects + corrections + explanations
                  </span>
                </Link>

                <Link
                  href="/courses/analysis/final"
                  className="block w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="font-medium text-slate-900">
                    📄 Final Exams
                  </div>

                  <span className="mt-1 block text-sm text-slate-500">
                    Subjects + corrections + explanations
                  </span>
                </Link>

              </div>

            </div>

          </aside>

        </div>

      </section>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-6 pb-10">

        <Link
          href="/dashboard"
          className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-500 hover:text-white"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>
  );
}

