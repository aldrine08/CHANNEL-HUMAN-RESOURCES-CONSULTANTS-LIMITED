
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Create the six known service routes at build time.
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Set a unique browser title and description for each service.
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* BREADCRUMBS */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="text-slate-300 hover:text-white"
            >
              Home
            </Link>

            <ChevronRight size={15} className="text-slate-400" />

            <Link
              href="/services"
              className="text-slate-300 hover:text-white"
            >
              Services
            </Link>

            <ChevronRight size={15} className="text-slate-400" />

            <span
              aria-current="page"
              className="font-semibold text-[#D9B77F]"
            >
              {service.title}
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-[#C6A56B]/40 bg-white/10 text-[#D9B77F]">
              <Icon size={32} strokeWidth={1.6} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
              Channel HR Solutions / {service.number}
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3 lg:gap-20">

          <div className="lg:col-span-2">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              Service Overview
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#10243A] sm:text-4xl">
              Practical Solutions for Your People Priorities.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {service.details}
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#10243A]">
                Key Areas of Support
              </h3>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F5F7FA] p-5"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-[#A67C3B]"
                    />

                    <span className="text-sm font-semibold leading-6 text-[#10243A]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[#9B793E] hover:text-[#10243A]"
            >
              <ArrowLeft size={18} />
              Back to All Services
            </Link>
          </div>

          {/* CONTACT SIDEBAR */}
          <aside className="h-fit rounded-2xl bg-[#F5F7FA] p-8 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9B793E]">
              Work With Channel
            </p>

            <h3 className="mt-5 text-2xl font-bold text-[#10243A]">
              Need Professional HR Support?
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Discuss your requirements with Channel
              and explore practical solutions aligned
              with your organization's priorities.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#10243A] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#25445F]"
            >
              Contact Channel
              <ArrowUpRight size={18} />
            </Link>
          </aside>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
            Explore More
          </p>

          <h2 className="text-3xl font-extrabold text-[#10243A] sm:text-4xl">
            Other Channel Services
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((item) => {
              const RelatedIcon = item.icon;

              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#10243A]/5 text-[#10243A]">
                    <RelatedIcon size={24} />
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-[#10243A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#9B793E]">
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}