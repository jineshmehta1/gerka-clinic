import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Calendar, Phone, Mail, MessageSquare } from "lucide-react";

export default async function AdminDashboard() {
  // Security Check: Basic cookie check (for production, use NextAuth)
  const authCookie = cookies().get("admin_token");
  if (!authCookie) redirect("/admin");

  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8 pt-14 md:p-20">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-3xl font-light text-zinc-900 tracking-tight">Clinical Bookings</h1>
            <p className="text-zinc-500 text-sm">Overview of all patient appointments from Neon DB.</p>
          </div>
          <div className="px-4 py-2 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
            {appointments.length} Total
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white border border-zinc-200 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${apt.status === 'PAID' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {apt.status}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">{apt.createdAt.toDateString()}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-900">{apt.name}</h3>
                  <p className="text-zinc-500 font-light">{apt.service}</p>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-zinc-600 font-light">
                  <span className="flex items-center gap-2"><Phone size={14}/> {apt.phone}</span>
                  <span className="flex items-center gap-2"><Mail size={14}/> {apt.email}</span>
                </div>
              </div>

              <div className="md:w-1/3 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 relative">
                <MessageSquare className="absolute top-4 right-4 text-zinc-200" size={20} />
                <p className="text-[10px] font-bold uppercase text-zinc-400 mb-2">Patient Message</p>
                <p className="text-xs text-zinc-600 italic leading-relaxed">{apt.message || "No specific concerns provided."}</p>
              </div>

              <div className="flex flex-col justify-center text-right">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Deposit Paid</p>
                <p className="text-2xl font-bold text-zinc-900">€{apt.amount}</p>
              </div>
            </div>
            
          ))}

        </div>
      </div>
    </div>
  );
}