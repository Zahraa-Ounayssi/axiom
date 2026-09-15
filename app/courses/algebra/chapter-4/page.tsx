"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const lessons = [
  "Lesson 1",
  "Lesson 2",
  "Lesson 3",
  "Lesson 4",
];

export default function Page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setHasAccess(false);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_code", "M1100")
        .eq("status", "active")
        .maybeSingle();

      if (error || !data) {
        setHasAccess(false);
      } else {
        setHasAccess(true);
      }

      setLoading(false);
    }

    checkAccess();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            M1100 · Algebra
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Chapter 4
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Learn the concepts step by step, practice what you learn,
            and test your understanding with a quiz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* Access status */}
        {!loading && (
          <div
            className={`mb-10 rounded-2xl border p-5 ${
              hasAccess
                ? "border-green-200 bg-green-50"
                : "border-blue-200 bg-blue-50"
            }`}
          >
            {hasAccess ? (
              <p className="font-semibold text-green-800">
                ✓ You have full access to this chapter.
              </p>
            ) : (
              <>
                <p className="font-semibold text-blue-800">
                  🔓 Lesson 1 is free.
                </p>

                <p className="mt-1 text-sm text-blue-700">
                  Subscribe to M1100 Algebra to access Lessons 2–4.
                </p>
              </>
            )}
          </div>
        )}

        <h2 className="text-3xl font-bold">
          Video lessons
        </h2>

        {/* Lessons */}
        <div className="mt-8 space-y-4">
          {lessons.map((lesson, index) => {
            const lessonNumber = index + 1;
            const isFree = lessonNumber === 1;
            const locked = !isFree && !hasAccess;

            return (
              <div
                key={lesson}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${
                      locked
                        ? "bg-slate-100 text-slate-400"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {lessonNumber}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {lesson}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {locked
                        ? "🔒 Subscribe to unlock"
                        : isFree
                        ? "Free preview"
                        : "Video explanation"}
                    </p>
                  </div>

                </div>

                {/* Watch / Locked */}
                {locked ? (
                  <Link
                    href="/courses/algebra"
                    className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-200"
                  >
                    🔒 Locked
                  </Link>
                ) : (
                  <Link
                    href={`/courses/algebra/chapter-4/lesson-${lessonNumber}`}
                    className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
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
            Chapter 4 Quiz
          </h2>

          <p className="mt-4 text-slate-300">
            Test your understanding before moving on.
          </p>

          <Link
            href="/courses/algebra/chapter-4/quiz"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Start Chapter 4 Quiz →
          </Link>

          <p className="mt-4 text-sm text-slate-400">
            You can continue even if you don't pass.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between">

          <Link
            href="/courses/algebra/chapter-2"
            className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-500 hover:text-white"
          >
            ← Previous Chapter
          </Link>

          <Link
            href="/courses/algebra/chapter-5"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next Chapter →
          </Link>

        </div>

      </section>
    </main>
  );
}