import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-3 group w-fit">
            <Image src="/logo.svg" alt="Agora Logo" width={24} height={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="font-bold text-slate-900 text-sm">Agora</span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            Registered Charity No. 1217001<br />
            England &amp; Wales
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Navigate</p>
          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors w-fit">Home</Link>
            <Link href="/team" className="hover:text-slate-900 transition-colors w-fit">Team</Link>
            <a href="/#contact" className="hover:text-slate-900 transition-colors w-fit">Get Involved</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Organisation</p>
          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <a href="https://admin.agora.akn.org.uk" className="hover:text-slate-900 transition-colors w-fit">Staff Login</a>
            <a href="https://akn.org.uk" className="hover:text-slate-900 transition-colors w-fit">akn.org.uk</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Agora. All rights reserved.
          </p>
          <p className="text-xs text-slate-300">
            an akn innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
