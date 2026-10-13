
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#F5F7FA] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">

        <p className="text-7xl font-extrabold tracking-tight text-[#C6A56B] sm:text-8xl">
          404
        </p>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#9B793E]">
          Page Not Found
        </p>

        <h1 className="mt-5 text-3xl font-extrabold text-[#10243A] sm:text-4xl">
          This Page Could Not Be Found.
        </h1>

        <p className="mx-auto mt-6 max-w-lg leading-8 text-slate-600">
          The page you are looking for may have
          moved, been removed or may no longer
          be available.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md bg-[#10243A] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#25445F]"
          >
            <Home size={18} />
            Return Home
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-md border border-[#10243A] px-7 py-4 text-sm font-bold text-[#10243A] transition-colors hover:bg-slate-100"
          >
            <ArrowLeft size={18} />
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}