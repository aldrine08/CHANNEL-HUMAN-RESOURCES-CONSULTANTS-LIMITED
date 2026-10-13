
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
      {/* NAVIGATION */}
      <header className="relative z-20 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#home" className="flex flex-col">
            <span className="text-2xl font-black tracking-[0.15em] text-[#10243A]">
              CHANNEL
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[10px]">
              Human Resources Consultants Limited
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-[#10243A] transition-colors hover:text-[#9B793E]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTION */}
          <a
            href="#contact"
            className="hidden rounded-md bg-[#10243A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#223E59] lg:inline-flex"
          >
            Get in Touch
          </a>

          {/* MOBILE NAVIGATION */}
          <details className="group lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-[#10243A]">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-6 shadow-lg"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-[#10243A]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#10243A] text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_50%,#31516a_0%,#10243a_60%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-28 top-1/2 -z-10 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-white/10 md:h-[720px] md:w-[720px]"
        />

        <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C6A56B]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E3C58E]">
                People. Performance. Progress.
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.13] tracking-tight sm:text-5xl lg:text-7xl">
              People at the
              <br />
              <span className="text-[#D9B77F]">Centre.</span>
              <br />
              Progress in Motion.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Practical human resource solutions that strengthen
              people, performance and organizational growth.
              We support organizations and professionals
              with dependable HR expertise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-md bg-[#C6A56B] px-7 py-4 text-sm font-bold text-[#10243A] transition-colors hover:bg-[#E0C38E]"
              >
                Explore Our Services →
              </a>

              <a
                href="#about"
                className="rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Discover Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="scroll-mt-12 bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9B793E]">
              About Channel
            </p>
            <h2 className="text-3xl font-bold leading-tight text-[#10243A] sm:text-4xl">
              Your Partner in People and Organizational Excellence.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Channel Human Resources Consultants Limited is a
              professional human resource consulting and career
              development company focused on helping individuals
              and organizations make stronger people decisions.
            </p>
            <p>
              Our approach combines responsive service, sector
              understanding, disciplined processes and solutions
              tailored to client needs.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-12 bg-[#F5F7FA] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#9B793E]">
            What We Do
          </p>

          <h2 className="max-w-2xl text-3xl font-bold text-[#10243A] sm:text-4xl">
            Practical HR Solutions for a Changing World.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            We deliver professional, value-focused solutions for
            people, talent and workforce management.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-lg border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-[#9B793E]">
                  {service.number}
                </span>

                <h3 className="mt-7 text-xl font-bold text-[#10243A]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
      </section>

      {/* CONTACT PREVIEW */}
      <section id="contact" className="scroll-mt-12 bg-[#10243A] px-6 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D9B77F]">
            Contact Channel
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Discuss Your People Priorities.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-200">
            Discover practical HR solutions aligned with your
            organization's goals. Visit our office at
            KMA Building, Upper Hill, Nairobi, First Floor.
          </p>
          <p className="mt-8 text-sm text-slate-300">
            People. Performance. Progress.
          </p>
        </div>
      </section>
    </main>
  );
}