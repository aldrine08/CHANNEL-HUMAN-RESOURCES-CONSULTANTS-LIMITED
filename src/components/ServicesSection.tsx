import Link from "next/link";

import {
  UsersRound,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Calculator,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

import { services } from "@/data/services";



export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 bg-[#F5F7FA] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#C6A56B]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              Our Expertise
            </span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#10243A] sm:text-4xl xl:text-5xl"
          >
            Comprehensive People Solutions for
            <span className="text-[#A67C3B]">
              {" "}Modern Organizations.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            From finding the right talent to strengthening
            HR operations and supporting professional
            growth, Channel offers practical services
            tailored to different people and business needs.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A56B]/60 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10243A]/5 text-[#10243A] transition-colors group-hover:bg-[#10243A] group-hover:text-[#D9B77F]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-bold text-[#A67C3B]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-bold leading-snug text-[#10243A]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                
<Link
  href={`/services/${service.slug}`}
  className="mt-8 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-[#9B793E] transition-colors hover:text-[#10243A]"
>
  <span>Learn More</span>
  <ArrowUpRight size={17} />
</Link>
              </article>
            );
          })}
        </div>

        {/* SECTION ENDING */}
        <div className="mt-14 rounded-xl bg-[#10243A] px-8 py-10 text-white md:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Looking for tailored HR support?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Let's explore solutions aligned with your
                organization's people priorities.
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A] transition-colors hover:bg-[#E0C38E]"
            >
              Contact Channel
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}