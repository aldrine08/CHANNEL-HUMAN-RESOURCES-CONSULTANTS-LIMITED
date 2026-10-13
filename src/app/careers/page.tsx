
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  SearchCheck,
  UsersRound,
} from "lucide-react";
import JobCard from "@/components/JobCard";
import { publishedJobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities",
  description:
    "Explore career opportunities, recruitment services and professional development support from Channel Human Resources Consultants Limited.",
};

const careerServices = [
  {
    title: "Career Coaching",
    description:
      "Receive guidance on career planning and professional development.",
    icon: GraduationCap,
  },
  {
    title: "Recruitment Support",
    description:
      "Learn about Channel's recruitment and selection services.",
    icon: SearchCheck,
  },
  {
    title: "Professional Growth",
    description:
      "Explore mentorship and career development support.",
    icon: UsersRound,
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
            Careers at Channel
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Your Next Opportunity
            <span className="block text-[#D9B77F]">
              Starts With Possibility.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            Explore career opportunities and
            professional development services
            designed to support your next step.
          </p>

          <a
            href="#opportunities"
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A] transition-colors hover:bg-[#E0C38E]"
          >
            Explore Opportunities
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* JOB OPPORTUNITIES */}
      <section
        id="opportunities"
        className="scroll-mt-20 bg-[#F5F7FA] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
            Job Opportunities
          </p>

          <h2 className="text-3xl font-extrabold text-[#10243A] sm:text-4xl">
            Explore Available Positions.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-600">
            Discover currently published opportunities
            and take the next step in your professional journey.
          </p>

          {publishedJobs.length > 0 ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {publishedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#10243A]/5 text-[#10243A]">
                <BriefcaseBusiness size={30} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#10243A]">
                No Vacancies Currently Published
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600">
                There are no active job opportunities
                listed on our website at the moment.
                Please check back for future updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CAREER DEVELOPMENT */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
            Beyond Recruitment
          </p>

          <h2 className="max-w-3xl text-3xl font-extrabold text-[#10243A] sm:text-4xl">
            Supporting Careers at Every Stage.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-600">
            Channel supports professional growth
            through recruitment expertise, career
            guidance and mentorship.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {careerServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#10243A] text-[#D9B77F]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#10243A]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EMPLOYER CTA */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
              For Employers
            </p>

            <h2 className="text-3xl font-bold">
              Looking for the Right Talent?
            </h2>

            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              Explore Channel's recruitment and
              selection solutions for your organization.
            </p>
          </div>

          <Link
            href="/services/recruitment-selection"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A] hover:bg-[#E0C38E]"
          >
            Recruitment Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}