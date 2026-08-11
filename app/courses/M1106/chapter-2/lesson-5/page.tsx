
import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function Lesson5Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link
            href="/courses/M1106/chapter-2"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 2
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          M1106
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Lesson 5 — M1106
        </h1>

        <div className="mt-10">
          <VideoPlayer
            videoSrc="/videos/M1106/chapter-2/lesson-5.mp4"
            title="Lesson 5 — M1106"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7">
          <p className="text-sm font-semibold text-blue-600">
            Lesson 5
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            M1106 — Lesson 5
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            In this lesson, you will review and strengthen your
            understanding of the main concepts covered in Chapter 2.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-bold">
            Learning objectives
          </h2>

          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Review the main concepts of Chapter 2</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Connect the different ideas studied in the lessons</span>
            </li>

            <li className="flex items-start gap-3 text-slate-700">
              <span className="font-bold text-blue-600">✓</span>
              <span>Prepare for the Chapter 2 quiz</span>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/courses/M1106/chapter-2/lesson-4"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
          >
            ← Previous
          </Link>

          <Link
            href="/courses/M1106/chapter-2"
            className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            ✓ Complete Chapter
          </Link>
        </div>
      </section>
    </main>
  );
}

