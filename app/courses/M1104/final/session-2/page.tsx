"use client";

import VideoPlayer from "@/app/components/videoplayer";
import Link from "next/link";

export default function SessionPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-10">
      
      {/* Back */}
      <Link
        href="/courses/M1104/final"
        className="mb-8 inline-block text-sm font-medium text-gray-600 hover:text-black"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
            Final
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Session 2
          </h1>

          <p className="mt-3 text-gray-500">
            Explanation, exam and correction
          </p>
        </div>

        {/* Video */}
               <div className="mt-10">
                           <VideoPlayer
                               videoSrc="/videos/M1104/final/session-2/explanation.mp4"
                               title="Session 2— "
                           />
                      </div>

        {/* Exam PDF */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            📄 Exam PDF
          </h2>

          <p className="mb-5 text-gray-500">
            Open the exam PDF and work on the questions.
          </p>

          <a
            href="/pdfs/M1104/final/session-2/exam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            View Exam PDF
          </a>
        </section>

        {/* Correction */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            ✅ Correction
          </h2>

          <p className="mb-5 text-gray-500">
            Check the complete correction of the exam.
          </p>

          <a
            href="/pdfs/M1104/final/session-2/correction.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
          >
            View Correction
          </a>
        </section>

      </div>
    </main>
  );
}