
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

export default function ChapterSixPage() {
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Not logged in → preview mode
      if (!user) {
        setAllowed(false);
        setChecking(false);
        return;
      }

      const { data } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_code", "M1101")
        .eq("status", "active")
        .maybeSingle();

      setAllowed(!!data);
      setChecking(false);
    }

    checkAccess();
  }, []);

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            M1101 · Analysis
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Chapter 6 — Développement limité
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Learn the concepts step by step, practice what you learn,
            and test your understanding with a quiz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        {!allowed ? (
          <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-900">
            <p className="font-semibold">
              🔓 Lesson 1 is free.
            </p>

            <p className="mt-1 text-sm">
              Subscribe to access all lessons.
            </p>
          </div>
        ) : (
          <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-900">
            <p className="font-semibold">
              ✓ You have full access to this chapter.
            </p>
          </div>
        )}

        <h2 className="text-3xl font-bold">
          Video lessons
        </h2>

        <div className="mt-8 space-y-4">
          {lessons.map((lesson, index) => {
            const isFree = index === 0;
            const canWatch = allowed || isFree;

            return (
              <div
                key={lesson}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {lesson}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Video explanation
                    </p>
                  </div>
                </div>

                {canWatch ? (
                  <Link
                    href={`/courses/analysis/chapter-6/lesson-${index + 1}`}
                    className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                  >
                    Watch
                  </Link>
                ) : (
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-500">
                      🔒 Available with subscription
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      🔒 Locked
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-bold">
            Chapter 6 Quiz
          </h2>

          <p className="mt-4 text-slate-300">
            Test your understanding before moving on.
          </p>

          <Link
            href="/courses/analysis/chapter-6/quiz"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Start Chapter 6 Quiz →
          </Link>

          <p className="mt-4 text-sm text-slate-400">
            You can continue even if you don't pass.
          </p>
        </div>

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

