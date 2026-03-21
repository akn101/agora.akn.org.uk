"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="Agora Logo" width={32} height={32} />
          <span className="font-bold text-slate-900 text-lg">Agora</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {isHome ? (
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          ) : (
            <Link href="/#about" className="hover:text-slate-900 transition-colors">About</Link>
          )}
          <Link
            href="/team"
            className={`hover:text-slate-900 transition-colors ${pathname === "/team" ? "text-slate-900 font-semibold" : ""}`}
          >
            Team
          </Link>
          {isHome ? (
            <a href="#contact" className="hover:text-slate-900 transition-colors">Get Involved</a>
          ) : (
            <Link href="/#contact" className="hover:text-slate-900 transition-colors">Get Involved</Link>
          )}
          <span className="text-slate-400 text-xs">Registered Charity No. 1217001</span>
        </div>

        {/* Staff Login */}
        <a
          href="https://admin.agora.akn.org.uk"
          className="px-4 py-2 bg-slate-900 text-white text-sm rounded-full font-semibold hover:bg-slate-700 transition-colors"
        >
          Staff Login
        </a>
      </div>
    </nav>
  );
}
