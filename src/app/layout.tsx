
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

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
      
<body>
  <Navbar />
  {children}
</body>
    </html>
  );
}