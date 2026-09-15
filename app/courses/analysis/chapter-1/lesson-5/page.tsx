
"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Lesson5Page() {
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

    // Lesson 5 requires an active subscription
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
              Lesson 5 is locked
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Lesson 1 is available as a free preview.
              Subscribe to M1101 Analysis to access Lesson 5
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
          Lesson 5 — Application
        </h1>

        {/* Video */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:EJb9Rj7wUY0"
            title="Lesson 5 — Application sur Borne superieur et inferieur et sur propriete d archimede"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 5
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Application sur Borne superieur et inferieur et sur propriete
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will review and strengthen your
            understanding of the main concepts covered in this chapter.
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
              <span>Review the main concepts of the chapter</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                Connect the different ideas studied in the lessons
              </span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Prepare for the Chapter 1 quiz</span>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/courses/analysis/chapter-1/lesson-4"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/analysis/chapter-1"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            ✓ Complete Chapter
          </Link>
        </div>
      </section>
    </main>
  );
}

