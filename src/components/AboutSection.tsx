
import Link from "next/link";
import {
  ArrowUpRight,
  UsersRound,
  Target,
  TrendingUp,
} from "lucide-react";

const principles = [
  {
    icon: UsersRound,
    title: "People",
    description: "Putting people at the centre of our work.",
  },
  {
    icon: Target,
    title: "Performance",
    description: "Supporting effective people management.",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Helping organizations and careers move forward.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT — BRAND VISUAL */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-[#10243A] px-8 py-12 text-white shadow-xl sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[35px] border-white/5"
            />

            <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
              The Channel Philosophy
            </p>

            <h3 className="relative mt-10 max-w-sm text-4xl font-extrabold leading-tight sm:text-5xl">
              People.
              <br />
              <span className="text-[#D9B77F]">
                Performance.
              </span>
              <br />
              Progress.
            </h3>

            <div className="relative mt-12 space-y-4">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C6A56B]/20 text-[#D9B77F]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-2xl bg-[#C6A56B]/20"
          />
        </div>

        {/* RIGHT — COMPANY INTRODUCTION */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#C6A56B]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              About Channel
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#10243A] sm:text-4xl xl:text-5xl"
          >
            Building Stronger Organizations Through
            <span className="text-[#A67C3B]">
              {" "}Better People Solutions.
            </span>
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-600">
            Channel Human Resources Consultants Limited
            provides professional human resource
            consulting, recruitment, outsourcing and
            career development solutions.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            We work with organizations and individuals
            to address people-related challenges,
            strengthen workforce practices and support
            professional growth.
          </p>

          <div className="mt-9 border-l-4 border-[#C6A56B] bg-[#F5F7FA] px-6 py-5">
            <p className="text-sm font-semibold leading-7 text-[#10243A]">
              Our approach is grounded in practical
              solutions, professional service and
              a commitment to meaningful progress.
            </p>
          </div>

          <Link
            href="/#services"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#10243A] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#25445F]"
          >
            Explore Our Expertise
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}