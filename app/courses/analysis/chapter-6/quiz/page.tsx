
"use client";

import { useState } from "react";

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

  const score = answers.reduce(
    (total, answer, index) =>
      total + (answer === questions[index].correct ? 1 : 0),
    0
  );

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Analysis — Chapter 6
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Quiz Completed 🎉
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Your Score
          </p>

          <p className="mt-2 text-5xl font-bold">
            {score} / {questions.length}
          </p>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setFinished(false);
            }}
            className="mt-8 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white"
          >
            Try Again
          </button>
                    <button
               onClick={() => {
               window.location.href = "/courses/analysis/chapter-6";
               }}
                className="mt-3 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
               Exit Quiz
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-2xl pt-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Analysis
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Chapter 6 Quiz
        </h1>

        <p className="mt-2 text-slate-600">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            {question.question}
          </h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswer(index)}
                className={`w-full rounded-xl border p-4 text-left transition ${
                  answers[currentQuestion] === index
                    ? "border-blue-600 bg-blue-50"
                    : "border-slate-200 hover:border-blue-400"
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
            className="mt-8 rounded-xl bg-slate-950 px-7 py-3 font-semibold text-white disabled:opacity-40"
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next →"}
          </button>
        </div>
      </section>
    </main>
  );
}

