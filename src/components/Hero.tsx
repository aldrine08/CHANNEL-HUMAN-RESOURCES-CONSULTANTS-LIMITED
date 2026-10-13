
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  UsersRound,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const capabilities = [
  {
    label: "People",
    icon: UsersRound,
  },
  {
    label: "Performance",
    icon: BriefcaseBusiness,
  },
  {
    label: "Progress",
    icon: TrendingUp,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#10243A] text-white"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_35%,#31516a_0%,#10243a_65%)]"
      />

      {/* HERO GRID */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:min-h-[720px] lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-[2px] w-10 shrink-0 bg-[#C6A56B]" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E3C58E]">
              People. Performance. Progress.
            </span>
          </div>

          <h1
            id="hero-heading"
            className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl"
          >
            People at the
            <span className="block text-[#D9B77F]">
              Centre.
            </span>
            Progress in Motion.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            Practical human resource solutions that
            strengthen people, performance and
            organizational growth. We help individuals
            and organizations make stronger people
            decisions.
          </p>

          {/* CALLS TO ACTION */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E0C38E]"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="/#about"
              className="inline-flex items-center gap-3 rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Discover Channel
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* SERVICE HIGHLIGHTS */}
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-7">
            {[
              "HR Consulting",
              "Recruitment",
              "Outsourcing",
              "Career Development",
            ].map((service) => (
              <span
                key={service}
                className="text-xs font-medium text-slate-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — CORPORATE PHOTOGRAPHY */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

          {/* DECORATIVE IMAGE FRAME */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-[#C6A56B]/40 sm:-right-5 sm:-top-5"
          />

          {/* IMAGE */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#31516A] shadow-2xl sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src="/images/channel-hero.webp"
              alt="Business professionals collaborating in a modern corporate office"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover object-center"
            />

            {/* SUBTLE PHOTO OVERLAY */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#10243A]/65 via-transparent to-transparent"
            />
          </div>

          {/* FLOATING BRAND PANEL */}
          <div className="relative z-10 mx-3 -mt-12 rounded-xl border border-white/15 bg-[#15334C] p-5 shadow-2xl sm:mx-6 sm:p-6">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#D9B77F]">
              The Channel Approach
            </p>

            <div className="grid grid-cols-3 gap-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C6A56B]/15 text-[#D9B77F]">
                      <Icon size={21} />
                    </div>

                    <span className="text-[10px] font-semibold text-white sm:text-xs">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}