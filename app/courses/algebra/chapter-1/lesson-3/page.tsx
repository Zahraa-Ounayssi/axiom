"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VideoPlayer from "@/app/components/videoplayer";
import { supabase } from "@/lib/supabase";

export default function Lesson3Page() {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAccess();
  }, []);

  async function checkAccess() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setAllowed(false);
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
        <p className="text-slate-600">Checking access...</p>
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <Link
              href="/courses/algebra/chapter-1"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ← Back to Chapter 1
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
              🔒
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              This lesson is locked
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Lesson 1 is available for free. Subscribe to M1100 Algebra
              to access Lesson 3 and all the other lessons in this course.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/courses/algebra/chapter-1"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
              >
                ← Back to Chapter 1
              </Link>

              <Link
                href="/dashboard"
                className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/algebra/chapter-1"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 1
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Chapter 1
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 — Ensemble
        </h1>

        {/* Video 1 */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:tjEvUT7SgAs"
            title="Lesson 3 part 1 — Ensemble"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 3 part 1
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Ensemble
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will learn how to understand
            and solve basic algebraic equations.
          </p>
        </div>

        {/* Video 2 */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:KkfJbL4Baw8"
            title="Lesson 3 part 2 — Ensemble"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 3 part 2
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Ensemble
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will learn how to understand
            and solve basic algebraic equations.
          </p>
        </div>

        {/* Learning objectives */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold">
            Learning objectives
          </h2>

          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Understand what an equation is</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Solve simple equations</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Check your solutions</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/courses/algebra/chapter-1/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/algebra/chapter-1/lesson-4"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next →
          </Link>
        </div>
      </section>
    </main>
  );
}