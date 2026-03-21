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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Registered Charity No. 1217001
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Agora is built by a small, committed team who believe technology can help tackle
            refugee isolation — and that the people most affected should be at the heart of that work.
          </p>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Trustees</h2>
          <p className="text-slate-500 text-center mb-12 text-sm">
            The board of trustees holds legal responsibility for Agora as a registered charity.
          </p>
          <div className="flex justify-center">
            {trustees.map((trustee) => (
              <div
                key={trustee.name}
                className="max-w-sm w-full bg-slate-50 rounded-2xl p-8 text-center shadow-sm border border-slate-100"
              >
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-white text-2xl font-bold">{trustee.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{trustee.name}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">
                  {trustee.role}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">{trustee.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Core Team</h2>
          <p className="text-slate-500 text-center mb-12 text-sm">
            The people who design, build, and grow Agora day to day.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-600 font-bold">{member.initials}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Expert Advisors</h2>
          <p className="text-slate-400 mb-12 text-sm">
            Agora is backed by leading voices in refugee law, AI ethics, and social integration.
          </p>
          <ul className="space-y-4">
            {advisors.map((advisor) => (
              <li key={advisor.name} className="flex flex-col sm:flex-row sm:justify-center sm:gap-2">
                <span className="font-semibold text-white">{advisor.name}</span>
                <span className="text-slate-400 hidden sm:inline">&mdash;</span>
                <span className="text-slate-300">{advisor.affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Charity disclosure */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-500 text-sm leading-relaxed">
            Agora is a registered charity in England & Wales (No. 1217001).
            We are committed to transparency and good governance.
            For governance documents and annual reports, please{" "}
            <a href="/#contact" className="underline hover:text-slate-900 transition-colors">
              get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
