
"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Lesson3Page() {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const { data: subscription } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_code", "M1101")
        .eq("status", "active")
        .maybeSingle();

      setAllowed(!!subscription);
      setLoading(false);
    }

    checkAccess();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-slate-600">Loading...</p>
        </div>
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <Link
              href="/courses/analysis/chapter-3"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ← Back to Chapter 3
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="text-5xl">🔒</div>

            <h1 className="mt-6 text-3xl font-bold">
              Lesson 3 is locked
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Lesson 1 is available as a free preview.
              Subscribe to M1101 Analysis to access Lesson 3
              and the remaining lessons.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/courses/analysis/chapter-3"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
              >
                Back to Chapter 3
              </Link>

              <Link
                href="/courses/analysis"
                className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                View Course
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
            href="/courses/analysis/chapter-3"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 3
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          M1101 · Analysis
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 — Theoreme de valeur intermediaire et application
        </h1>

        {/* Video */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:87_iuOzlHs"
            title="Lesson 3 — Theoreme de valeur intermediaire et application"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 3
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Theoreme de valeur intermediaire et application
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue building your
            understanding of the concepts introduced in Chapter 3
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
            href="/courses/analysis/chapter-3/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/analysis/chapter-3"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Complete Chapter →
          </Link>
        </div>
      </section>
    </main>
  );
}

