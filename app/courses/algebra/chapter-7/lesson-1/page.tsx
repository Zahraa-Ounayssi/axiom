import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function Lesson1Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/algebra/chapter-7"
            className="font-semibold text-slate-700 hover:text-blue-600"
          >
            ← Back to Chapter 7
          </Link>
        </div>
      </header>

      {/* Lesson */}
      <section className="mx-auto max-w-5xl px-6 py-12">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Chapter 7
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 1
        </h1>

        {/* Video */}
        <div className="mt-10">
                   <VideoPlayer
                       videoSrc="/M1100/chapter-07/lesson-01.mp4"
                       title="Lesson 1— "
                   />
              </div>
  

        {/* Description */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">

          <p className="text-sm font-semibold text-blue-600">
            Lesson 1
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Introduction to Chapter 7
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will learn the fundamental concepts
            introduced in Chapter 7 and build the foundation for the
            following lessons.
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
        <div className="mt-10 flex justify-end">

          <Link
            href="/courses/algebra/chapter-7/lesson-2"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Next →
          </Link>

        </div>

      </section>
    </main>
  );
}

