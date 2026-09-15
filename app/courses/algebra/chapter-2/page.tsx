
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const lessons = [
  "Lesson 1",
  "Lesson 2",
  "Lesson 3",
  "Lesson 4",
];

export default function Page() {
  const [hasSubscription, setHasSubscription] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSubscription();
  }, []);

  async function checkSubscription() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setHasSubscription(false);
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

    if (error) {
      console.error("Subscription error:", error);
      setHasSubscription(false);
      setLoading(false);
      return;
    }

    setHasSubscription(!!data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            M1100 · Algebra
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Chapter 2
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Learn the concepts step by step, practice what you learn,
            and test your understanding with a quiz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        {/* Access information */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6">
          {loading ? (
            <p className="text-slate-500">
              Checking your access...
            </p>
          ) : hasSubscription ? (
            <div>
              <p className="font-semibold text-green-600">
                ✓ You have full access to this chapter.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                You can access all four lessons.
              </p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-blue-600">
                🔓 Lesson 1 is free.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Subscribe to M1100 Algebra to access Lessons 2–4.
              </p>
            </div>
          )}
        </div>

        <h2 className="text-3xl font-bold">
          Video lessons
        </h2>

        <div className="mt-8 space-y-4">
          {lessons.map((lesson, index) => {
            const lessonNumber = index + 1;
            const isFree = lessonNumber === 1;
            const isLocked = !isFree && !hasSubscription;

            return (
              <div
                key={lesson}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                    {lessonNumber}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {lesson}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {isFree
                        ? "Free video preview"
                        : isLocked
                        ? "🔒 Subscribers only"
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
                    href={`/courses/algebra/chapter-2/lesson-${lessonNumber}`}
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
            Chapter 2 Quiz
          </h2>

          <p className="mt-4 text-slate-300">
            Test your understanding before moving on.
          </p>

          <Link
            href="/courses/algebra/chapter-2/quiz"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
          >
            Start Chapter 2 Quiz →
          </Link>

          <p className="mt-4 text-sm text-slate-400">
            You can continue even if you don't pass.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between">
          <Link
            href="/courses/algebra/chapter-1"
            className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-500 hover:text-white"
          >
            ← Previous Chapter
          </Link>

          <Link
            href="/courses/algebra/chapter-3"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next Chapter →
          </Link>
        </div>
      </section>
    </main>
  );
}

