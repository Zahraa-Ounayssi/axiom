export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="text-2xl font-bold tracking-tight">
            AXIOM<span className="text-blue-600">.</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#courses" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              Courses
            </a>

            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              How it works
            </a>

            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              About
            </a>

            <a
              href="/login"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              University learning, redesigned.
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Learn smarter.
              <br />
              <span className="text-blue-600">Build your future.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              AXIOM gives university students everything they need to understand
              their courses, practice effectively, and prepare with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#courses"
                className="rounded-xl bg-slate-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-600"
              >
                Explore courses
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 px-7 py-4 text-center font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                How AXIOM works
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* Statistics */}
<section className="border-y border-slate-200 bg-white">
  <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
    
    <div className="border-b border-slate-200 p-8 text-center md:border-b-0 md:border-r">
      <p className="text-3xl font-bold tracking-tight md:text-4xl">20+</p>
      <p className="mt-2 text-sm text-slate-500">University Courses</p>
    </div>

    <div className="border-b border-slate-200 p-8 text-center md:border-b-0 md:border-r">
      <p className="text-3xl font-bold tracking-tight md:text-4xl">500+</p>
      <p className="mt-2 text-sm text-slate-500">Video Lessons</p>
    </div>

    <div className="border-r-0 border-slate-200 p-8 text-center md:border-r">
      <p className="text-3xl font-bold tracking-tight md:text-4xl">100+</p>
      <p className="mt-2 text-sm text-slate-500">Practice Quizzes</p>
    </div>

    <div className="p-8 text-center">
      <p className="text-3xl font-bold tracking-tight md:text-4xl">
        Weekly
      </p>
      <p className="mt-2 text-sm text-slate-500">Live Sessions</p>
    </div>

  </div>
</section>

    {/* Why AXIOM */}
<section id="how-it-works" className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Why AXIOM
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        Everything you need to learn with confidence.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        AXIOM brings your courses, practice, exams, and support together
        in one structured learning experience.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Feature 1 */}
      <div className="rounded-2xl border border-slate-200 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          ▶
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Video Courses
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Clear lessons designed to help you understand difficult
          university concepts step by step.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="rounded-2xl border border-slate-200 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          ✓
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Practice & Quizzes
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Practice what you learn with quizzes and exercises that
          help you identify what you really understand.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="rounded-2xl border border-slate-200 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          📄
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Exam Preparation
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Prepare with partial and final exam subjects, corrections,
          and detailed explanations.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="rounded-2xl border border-slate-200 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
          💬
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Student Support
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Stay connected through weekly live sessions and direct
          student communication.
        </p>
      </div>

    </div>
  </div>
</section>


    {/* Courses */}
<section id="courses" className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Explore courses
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        Everything you need to master your courses.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Structured lessons, applications, quizzes, exam preparation,
        and weekly live sessions — all in one place.
      </p>
    </div>

    {/* Semester 1 */}
    <div className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Semester 1
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            MISPE
          </h3>
        </div>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200">
          2 courses
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* M1100 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
              M1100
            </span>

            <span className="text-sm text-slate-400">
              Semester 1
            </span>
          </div>

          <h4 className="mt-7 text-2xl font-bold">
            Algebra
          </h4>

          <p className="mt-3 leading-7 text-slate-600">
            Build a strong foundation in algebra through structured
            courses, applications, quizzes, and exam preparation.
          </p>

          <a
           href="/courses/algebra"
            className="mt-7 inline-block font-semibold text-slate-950 transition group-hover:text-blue-600"
           >
           View course →
           </a>
        </div>

        {/* M1101 */}
        <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
              M1101
            </span>

            <span className="text-sm text-slate-400">
              Semester 1
            </span>
          </div>

          <h4 className="mt-7 text-2xl font-bold">
            Analysis
          </h4>

          <p className="mt-3 leading-7 text-slate-600">
            Understand analysis step by step with clear explanations,
            applications, quizzes, and complete exam preparation.
          </p>

         <a
           href="/courses/analysis"
            className="mt-7 inline-block font-semibold text-slate-950 transition group-hover:text-blue-600"
           >
           View course →
           </a>
        </div>


      </div>
    </div>

    {/* Semester 2 */}
<div className="mt-20">
  <div className="mb-6 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500">
        Semester 2
      </p>

      <h3 className="mt-1 text-2xl font-bold">
        MIS
      </h3>
    </div>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200">
      3 courses
    </span>
  </div>

  <div className="grid gap-6 md:grid-cols-3">

    {[
      ["M1102", "M1102"],
      ["M1104", "M1104"],
      ["M1106", "M1106"],
    ].map(([code, title]) => (
      <div
        key={code}
        className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
      >
        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
          {code}
        </span>

        <h4 className="mt-7 text-2xl font-bold">
          {title}
        </h4>

        <p className="mt-3 leading-7 text-slate-600">
          Structured learning, applications, quizzes, and exam
          preparation through AXIOM.
        </p>

        <a
          href={`/courses/${code}`}
          className="mt-7 inline-block font-semibold text-slate-950 transition group-hover:text-blue-600"
        >
          View course →
        </a>
      </div>
    ))}

  </div>
</div>
  </div>
</section>
{/* Exam Preparation */}
<section className="border-t border-slate-200 bg-slate-950 text-white">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Exam preparation
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        Prepare for your exams with real university subjects.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Practice with previous partial and final exam subjects,
        review corrections, and understand every solution through
        detailed video explanations.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">

      {/* PDF Subjects */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
          PDF
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Exam Subjects
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Access previous partial and final exam subjects
          organized by course.
        </p>
      </div>

      {/* Corrections */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
          ✓
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Full Corrections
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Compare your answers with a complete step-by-step
          correction for every subject.
        </p>
      </div>

      {/* Video */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
          ▶
        </div>

        <h3 className="mt-6 text-xl font-bold">
          Video Explanations
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Watch detailed explanations to understand how
          each exercise is solved.
        </p>
      </div>

    </div>

    <div className="mt-12">
      <a
        href="#courses"
        className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-500 hover:text-white"
      >
        Explore exam preparation →
      </a>
    </div>

  </div>
</section>

{/* Weekly Live */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Weekly live
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Learn together. Ask questions. Get unstuck.
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Join weekly live sessions to review difficult concepts,
          solve exercises, and ask questions directly.
        </p>

        <a
          href="#courses"
          className="mt-8 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
        >
          See upcoming sessions →
        </a>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Next live session
          </span>

          <span className="text-sm text-slate-500">
            Weekly
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-bold">
          Analysis — Problem Solving Session
        </h3>

        <p className="mt-3 text-slate-600">
          Review important concepts and solve university-level
          exercises together.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white p-5">
            <p className="text-sm text-slate-500">Day</p>
            <p className="mt-1 font-bold">Every week</p>
          </div>

          <div className="rounded-2xl bg-white p-5">
            <p className="text-sm text-slate-500">Format</p>
            <p className="mt-1 font-bold">Live session</p>
          </div>

        </div>

        <button
          className="mt-6 w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
        >
          View session details
        </button>

      </div>

    </div>
  </div>
</section>

    </main>
  );
}
