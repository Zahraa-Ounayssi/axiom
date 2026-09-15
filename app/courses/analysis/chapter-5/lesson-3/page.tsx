
"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Lesson3Page() {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Not logged in → no access
      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      // Check active M1101 subscription
      const { data: subscription } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_code", "M1101")
        .eq("status", "active")
        .maybeSingle();

      setAllowed(!!subscription);
      setLoading(false);
    };

    checkAccess();
  }, []);

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">Checking access...</p>
      </main>
    );
  }

  // Locked page
  if (!allowed) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <Link
              href="/courses/analysis/chapter-5"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ← Back to Chapter 5
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="text-5xl">🔒</div>

            <h1 className="mt-5 text-3xl font-bold">
              This lesson is locked
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Lesson 1 is available for free preview.
              <br />
              Subscribe to M1101 to access this lesson and all other lessons.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/courses/analysis/chapter-5"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
              >
                ← Back to Chapter 5
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

  // Full lesson for subscribers
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/analysis/chapter-5"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 5
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          M1101 · Analysis
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 — Application 1
        </h1>

        {/* Video */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:KFOazQFqTRA"
            title="Lesson 3 — Application 1"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 3
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Application 1
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue building your
            understanding of the concepts introduced in Chapter 5
            through mathematical explanations and examples.
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
              <span>Understand the main concepts of this lesson</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Use the mathematical definitions correctly</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Apply the concepts to mathematical examples</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/courses/analysis/chapter-5/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/analysis/chapter-5/lesson-4"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next →
          </Link>
        </div>
      </section>
    </main>
  );
}

