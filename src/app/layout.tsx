
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Channel Human Resources Consultants Limited",
    template: "%s | Channel HR",
  },

  description:
    "Channel Human Resources Consultants Limited provides HR consulting, recruitment, outsourcing, payroll support and career development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <div className="flex-1">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}