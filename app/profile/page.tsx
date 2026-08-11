
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    setLoading(true);
    setMessage("");

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      router.replace("/login");
      return;
    }

    setEmail(user.email ?? "");

    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, email")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error(error);
      setMessage("Could not load your profile.");
    } else {
      setFullName(data?.full_name ?? "");
    }

    setLoading(false);
  }

  async function saveProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSaving(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
      })
      .eq("id", user.id);

    if (error) {
      console.error(error);
      setMessage("Could not update your profile.");
    } else {
      setMessage("Profile updated successfully.");
    }

    setSaving(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-600">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              AXIOM<span className="text-blue-600">.</span>
            </h1>

            <p className="mt-2 text-slate-600">
              Student Profile
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-100"
          >
            Dashboard
          </button>
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your AXIOM student account.
            </p>
          </div>

          <form onSubmit={saveProfile} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                disabled
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Email is managed by your AXIOM account.
              </p>
            </div>

            {/* Save */}
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-slate-950 px-5 py-3.5 font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

          </form>

          {/* Message */}
          {message && (
            <p className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
              {message}
            </p>
          )}

          {/* Logout */}
          <div className="mt-8 border-t border-slate-200 pt-6">
            <button
              onClick={handleLogout}
              className="w-full rounded-xl border border-red-200 px-5 py-3.5 font-semibold text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

