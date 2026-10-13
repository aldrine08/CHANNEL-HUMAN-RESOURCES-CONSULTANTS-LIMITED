
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});


const siteUrl = process.env.SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    siteUrl || "http://localhost:3000"
  ),

  title: {
    default:
      "Channel Human Resources Consultants Limited",
    template:
      "%s | Channel Human Resources Consultants Limited",
  },

  description:
    "Channel Human Resources Consultants Limited provides professional recruitment, HR consulting, outsourcing, career development and workforce support solutions.",

  applicationName:
    "Channel Human Resources Consultants Limited",

  keywords: [
    "Channel Human Resources Consultants",
    "HR Consulting Kenya",
    "Recruitment Services Kenya",
    "HR Outsourcing",
    "Career Coaching",
    "Human Resource Management",
    "Payroll Support",
    "HR Services Nairobi",
  ],

  openGraph: {
    type: "website",
    siteName:
      "Channel Human Resources Consultants Limited",
    title:
      "Channel Human Resources Consultants Limited",
    description:
      "Professional HR solutions that strengthen people, performance and organizational growth.",
    locale: "en_KE",
  },

  robots: siteUrl
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} min-h-screen`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}