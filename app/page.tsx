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

            <a href="#previous-year" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              previous-year
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



<section className="mx-auto max-w-6xl px-6 py-20">
  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
    <div className="px-6 py-12 text-center md:px-12 md:py-16">
      <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
        Lebanese University • L1
      </span>


  <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
    Your University Learning Platform
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
    AXIOM is an educational platform designed for first-year students
    at the Lebanese University. It provides organized and accessible
    learning resources for students studying Mathematics, Statistics,
    and Computer Science.
  </p>

  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
    From university lectures and detailed video lessons to exercises,
    applications, and solved exams, AXIOM helps students understand
    their courses, strengthen their skills, and prepare effectively
    for university examinations.
  </p>

  <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
        🎓
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        Lebanese University
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Learning resources created with the needs of Lebanese University
        students in mind.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
        📚
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        L1 Courses
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Courses and resources for first-year Mathematics, Statistics,
        and Computer Science students.
      </p>
    </div>

    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-left">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
        📝
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        Learn & Prepare
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Detailed lessons, educational videos, exercises, applications,
        and solved exams to help you prepare with confidence.
      </p>
    </div>
  </div>

  <div className="mx-auto mt-12 max-w-4xl border-t border-gray-100 pt-8">
    <p className="text-sm leading-7 text-gray-500">
      AXIOM covers key first-year university subjects including
      Algebra, Analysis, Mathematics, Statistics, and Computer Science,
      with resources designed to support students throughout their
      academic journey.
    </p>
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


{/* Previous Year Courses */}
<section id="previous-year" className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-24">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Previous Year
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Previous Year Courses
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Access previous year exam subjects and practice with real university
        exam papers.
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Exam papers are provided without corrections.
      </p>
    </div>

    {/* Semester 1 */}
    <div className="mt-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Semester 1
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          MISPE
        </h3>
      </div>

      {/* Partial */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">
            Partial Exams
          </h4>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* M1100 */}
          <a
            href="/pdfs/previous_year/semester1/partial/M1100.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                M1100
              </span>

              <span className="text-slate-400 transition group-hover:text-blue-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Algebra
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year partial exam
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              Open PDF →
            </p>
          </a>

          {/* M1101 */}
          <a
            href="/pdfs/previous_year/semester1/partial/M1101.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                M1101
              </span>

              <span className="text-slate-400 transition group-hover:text-blue-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Analysis
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year partial exam
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              Open PDF →
            </p>
          </a>

          {/* P1100 */}
          <a
            href="/pdfs/previous_year/semester1/partial/P1100.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                P1100
              </span>

              <span className="text-slate-400 transition group-hover:text-blue-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Physics
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year partial exam
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              Open PDF →
            </p>
          </a>

          {/* P1101 */}
          <a
            href="/pdfs/previous_year/semester1/partial/P1101.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700">
                P1101
              </span>

              <span className="text-slate-400 transition group-hover:text-blue-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Physics
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year partial exam
            </p>

            <p className="mt-5 text-sm font-medium text-blue-600">
              Open PDF →
            </p>
          </a>

        </div>
      </div>

      {/* Final */}
      <div className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-indigo-600" />
          <h4 className="text-xl font-bold text-slate-900">
            Final Exams
          </h4>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* M1100 */}
          <a
            href="/pdfs/previous_year/semester1/final/M1100.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">
                M1100
              </span>

              <span className="text-slate-400 transition group-hover:text-indigo-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Algebra
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-indigo-600">
              Open PDF →
            </p>
          </a>

          {/* M1101 */}
          <a
            href="/pdfs/previous_year/semester1/final/M1101.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">
                M1101
              </span>

              <span className="text-slate-400 transition group-hover:text-indigo-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Analysis
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-indigo-600">
              Open PDF →
            </p>
          </a>

          {/* P1101 */}
          <a
            href="/pdfs/previous_year/semester1/final/P1101.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">
                P1101
              </span>

              <span className="text-slate-400 transition group-hover:text-indigo-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Physics
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-indigo-600">
              Open PDF →
            </p>
          </a>

        </div>
      </div>
    </div>

    {/* Semester 2 */}
    <div className="mt-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Semester 2
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          MIS
        </h3>
      </div>

      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-violet-600" />
          <h4 className="text-xl font-bold text-slate-900">
            Final Exams
          </h4>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* M1102 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              M1102
            </span>

            <h5 className="mt-5 font-semibold text-slate-900">
              Course M1102
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Coming soon
            </p>
          </div>

          {/* M1103 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              M1103
            </span>

            <h5 className="mt-5 font-semibold text-slate-900">
              Course M1103
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Coming soon
            </p>
          </div>

          {/* M1104 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              M1104
            </span>

            <h5 className="mt-5 font-semibold text-slate-900">
              Course M1104
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Coming soon
            </p>
          </div>

          {/* M1105 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              M1105
            </span>

            <h5 className="mt-5 font-semibold text-slate-900">
              Course M1105
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Coming soon
            </p>
          </div>

          {/* M1106 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-600">
              M1106
            </span>

            <h5 className="mt-5 font-semibold text-slate-900">
              Course M1106
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Coming soon
            </p>
          </div>

          {/* I1101 */}
          <a
            href="/pdfs/previous_year/semester2/final/I1101.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-violet-50 px-3 py-1.5 text-sm font-bold text-violet-700">
                I1101
              </span>

              <span className="text-slate-400 transition group-hover:text-violet-600">
                ↗
              </span>
            </div>

            <h5 className="mt-5 font-semibold text-slate-900">
              Informatics
            </h5>

            <p className="mt-2 text-sm text-slate-500">
              Previous year final exam
            </p>

            <p className="mt-5 text-sm font-medium text-violet-600">
              Open PDF →
            </p>
          </a>

        </div>
      </div>
    </div>

    {/* Notice */}
    <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5">
      <div className="flex gap-4">
        <div className="mt-0.5 text-blue-600">
          ℹ
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Previous year exam resources
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            These exam papers are provided for practice and preparation.
            Corrections and solution videos are not included.
          </p>
        </div>
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
