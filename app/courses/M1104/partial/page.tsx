import Link from "next/link";

export default function FinalPage() {
  const sessions = [
    {
      number: "1",
      title: "Session 1",
    },
    {
      number: "2",
      title: "Session 2",
    },
    {
      number: "3",
      title: "Session 3",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/courses/M1104"
          className="mb-8 inline-block text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Course
        </Link>

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Exam
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Partial
          </h1>

          <p className="mt-3 text-gray-500">
            Choose a session
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {sessions.map((session) => (
            <Link
              key={session.number}
              href={`/courses/M1104/partial/session-${session.number}`}
              className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 font-bold text-blue-600">
                {session.number}
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                {session.title}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Video, exam PDF and correction
              </p>

              <div className="mt-6 font-semibold text-black">
                View Session →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}