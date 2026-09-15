
"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Lesson3Page() {
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

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

  if (!allowed) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <Link
              href="/courses/analysis/chapter-6"
              className="font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ← Back to Chapter 6
            </Link>
          </div>
        </header>

        <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-12">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">🔒</div>

            <h1 className="mt-6 text-3xl font-bold">
              Lesson 3 is locked
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              This lesson is available with an active M1101 subscription.
              Subscribe to access the complete Chapter 6 content.
            </p>

            <Link
              href="/courses/analysis/chapter-6"
              className="mt-8 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              ← Back to Chapter 6
            </Link>
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
            href="/courses/analysis/chapter-6"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 6
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          M1101 · Analysis
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 — Application-2
        </h1>

        {/* Video */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:E0N-ehYRDu0"
            title="Lesson 3 — Application-2"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 3
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Application-2
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue building your
            understanding of the concepts introduced in Chapter 6
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
            href="/courses/analysis/chapter-6/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/analysis/chapter-6/lesson-4"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next →
          </Link>
        </div>
      </section>
    </main>
  );
}

