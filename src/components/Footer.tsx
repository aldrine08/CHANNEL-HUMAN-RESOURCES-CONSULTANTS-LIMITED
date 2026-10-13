
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";


const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact Us", href: "/#contact" },
];

const services = [
  "HR Consulting",
  "Recruitment & Selection",
  "HR Outsourcing",
  "Career Coaching & Mentorship",
  "Payroll Administration",
  "HR Audits & Policies",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10243A] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-10">

        {/* COMPANY IDENTITY */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <span className="block text-3xl font-black tracking-[0.15em]">
              CHANNEL
            </span>

            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
              Human Resources Consultants Limited
            </span>
          </Link>

          <div className="mt-7 h-1 w-12 bg-[#C6A56B]" />

          <h3 className="mt-6 text-lg font-semibold text-[#D9B77F]">
            People. Performance. Progress.
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Channel Human Resources Consultants Limited
            provides professional HR consulting,
            recruitment, outsourcing, payroll support
            and career development services.

            We help organizations and individuals
            make stronger people decisions.
          </p>

          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D9B77F] hover:text-white"
          >
            Connect With Channel
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-7 text-base font-bold">
            Quick Links
          </h3>

          <nav aria-label="Footer navigation" className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-sm text-slate-300 transition-colors hover:text-[#D9B77F]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-7 text-base font-bold">
            Our Services
          </h3>

          <ul className="space-y-4">
            {services.map((service) => (
              <li
                key={service}
                className="text-sm leading-6 text-slate-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* LOCATION BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="mt-1 shrink-0 text-[#D9B77F]"
            />

            <div>
              <p className="text-sm font-semibold">
                Visit Our Office
              </p>

              <p className="mt-1 text-sm text-slate-300">
                KMA Building, Upper Hill, Nairobi,
                First Floor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <BriefcaseBusiness
              size={19}
              className="text-[#D9B77F]"
            />
            Professional Human Resource Solutions
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 bg-[#0B192A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {currentYear} Channel Human Resources
            Consultants Limited. All rights reserved.
          </p>

          <p>People. Performance. Progress.</p>
        </div>
      </div>
    </footer>
  );
}