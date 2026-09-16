"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const chapters = [
  { number: "01", lessons: 5 },
  { number: "02", lessons: 4 },
  { number: "04", lessons: 4 },
  { number: "05", lessons: 3 },
  { number: "06", lessons: 3 },
  { number: "07", lessons: 2 },
];

export default function AlgebraPage() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    checkAccess();
    loadPdf();
  }, []);

  async function checkAccess() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Visitor is allowed to see the course structure
    if (!user) {
      setAllowed(false);
      setLoading(false);
      return;
    }

    // Check M1100 subscription
    const { data, error } = await supabase
      .from("subscriptions")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_code", "M1100")
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

  async function loadPdf() {
    const { data, error } = await supabase.storage
      .from("courses_pdfs")
      .createSignedUrl("M1100/chapter04/pdf1.pdf", 3600);

    if (error) {
      console.error("PDF error:", error);
      return;
    }

    setPdfUrl(data.signedUrl);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-600">Loading course...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* Header */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">

            <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm font-bold text-blue-400">
              M1100
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Algebra
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A complete learning experience designed to help you
              understand algebra, practice effectively, and prepare
              confidently for your university exams.
            </p>

          </div>
        </div>
      </section>

      {/* Access status */}
      <section className="mx-auto max-w-7xl px-6 pt-10">

        {allowed ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-5">
            <p className="font-semibold text-green-800">
              ✓ You have full access to this course.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5">
            <p className="font-semibold text-blue-800">
              🔓 Preview the course structure and try the first lesson
              of each chapter for free.
            </p>
          </div>
        )}

      </section>

      {/* Course content */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Main */}
          <div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Course content
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Learn step by step
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Each chapter combines video lessons, applications,
                and a quiz to help you check your understanding.
              </p>
            </div>

            {/* Chapters */}
            <div className="mt-10 space-y-5">

              {chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                        {chapter.number}
                      </span>

                      <div>
                        <h3 className="text-xl font-bold">
                          {`Chapter ${chapter.number}`}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {chapter.lessons} video lessons
                        </p>
                      </div>

                    </div>

                    <Link
                      href={`/courses/algebra/chapter-${parseInt(
                        chapter.number
                      )}`}
                      className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-600"
                    >
                      Open
                    </Link>

                  </div>

                </div>
              ))}

            </div>

            {/* PDF Resources */}
            <div className="mt-14">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                PDF Resources
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Chapter PDFs
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Course documents and chapter materials.
              </p>

              <div className="mt-8 space-y-6">

                {/* Chapter 4 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6">

                  <h3 className="text-xl font-bold">
                    Chapter 4
                  </h3>

                  <div className="mt-4 space-y-3">

                    <a
                      href={pdfUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition ${
                        pdfUrl
                          ? "hover:border-blue-400 hover:bg-blue-50"
                          : "cursor-not-allowed opacity-50"
                      }`}
                    >

                      <div className="flex items-center gap-3 min-w-0">

                        <span className="text-2xl">
                          📄
                        </span>

                        <span className="font-medium text-slate-900 break-all">
                          pdf1
                        </span>

                      </div>

                      <span className="shrink-0 text-sm font-semibold text-blue-600">
                        {pdfUrl ? "Open PDF →" : "Loading..."}
                      </span>

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <aside>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <h3 className="mb-5 text-lg font-semibold text-slate-900">
                Course resources
              </h3>

              <div className="space-y-3">

                <Link
                  href="/courses/algebra/partial"
                  className="block w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="font-medium text-slate-900">
                    📄 Partial Exams
                  </div>

                  <span className="mt-1 block text-sm text-slate-500">
                    Subjects + corrections + explanations
                  </span>
                </Link>

                <Link
                  href="/courses/algebra/final"
                  className="block w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="font-medium text-slate-900">
                    📄 Final Exams
                  </div>

                  <span className="mt-1 block text-sm text-slate-500">
                    Subjects + corrections + explanations
                  </span>
                </Link>

              </div>

            </div>

          </aside>

        </div>
      </section>

      {/* Back */}
      <div className="mx-auto max-w-7xl px-6 pb-10">

        <Link
          href="/dashboard"
          className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-900 hover:bg-blue-500 hover:text-white"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>
  );
}