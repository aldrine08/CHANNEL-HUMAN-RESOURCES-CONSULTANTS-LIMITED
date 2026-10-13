
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Eye,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Channel Human Resources Consultants Limited, our philosophy, vision, mission and approach to professional HR services.",
};

const commitments = [
  "Value-focused professional service",
  "Quality and disciplined delivery",
  "Customer-focused solutions",
  "Practical sector understanding",
];

export default function AboutPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
            Who We Are
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            People at the Centre.
            <span className="block text-[#D9B77F]">
              Progress in Motion.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            A professional human resource consulting
            and career development company helping
            organizations and individuals make stronger
            people decisions.
          </p>

          <Link
            href="/"
            className="mt-9 inline-block text-sm font-semibold text-[#D9B77F] hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              About Channel
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#10243A] sm:text-4xl">
              A Practical Partner for People,
              Talent and Organizational Performance.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Channel Human Resources Consultants
              Limited provides professional human
              resource consulting, recruitment,
              workforce management and career
              development services.
            </p>

            <p>
              We support private sector organizations,
              public institutions, non-profit
              organizations and other stakeholders
              requiring dependable HR expertise.
            </p>

            <p>
              Our approach combines responsive service,
              sector understanding, disciplined
              processes and solutions tailored
              to client needs.
            </p>
          </div>
        </div>
      </section>

      {/* VISION MISSION GOAL */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
            Our Direction
          </p>

          <h2 className="max-w-3xl text-3xl font-extrabold text-[#10243A] sm:text-4xl">
            Guided by Purpose. Focused on Progress.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Vision",
                icon: Eye,
                text: "To be a trusted human resource partner that creates practical solutions, stronger workplaces and sustainable stakeholder value.",
              },
              {
                title: "Our Mission",
                icon: Target,
                text: "To provide professional HR consulting and evolving recruitment solutions that help clients become more productive, compliant and effective.",
              },
              {
                title: "Our Goal",
                icon: Compass,
                text: "To help individuals make informed career decisions while helping organizations build capable, well-managed and engaged workforces.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10243A] text-[#D9B77F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#10243A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE COMMITMENTS */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              Our Promise
            </p>

            <h2 className="text-3xl font-extrabold text-[#10243A] sm:text-4xl">
              Professional Support Built Around
              Real Client Needs.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We focus on practical, responsive HR
              solutions aligned with measurable
              organizational priorities.
            </p>
          </div>

          <div className="space-y-5">
            {commitments.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-lg border border-slate-200 p-5"
              >
                <CheckCircle2
                  size={23}
                  className="shrink-0 text-[#A67C3B]"
                />
                <span className="font-semibold text-[#10243A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Explore What Channel Can Do for You.
            </h2>
            <p className="mt-4 text-slate-300">
              Discover our professional human resource solutions.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A]"
          >
            View Our Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}