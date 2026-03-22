"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/logo.svg" alt="Agora Logo" width={28} height={28} className="group-hover:opacity-70 transition-opacity" />
          <span className="font-bold text-slate-900 text-base tracking-tight">Agora</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-500">
          {isHome ? (
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          ) : (
            <Link href="/#about" className="hover:text-slate-900 transition-colors">About</Link>
          )}
          <Link
            href="/team"
            className={`hover:text-slate-900 transition-colors ${pathname === "/team" ? "text-slate-900 font-medium" : ""}`}
          >
            Team
          </Link>
          {isHome ? (
            <a href="#contact" className="hover:text-slate-900 transition-colors">Get Involved</a>
          ) : (
            <Link href="/#contact" className="hover:text-slate-900 transition-colors">Get Involved</Link>
          )}
        </div>

        {/* Staff login — text link, not button */}
        <a
          href="https://admin.agora.akn.org.uk"
          className="text-sm text-slate-400 hover:text-slate-900 transition-colors font-medium"
        >
          Staff Login →
        </a>
      </div>
    </nav>
  );
}
