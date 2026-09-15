
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const lessons = [
  "Lesson 1",
  "Lesson 2",
  "Lesson 3",
  "Lesson 4",
  "Lesson 5",
];

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    checkAccess();
  }, []);

  async function checkAccess() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Not logged in = preview mode
    if (!user) {
      setAllowed(false);
      setLoading(false);
      return;
    }

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
        <p className="text-slate-600">Loading chapter...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            M1101 · Analysis
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Chapter 1 Nb reel / Borne superieur et inferieur
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Learn the concepts step by step, practice what you learn,
            and test your understanding with a quiz.
          </p>

          {!allowed && (
            <div className="mt-6 inline-flex rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
              🔓 Lesson 1 is free. Subscribe to access all lessons.
            </div>
          )}

          {allowed && (
            <div className="mt-6 inline-flex rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
              ✓ You have full access to this chapter.
            </div>
          )}
        </div>
      </section>

      {/* Lessons */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Video lessons
        </h2>

        <div className="mt-8 space-y-4">
          {lessons.map((lesson, index) => {
            const isFree = index === 0;
            const isLocked = !isFree && !allowed;

            return (
              <div
                key={lesson}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${
                      isLocked
                        ? "bg-slate-100 text-slate-500"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {lesson}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {isLocked
                        ? "🔒 Available with subscription"
                        : isFree
                        ? "Free preview"
                        : "Video explanation"}
                    </p>
                  </div>
                </div>

                {isLocked ? (
                  <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                    🔒 Locked
                  </span>
                ) : (
                  <Link
                    href={`/courses/analysis/chapter-1/lesson-${index + 1}`}
                    className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                  >
                    Watch
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiz */}
        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Chapter 1 Quiz
          </h2>

          <p className="mt-4 text-slate-300">
            Test your understanding before moving on.
          </p>

          <Link
            href="/courses/analysis/chapter-1/quiz"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Start Chapter 1 Quiz →
          </Link>

          <p className="mt-4 text-sm text-slate-400">
            You can continue even if you don't pass.
          </p>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            href="/courses/analysis"
            className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 hover:bg-blue-500 hover:text-white"
          >
            ← Back to Course
          </Link>
        </div>
      </section>
    </main>
  );
}

