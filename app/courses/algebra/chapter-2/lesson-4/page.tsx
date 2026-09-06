import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function Lesson4Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/algebra/chapter-2"
            className="font-semibold text-slate-700 hover:text-blue-600"
          >
            ← Back to Chapter 2
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Chapter 2
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 4 Exercices
        </h1>

       <div className="mt-10">
             <VideoPlayer
                 videoSrc="https://youtu.be/yZ4rSvzwxHs"
                 title="Lesson 4— Exercices"
             />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 4 Exercices
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Lesson 4 Exercices
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will continue learning the main
            concepts of Chapter 2.
          </p>
        </div>

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

        <div className="mt-10 flex justify-between">
          <Link
            href="/courses/algebra/chapter-2/lesson-3"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/algebra/chapter-2/lesson-5"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Next →
          </Link>
        </div>
      </section>
    </main>
  );
}

