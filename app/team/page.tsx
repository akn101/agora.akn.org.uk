import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — Agora",
  description: "Meet the trustees and team behind Agora, the registered charity connecting refugees and fighting social isolation.",
};

const trustees = [
  {
    name: "Ahnaf Kabir",
    role: "Founder & Trustee",
    bio: "Designer and developer based in London. Ahnaf founded Agora with a focus on building technology that genuinely helps people — obsessed with the subtleties, in eternal pursuit of refinement.",
    initials: "AK",
  },
];

const team = [
  { name: "John Buchan", role: "Team Member", initials: "JB" },
  { name: "Zain Carrimjee", role: "Team Member", initials: "ZC" },
  { name: "Sandy Riddick", role: "Team Member", initials: "SR" },
];

const advisors = [
  { name: "Dina Haynes", affiliation: "Yale Law School" },
  { name: "Adio Dinika", affiliation: "Distributed AI Research Institute" },
  { name: "Vivian Cheung", affiliation: "Equal Justice Hong Kong" },
  { name: "Jean Kelly", affiliation: "Slough Refugee Support" },
  { name: "Uday Khemka", affiliation: "Khemka Foundation & UNHCR Partner" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Registered Charity No. 1217001
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6 max-w-2xl">
            The people behind Agora.
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            A small, committed team who believe technology can help tackle refugee isolation — and that the people most affected should be at the heart of that work.
          </p>
        </div>
      </section>

      {/* ── TRUSTEES ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-3">
                Trustees
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                The board holds legal responsibility for Agora as a registered charity.
              </p>
            </div>

            <div className="md:col-span-3 grid sm:grid-cols-2 gap-8">
              {trustees.map((t) => (
                <div key={t.name} className="border border-slate-100 rounded-xl p-8 bg-slate-50">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6">
                    <span className="text-white text-sm font-bold tracking-wide">{t.initials}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{t.name}</h3>
                  <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-4">
                    {t.role}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE TEAM ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-3">
                Core Team
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                The people who design, build, and grow Agora day to day.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="divide-y divide-slate-100">
                {team.map((m) => (
                  <div key={m.name} className="flex items-center justify-between py-5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-500 text-xs font-bold">{m.initials}</span>
                      </div>
                      <span className="font-semibold text-slate-900">{m.name}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVISORS ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-3">
                Expert Advisors
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading voices in refugee law, AI ethics, and social integration.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="divide-y divide-slate-100">
                {advisors.map((a) => (
                  <div key={a.name} className="flex items-baseline justify-between gap-6 py-5 first:pt-0 last:pb-0">
                    <span className="font-semibold text-slate-900">{a.name}</span>
                    <span className="text-slate-400 text-sm text-right">{a.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARITY DISCLOSURE ──────────────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Agora is a registered charity in England &amp; Wales (No. 1217001). We are committed to transparency and good governance. For governance documents and annual reports, please{" "}
            <a href="/#contact" className="text-slate-600 underline underline-offset-2 hover:text-slate-900 transition-colors">
              get in touch
            </a>
            .
          </p>
        </div>
      </section>

    </div>
  );
}
