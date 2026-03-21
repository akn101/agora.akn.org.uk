import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <Image
          src="/logo.svg"
          alt="Agora Logo"
          width={48}
          height={48}
          className="mx-auto mb-4 opacity-70"
        />
        <p className="text-slate-900 font-semibold mb-1">Agora</p>
        <p className="text-slate-500 text-sm mb-4">
          Registered Charity No. 1217001 &middot; England & Wales
        </p>
        <div className="flex justify-center gap-6 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/team" className="hover:text-slate-900 transition-colors">Team</Link>
          <a href="/#contact" className="hover:text-slate-900 transition-colors">Get Involved</a>
          <a href="https://admin.agora.akn.org.uk" className="hover:text-slate-900 transition-colors">Staff Login</a>
        </div>
        <p className="text-slate-400 text-xs mb-1">
          &copy; {new Date().getFullYear()} Agora. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs">
          an <a href="https://akn.org.uk" className="hover:text-slate-600 transition-colors">akn</a> innovation
        </p>
      </div>
    </footer>
  );
}
