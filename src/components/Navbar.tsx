
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-6 lg:px-10">
        {/* COMPANY IDENTITY */}
        <Link
          href="/"
          className="flex min-w-0 flex-col"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-xl font-black tracking-[0.16em] text-[#10243A] sm:text-2xl">
            CHANNEL
          </span>
          <span className="text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-[10px]">
            Human Resources Consultants Limited
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/" && pathname === "/";

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition-colors hover:text-[#9B793E] ${
                  active
                    ? "text-[#9B793E]"
                    : "text-[#10243A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-md bg-[#10243A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#25445F] lg:inline-flex"
        >
          Get in Touch
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border border-slate-200 p-2 text-[#10243A] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-[#10243A] transition-colors hover:text-[#9B793E]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#10243A] px-5 py-3 text-sm font-semibold text-white"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}