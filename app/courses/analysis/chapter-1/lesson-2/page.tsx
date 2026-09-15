
"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Lesson2Page() {
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

    // Lesson 2 is not available without an account
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

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Checking lesson access...
        </p>
      </main>
    );
  }

  // Locked
  if (!allowed) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
              🔒
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue-600">
              M1101 · Analysis
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Lesson 2 is locked
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Lesson 1 is available as a free preview.
              Subscribe to M1101 Analysis to access Lesson 2
              and the remaining lessons.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/courses/analysis/chapter-1"
                className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                ← Back to Chapter 1
              </Link>

              <Link
                href="/courses/analysis"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
              >
                Back to Course
              </Link>
            </div>

          </div>
        </section>
      </main>
    );
  }

  // Full lesson for subscribed students
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/analysis/chapter-1"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 1
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          M1101 · Analysis
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 2 — Analysis Concepts
        </h1>

        {/* Video 1 */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:EjQzf9JimoY"
            title="Lesson 2 — Partie entier"
          />
        </div>

        {/* Description 1 */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 2
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Partie entier explication + exercice 4 et 5
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue exploring the main
            concepts of analysis through clear explanations and
            mathematical examples.
          </p>
        </div>

        {/* Video 2 */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:6I6P2U8-jvU"
            title="Lesson 2 — Partie entier"
          />
        </div>

        {/* Description 2 */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 2
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Partie entier exercice 5, 6 et 7
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue exploring the main
            concepts of analysis through clear explanations and
            mathematical examples.
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
              <span>
                Understand the concepts introduced in this lesson
              </span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                Work with the main mathematical definitions
              </span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                Apply the concepts to mathematical examples
              </span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">

          <Link
            href="/courses/analysis/chapter-1/lesson-1"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/analysis/chapter-1/lesson-3"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            Next →
          </Link>

        </div>

      </section>
    </main>
  );
}

