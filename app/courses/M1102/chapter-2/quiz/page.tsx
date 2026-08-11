
"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "Question 1",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 0,
  },
  {
    question: "Question 2",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 1,
  },
  {
    question: "Question 3",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 2,
  },
  {
    question: "Question 4",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 3,
  },
  {
    question: "Question 5",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 0,
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.reduce((total, answer, index) => {
    return total + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              M1102 — Chapter 2
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Quiz Completed 🎉
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Your score
            </p>

            <p className="mt-2 text-5xl font-bold">
              {score} / {questions.length}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setFinished(false);
                }}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-600"
              >
                Try Again
              </button>

              <Link
                href="/courses/M1102/chapter-2"
                className="rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Back to Chapter
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <Link
            href="/courses/m1102/chapter-2"
            className="font-semibold text-slate-700 transition hover:text-blue-600"
          >
            ← Back to Chapter 2
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            M1102
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Chapter 2 Quiz
          </h1>

          <p className="mt-3 text-slate-600">
            Test your understanding of Chapter 2.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span>
              {Math.round(
                ((currentQuestion + 1) / questions.length) * 100
              )}
              %
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{
                width: `${
                  ((currentQuestion + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            {question.question}
          </h2>

          <div className="mt-7 space-y-3">
            {question.options.map((option, index) => {
              const selected = answers[currentQuestion] === index;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(index)}
                  className={`w-full rounded-xl border p-4 text-left font-medium transition ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >
                  <span className="mr-3 font-bold">
                    {String.fromCharCode(65 + index)}.
                  </span>

                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
              className="rounded-xl bg-slate-950 px-7 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next →"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

