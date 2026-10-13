
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Channel Human Resources Consultants Limited for recruitment, HR consulting, outsourcing and career development enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="bg-[#10243A] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D9B77F]">
            Contact Channel
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's Start a
            <span className="block text-[#D9B77F]">
              Meaningful Conversation.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
            Whether you're an employer looking for HR
            expertise or an individual seeking career
            guidance, we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">

          {/* LEFT — INFORMATION */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9B793E]">
              Get in Touch
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#10243A]">
              How Can We Help?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Share your enquiry with our team using
              the contact form. Select the service
              you're interested in so we can better
              understand your needs.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 text-[#A67C3B]">
                  <MapPin size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#10243A]">
                    Office Location
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    KMA Center, Block B,
                    First Floor, Room 1.1
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 text-[#A67C3B]">
                  <Clock3 size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#10243A]">
                    Enquiries
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Submit your enquiry using the form.
                    Our team can review it through
                    the designated company inbox.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 text-[#A67C3B]">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <h3 className="font-bold text-[#10243A]">
                    Professional Communication
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We use your submitted details
                    to understand and respond
                    to your enquiry.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#9B793E] hover:text-[#10243A]"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-[#10243A]">
              Send Us an Enquiry
            </h2>

            <p className="mb-9 mt-3 text-sm leading-7 text-slate-600">
              Complete the form below. Fields marked
              with an asterisk (*) are required.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}