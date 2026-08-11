import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function Lesson3Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/algebra/chapter-6"
            className="font-semibold text-slate-700 hover:text-blue-600"
          >
            ← Back to Chapter 6
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Chapter 6
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 3 Exrcice complexe
        </h1>

        {/* Video */}
       <div className="mt-10">
                  <VideoPlayer
                      videoSrc="/M1100/chapter-06/lesson-05.mp4"
                      title="Lesson 3— Exrcice complexe"
                  />
             </div>
 
        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">

          <p className="text-sm font-semibold text-blue-600">
            Lesson 3 Exrcice complexe
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Chapter 6 — Lesson 3 Exrcice complexe
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Continue learning the main concepts of Chapter 6
            through explanations, examples, and practice.
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
            href="/courses/algebra/chapter-6/lesson-2"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/algebra/chapter-6/lesson-4"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Next →
          </Link>

        </div>

      </section>
    </main>
  );
}

