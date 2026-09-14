
"use client";

import { useState } from "react";

const questions = [
  {
    question: "Soit \(f\) définie au voisinage de \(a\). La condition x→alim​f(x)=L  signifie, avec la définition \(\varepsilon\)-\(\delta\), que :",
    options: ["Pour tout \(\varepsilon>0\), il existe \(\delta>0\) tel que ∣x−a∣<δ⇒∣f(x)−L∣<ε.  ", "AIl existe \(\varepsilon>0\) tel que, pour tout \(\delta>0\), ∣f(x)−L∣<ε.", "\(f(a)=L\) nécessairement.", "f(x)=L pour tout \(x\) proche de \(a\)."],
    correct: 0,
  },
  {
    question: "x→0lim​x1+x−1​.",
    options: ["0", "0.5", "1", "+ infini"],
    correct: 1,
  },
  {
    question: "f(x)=​x−2x2−4​,a,​x=2,x=2.​   ​pour quelle valeur de a f est continie en 2",
    options: ["a=0", "a=1", "a=2", "a=4"],
    correct: 3,
  },
  {
    question: "Soit fx= sinx sur x si x different que 0 et 0 si x=0 alors",
    options: ["f est continue en 0", "f nest pas definie en 0 ", "f admet une limite infinie en 0", "f peut etre prolongee par continuite en posant f (0)=0"],
    correct: 3,
  },
  {
    question: "On sait que lim lorsque x tends vers a de fx =L app R mais f(a) different que L",
    options: ["f est continue en a", "f n admet pas de limite en a ", "f n est pas continue en a mais peut etre prolonge par continuite en posant f(a)=L", "f est necessairement derivable en a"],
    correct: 2,
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
            Analysis — Chapter 3
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
               window.location.href = "/courses/analysis/chapter-3";
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
          Chapter 3 Quiz
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

