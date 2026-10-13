
import {
  Code2,
  Bot,
  Cloud,
  ShieldCheck,
  MapPin,
  Mail,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const technologyServices = [
  {
    title: "Software Development",
    icon: Code2,
    description:
      "Modern software solutions built around business needs.",
  },
  {
    title: "AI Automation",
    icon: Bot,
    description:
      "Intelligent workflows that streamline operations.",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description:
      "Scalable digital infrastructure and cloud technologies.",
  },
  {
    title: "System Integration",
    icon: ShieldCheck,
    description:
      "Connecting systems to improve efficiency and productivity.",
  },
];

export default function TechnologyPartner() {
  return (
    <section
      aria-labelledby="technology-partner-heading"
      className="relative isolate overflow-hidden bg-[#0B1729] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_15%,#25415A_0%,#0B1729_65%)]"
      />

      <div className="mx-auto max-w-7xl">

        {/* Section introduction */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C6A56B]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
              Official Technology Partner
            </span>
          </div>

          <h2
            id="technology-partner-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Powered by
            <span className="block text-[#D9B77F]">
              WRLD SOLUTIONS.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
            WRLD SOLUTIONS designs and develops
            modern digital solutions that enable
            organizations to automate operations,
            improve efficiency and accelerate
            digital transformation.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT — BRAND */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div>
              <div className="mb-9 flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#C6A56B] shadow-xl">
                  <span className="text-5xl font-black text-[#10243A]">
                    W
                  </span>
                </div>

                <div>
                  <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
                    WRLD SOLUTIONS
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D9B77F]">
                    Technology Partner
                  </p>
                </div>
              </div>

              <h3 className="max-w-md text-2xl font-extrabold leading-snug sm:text-3xl">
                Building Smart Organizations
                <span className="text-[#D9B77F]">
                  {" "}Through Technology.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                Empowering organizations through
                intelligent digital solutions,
                innovation and technology-driven
                transformation.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
                Contact WRLD SOLUTIONS
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-[#D9B77F]"
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    Upper Hill, KMA Building, Nairobi
                  </span>
                </div>

                <a
                  href="mailto:info@smartroyalcareer.co.ke"
                  className="flex items-start gap-3 break-all text-sm text-slate-300 transition-colors hover:text-[#D9B77F]"
                >
                  <Mail
                    size={19}
                    className="mt-0.5 shrink-0 text-[#D9B77F]"
                  />
                  info@smartroyalcareer.co.ke
                </a>

                <a
                  href="mailto:aldrinewrldsolutions@gmail.com"
                  className="flex items-start gap-3 break-all text-sm text-slate-300 transition-colors hover:text-[#D9B77F]"
                >
                  <Mail
                    size={19}
                    className="mt-0.5 shrink-0 text-[#D9B77F]"
                  />
                  aldrinewrldsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — TECHNOLOGY SERVICES */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <Cpu size={22} className="text-[#D9B77F]" />

              <h3 className="text-xl font-bold sm:text-2xl">
                Our Technology Expertise
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {technologyServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-xl border border-white/10 bg-[#172B43] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A56B]/50 hover:bg-[#1D3650]"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#C6A56B]/15 p-3 text-[#D9B77F]">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>

                    <h4 className="mt-7 text-lg font-bold">
                      {service.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 rounded-xl border border-[#C6A56B]/25 bg-[#C6A56B]/10 p-6">
              <p className="text-sm font-semibold leading-7 text-slate-200">
                Technology, automation and innovation
                designed to support smarter,
                more efficient organizations.
              </p>

              <a
                href="mailto:aldrinewrldsolutions@gmail.com?subject=WRLD%20SOLUTIONS%20Technology%20Enquiry"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D9B77F] transition-colors hover:text-white"
              >
                Contact Our Technology Team
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom partnership credit */}
        <div className="mt-14 border-t border-white/10 pt-7 text-center">
          <p className="text-xs font-medium tracking-widest text-slate-400">
            CHANNEL HUMAN RESOURCES CONSULTANTS LIMITED
            <span className="mx-3 text-[#D9B77F]">×</span>
            WRLD SOLUTIONS
          </p>

          <p className="mt-3 text-xs text-slate-500">
            People. Performance. Progress. — Powered by Technology.
          </p>
        </div>
      </div>
    </section>
  );
}