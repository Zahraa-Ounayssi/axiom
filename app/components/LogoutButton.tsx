"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
const router = useRouter();

async function handleLogout() {
await supabase.auth.signOut();
router.push("/login");
}

return ( <button
   onClick={handleLogout}
   className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
 >
Logout </button>
);
}
