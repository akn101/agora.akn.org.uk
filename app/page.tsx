import Image from "next/image";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 bg-white overflow-hidden">
        {/* Subtle amber rule at the very top under the navbar */}
        <div className="absolute top-16 left-0 right-0 h-px bg-amber-400/30" />

        <div className="max-w-6xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
              Registered Charity No. 1217001
            </span>
          </div>

          {/* Display heading — editorial scale */}
          <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-bold text-slate-900 leading-[0.95] tracking-tight mb-10 max-w-5xl">
            A world where no<br />
            <em className="not-italic text-amber-500">refugee</em> has to<br />
            feel alone.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex gap-3">
              <a
                href="#about"
                className="px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-lg border border-slate-200 hover:border-slate-400 transition-colors"
              >
                Get Involved
              </a>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              A secure, community-driven platform helping refugees find belonging.
            </p>
          </div>
        </div>

        {/* Logo watermark — decorative, bottom right */}
        <div className="absolute bottom-12 right-8 opacity-[0.04] pointer-events-none select-none">
          <Image src="/logo.svg" alt="" width={320} height={320} aria-hidden />
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">
              What is Agora?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built for belonging
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Agora is a secure mobile platform designed to help refugees overcome social isolation — connecting them with others who share their language, culture, and background.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Built with refugee support organisations and global experts, it gives refugees the tools to create their own meaningful communities — simple, safe, and scalable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/aknHatchet - Agora - Screenshot 00000.png"
                alt="Agora App — Groups"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
              <Image
                src="/aknHatchet - Agora - Screenshot 00001.png"
                alt="Agora App — Chat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM — stat-heavy ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Social isolation is the silent crisis inside the refugee crisis.
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden mb-16">
            <div className="bg-slate-900 p-10">
              <p className="text-6xl font-bold text-amber-400 mb-3">2 in 3</p>
              <p className="text-slate-300 text-sm leading-relaxed">refugees felt isolated when they first arrived</p>
            </div>
            <div className="bg-slate-900 p-10">
              <p className="text-6xl font-bold text-amber-400 mb-3">1 in 2</p>
              <p className="text-slate-300 text-sm leading-relaxed">felt like outsiders in the UK</p>
            </div>
            <div className="bg-slate-900 p-10">
              <p className="text-6xl font-bold text-amber-400 mb-3">Most</p>
              <p className="text-slate-300 text-sm leading-relaxed">had no idea how to meet others from their culture</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-slate-300 text-lg leading-relaxed">
              Isolation leads to anxiety, depression, and PTSD — and slows or prevents integration. Current services are unsafe, inaccessible, or offer no autonomy.
            </p>
            <p className="text-2xl font-light italic text-slate-200 text-right">
              &ldquo;Agora was built to fill these gaps — with input from refugees themselves.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Small trusted communities,<br />at scale.
            </h2>
          </div>

          {/* Feature grid — editorial, not uniform */}
          <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-xl overflow-hidden">
            {[
              {
                title: "Group Discovery",
                body: "Join or create groups based on language, nationality, gender, age, and location — hyperlocal filtering built in.",
              },
              {
                title: "Secure Chat",
                body: "End-to-end encrypted messaging in your own language. Connect, plan, and build friendships safely.",
              },
              {
                title: "Event Hosting",
                body: "Propose and attend real-life meetups — cultural events, language practice, local walks, and more.",
              },
              {
                title: "Safety First",
                body: "Peer-to-peer verification, AI moderation, and a panic button for real-world meetups.",
              },
              {
                title: "Multilingual",
                body: "Onboarding in your preferred language. Groups are filtered to those who speak like you.",
              },
              {
                title: "Privacy Protected",
                body: "Minimal data collection. Non-precise location. End-to-end encryption throughout.",
              },
            ].map((feature, i) => (
              <div key={feature.title} className="bg-white p-10 group">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-amber-400 pt-1 select-none">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{feature.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT & TIMELINE ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Timeline */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">
                Milestones
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-12">
                Where we&apos;ve been,<br />where we&apos;re going.
              </h2>
              <div className="relative pl-6 border-l-2 border-slate-200 space-y-10">
                {[
                  {
                    date: "2025",
                    title: "Launched",
                    desc: "Pilot in Slough with Slough Refugee Support",
                    done: true,
                  },
                  {
                    date: "Feb 2026",
                    title: "Registered Charity",
                    desc: "Granted charity status in England & Wales (No. 1217001)",
                    done: true,
                  },
                  {
                    date: "2026",
                    title: "National Expansion",
                    desc: "Growing through charity partnerships across the UK",
                    done: false,
                  },
                  {
                    date: "Beyond",
                    title: "International",
                    desc: "Rollout to Hong Kong, United States, and beyond",
                    done: false,
                  },
                ].map((item) => (
                  <div key={item.date} className="relative">
                    <div
                      className={`absolute -left-[1.4rem] top-1.5 w-3 h-3 rounded-full border-2 ${
                        item.done
                          ? "bg-amber-400 border-amber-400"
                          : "bg-white border-slate-300"
                      }`}
                    />
                    <p className="text-xs font-mono text-slate-400 mb-1">{item.date}</p>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisors */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">
                Expert Advisors
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-12">
                Backed by people<br />who know this work.
              </h2>
              <div className="space-y-6">
                {[
                  { name: "Dina Haynes", org: "Yale Law School" },
                  { name: "Adio Dinika", org: "Distributed AI Research Institute" },
                  { name: "Vivian Cheung", org: "Equal Justice Hong Kong" },
                  { name: "Jean Kelly", org: "Slough Refugee Support" },
                  { name: "Uday Khemka", org: "Khemka Foundation & UNHCR Partner" },
                ].map((a) => (
                  <div key={a.name} className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                    <span className="font-semibold text-slate-900">{a.name}</span>
                    <span className="text-slate-500 text-sm text-right">{a.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase mb-4">
              Get Involved
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Help us build a<br />more connected world.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We&apos;re always looking for passionate individuals, organisations, and funders to partner with. Whether you represent a charity, a tech team, or just care about this — we&apos;d love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <ContactButton />
            <a
              href="https://admin.agora.akn.org.uk"
              className="text-sm text-slate-400 hover:text-slate-700 transition-colors"
            >
              Charity &amp; Staff Login →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
