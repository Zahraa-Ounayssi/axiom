"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";
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

      const { data, error } = await supabase
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_code", "M1100")
        .eq("status", "active")
        .maybeSingle();

      if (error || !data) {
        setAllowed(false);
      } else {
        setAllowed(true);
      }

      setLoading(false);
    }

    checkAccess();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950 flex items-center justify-center">
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
              href="/courses/algebra/chapter-4"
              className="font-semibold text-slate-700 hover:text-blue-600"
            >
              ← Back to Chapter 4
            </Link>
          </div>
        </header>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">

            <div className="text-5xl">
              🔒
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              This lesson is locked
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Lesson 1 is available for free. Subscribe to M1100 Algebra
              to access this lesson and the rest of the course.
            </p>

            <Link
              href="/courses/algebra"
              className="mt-7 inline-block rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Back to M1100 Algebra
            </Link>

          </div>
        </section>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/algebra/chapter-4"
            className="font-semibold text-slate-700 hover:text-blue-600"
          >
            ← Back to Chapter 4
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Chapter 4
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 Loi induite
        </h1>

        {/* Video */}
        <div className="mt-10">
          <VideoPlayer
            videoSrc="youtube:BO-R0Z5KmUw"
            title="Lesson 3— Loi induite"
          />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">

          <p className="text-sm font-semibold text-blue-600">
            Lesson 3 Loi induite
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Chapter 4 — Lesson 3 Loi induite
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Continue learning the main concepts of Chapter 4
            and strengthen your understanding through examples
            and practice.
          </p>

        </div>

        {/* Learning objectives */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">

          <h2 className="text-2xl font-bold">
            Learning objectives
          </h2>

          <ul className="mt-5 space-y-4">

            <li className="flex gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              Understand the main concepts
            </li>

            <li className="flex gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              Follow the mathematical methods
            </li>

            <li className="flex gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              Apply the concepts to exercises
            </li>

          </ul>

        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between">

          <Link
            href="/courses/algebra/chapter-4/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/algebra/chapter-4/lesson-4"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Next →
          </Link>

        </div>

      </section>
    </main>
  );
}