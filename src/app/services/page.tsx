
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Channel's recruitment, HR consulting, outsourcing, career development, payroll and HR policy services.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
            Our Expertise
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Professional HR Solutions.
            <span className="block text-[#D9B77F]">
              Practical Business Impact.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            Channel provides human resource solutions
            designed to support organizations,
            strengthen workforce practices and
            help individuals grow professionally.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              What We Offer
            </p>

            <h2 className="text-3xl font-extrabold text-[#10243A] sm:text-4xl">
              Solutions for People and Organizations.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Explore our core service areas and
              discover how professional HR support
              can contribute to stronger workplaces.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10243A] text-[#D9B77F]">
                      <Icon size={27} />
                    </div>

                    <span className="text-sm font-bold text-[#A67C3B]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#10243A]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {service.details}
                  </p>

                  <ul className="mt-7 space-y-4">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-[#A67C3B]"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className="mt-9 inline-flex w-fit items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-[#9B793E] hover:text-[#10243A]"
                  >
                    Enquire About This Service
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#10243A] px-8 py-14 text-center text-white md:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
            Partner With Channel
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Let's Discuss Your HR Priorities.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Connect with Channel to explore
            professional solutions tailored
            to your organization's needs.
          </p>

          <Link
            href="/#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A]"
          >
            Contact Channel
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}