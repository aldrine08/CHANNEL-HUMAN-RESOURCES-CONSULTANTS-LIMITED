
"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

const serviceOptions = [
  "Recruitment & Selection",
  "HR Consulting",
  "HR Outsourcing",
  "Career Coaching & Mentorship",
  "Payroll & Accounting Support",
  "HR Audits & Policies",
  "General Enquiry",
];

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(
    field: keyof FormValues,
    value: string
  ) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));

    setStatus("idle");
    setFeedback("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your enquiry."
        );
      }

      setStatus("success");
      setFeedback(
        "Your enquiry has been submitted successfully."
      );
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#10243A] outline-none transition-colors focus:border-[#A67C3B] focus:ring-2 focus:ring-[#C6A56B]/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Contact enquiry form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-[#10243A]">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-[#10243A]">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="text-sm font-semibold text-[#10243A]">
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
            placeholder="+254 ..."
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="text-sm font-semibold text-[#10243A]">
            Service of Interest *
          </label>
          <select
            id="contact-service"
            required
            value={values.service}
            onChange={(e) => updateField("service", e.target.value)}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-[#10243A]">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={6}
          required
          minLength={10}
          maxLength={3000}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass}
          placeholder="Tell us how Channel can assist you..."
        />
      </div>

      {/* Honeypot field: hidden from normal visitors */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <p className="text-xs leading-6 text-slate-500">
        Your details will be used to respond to this enquiry.
        Please do not include passwords or sensitive personal documents.
      </p>

      {status !== "idle" && (
        <div
          role={status === "error" ? "alert" : "status"}
          className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {status === "success" ? (
            <CheckCircle2 size={20} className="shrink-0" />
          ) : (
            <AlertCircle size={20} className="shrink-0" />
          )}
          <span>{feedback}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-3 rounded-lg bg-[#10243A] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#25445F] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Enquiry"}
        <Send size={18} />
      </button>
    </form>
  );
}