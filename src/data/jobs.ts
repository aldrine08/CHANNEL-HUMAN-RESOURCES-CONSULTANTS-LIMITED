
export type Job = {
  id: string;
  slug: string;
  title: string;
  location: string;
  employmentType: string;
  department: string;
  closingDate: string;
  summary: string;
  status: "published" | "draft" | "closed";
};

export const jobs: Job[] = [];

export const publishedJobs = jobs.filter(
  (job) =>
    job.status === "published" &&
    job.closingDate >= new Date().toISOString().slice(0, 10)
);