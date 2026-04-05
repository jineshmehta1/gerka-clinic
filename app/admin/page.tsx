"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) router.push("/admin/dashboard");
    else alert("Invalid Credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-[2rem] shadow-xl border border-zinc-200 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-light text-zinc-900 uppercase tracking-widest text-center">Admin Portal</h2>
        <input type="email" placeholder="Email" className="w-full p-4 bg-zinc-50 rounded-xl border-none outline-none" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-4 bg-zinc-50 rounded-xl border-none outline-none" onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-zinc-900 text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs">Login</button>
      </form>
    </div>
  );
}