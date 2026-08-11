import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function Lesson5Page() {
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
          Lesson 5 — Produit cartesienne
        </h1>

        {/* Video */}
         <div className="mt-10">
            <VideoPlayer
                 videoSrc="/M1100/chapter-01/lesson-08.mp4"
                 title="Lesson 5 — Produit cartesienne"
            />
        </div>

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 5
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Produit cartesienne
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will apply algebraic concepts
            to practical mathematical problems.
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
                Translate problems into algebraic expressions
              </span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                Apply equations to real situations
              </span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>
                Solve basic algebraic problems
              </span>
            </li>
          </ul>
        </div>

        {/* Complete Chapter */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/courses/algebra/chapter-1/lesson-4"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/algebra/chapter-1"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            ✓ Complete Chapter
          </Link>
        </div>
      </section>
    </main>
  );
}

