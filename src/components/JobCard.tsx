
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";
import type { Job } from "@/data/jobs";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  const deadline = new Date(
    `${job.closingDate}T12:00:00Z`
  ).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#9B793E]">
            {job.department}
          </p>

          <h3 className="mt-3 text-xl font-bold text-[#10243A]">
            {job.title}
          </h3>
        </div>

        <span className="rounded-full bg-[#EAF3EE] px-3 py-1 text-xs font-semibold text-[#236847]">
          Open Position
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {job.summary}
      </p>

      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
        <span className="inline-flex items-center gap-2">
          <MapPin size={17} />
          {job.location}
        </span>

        <span className="inline-flex items-center gap-2">
          <BriefcaseBusiness size={17} />
          {job.employmentType}
        </span>

        <span className="inline-flex items-center gap-2">
          <CalendarDays size={17} />
          Closes {deadline}
        </span>
      </div>

      <div className="mt-7 border-t border-slate-100 pt-5">
        <p className="text-xs text-slate-500">
          Full vacancy details and application
          instructions will be provided when
          the recruitment workflow is configured.
        </p>
      </div>
    </article>
  );
}