import Hero from "@/components/Hero";

import Link from "next/link";

import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";



const services = [
  {
    number: "01",
    title: "Recruitment & Selection",
    description:
      "Structured recruitment solutions that help organizations find, assess and select suitable talent.",
  },
  {
    number: "02",
    title: "Human Resource Consulting",
    description:
      "Practical HR guidance that supports stronger people management and organizational performance.",
  },
  {
    number: "03",
    title: "HR Outsourcing",
    description:
      "Flexible workforce administration and HR support that allows organizations to focus on their core business.",
  },
  {
    number: "04",
    title: "Career Development",
    description:
      "Professional coaching and mentorship to help individuals plan and advance their careers.",
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <main>
      {/* HOMEPAGE HERO */}
         <Hero />

      <AboutSection />

      <ServicesSection />

      {/* CAREERS PREVIEW */}
      <section id="careers" className="scroll-mt-12 bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9B793E]">
            Career Development
          </p>
          <h2 className="text-3xl font-bold text-[#10243A]">
            Supporting Your Next Career Move.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            From career direction and mentorship to professional
            development, Channel helps individuals prepare for
            opportunities ahead.
          </p>
        </div>

<Link
  href="/careers"
  className="mt-8 inline-flex items-center rounded-md bg-[#10243A] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#25445F]"
>
  Explore Careers →
</Link>
      </section>

      
{/* CONTACT PREVIEW */}
<section
  id="contact"
  className="scroll-mt-12 bg-[#F5F7FA] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">

      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9B793E]">
        Let's Connect
      </p>

      <h2 className="text-3xl font-bold leading-tight text-[#10243A] sm:text-4xl lg:text-5xl">
        Let's Build Stronger
        Organizations Together.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
        Whether you need recruitment support,
        human resource consulting, workforce
        outsourcing or professional career
        guidance, Channel is ready to discuss
        practical solutions tailored to your needs.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <span className="inline-flex items-center rounded-md bg-[#10243A] px-7 py-4 text-sm font-semibold text-white">
          Enquiry Form Coming Soon
        </span>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}