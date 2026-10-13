
// import { NextResponse } from "next/server";

// export const runtime = "nodejs";

// const allowedServices = new Set([
//   "Recruitment & Selection",
//   "HR Consulting",
//   "HR Outsourcing",
//   "Career Coaching & Mentorship",
//   "Payroll & Accounting Support",
//   "HR Audits & Policies",
//   "General Enquiry",
// ]);

// function isValidEmail(email: string) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function escapeHtml(value: string) {
//   return value.replace(/[&<>"']/g, (character) => {
//     const entities: Record<string, string> = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&#39;",
//     };

//     return entities[character] ?? character;
//   });
// }

// export async function POST(request: Request) {
//   try {
//     const contentType = request.headers.get("content-type") ?? "";

//     if (!contentType.includes("application/json")) {
//       return NextResponse.json(
//         { error: "Invalid request format." },
//         { status: 415 }
//       );
//     }

//     const rawBody = await request.text();

//     if (rawBody.length > 12000) {
//       return NextResponse.json(
//         { error: "Submission is too large." },
//         { status: 413 }
//       );
//     }

//     let body: unknown;

//     try {
//       body = JSON.parse(rawBody);
//     } catch {
//       return NextResponse.json(
//         { error: "Invalid form data." },
//         { status: 400 }
//       );
//     }

//     if (!body || typeof body !== "object" || Array.isArray(body)) {
//       return NextResponse.json(
//         { error: "Invalid form data." },
//         { status: 400 }
//       );
//     }

//     const data = body as Record<string, unknown>;

//     const fields = [
//       "name",
//       "email",
//       "phone",
//       "service",
//       "message",
//       "website",
//     ] as const;

//     if (fields.some((field) =>
//       typeof data[field] !== "string"
//     )) {
//       return NextResponse.json(
//         { error: "Please provide valid form fields." },
//         { status: 400 }
//       );
//     }

//     const name = (data.name as string).trim();
//     const email = (data.email as string).trim();
//     const phone = (data.phone as string).trim();
//     const service = (data.service as string).trim();
//     const message = (data.message as string).trim();
//     const website = (data.website as string).trim();

//     // Simple bot trap. A legitimate visitor leaves this blank.
//     if (website) {
//       return NextResponse.json({ success: true });
//     }

//     if (
//       name.length < 2 ||
//       name.length > 120 ||
//       email.length > 254 ||
//       !isValidEmail(email) ||
//       phone.length > 40 ||
//       !allowedServices.has(service) ||
//       message.length < 10 ||
//       message.length > 3000
//     ) {
//       return NextResponse.json(
//         {
//           error:
//             "Please check your details and complete all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     const apiKey = process.env.RESEND_API_KEY;
//     const fromEmail = process.env.CONTACT_FROM_EMAIL;
//     const toEmail = process.env.CONTACT_TO_EMAIL;

//     if (!apiKey || !fromEmail || !toEmail) {
//       console.error("Contact email configuration is incomplete.");

//       return NextResponse.json(
//         {
//           error:
//             "Our enquiry service is temporarily unavailable. Please try again later.",
//         },
//         { status: 503 }
//       );
//     }

//     const safeName = escapeHtml(name);
//     const safeEmail = escapeHtml(email);
//     const safePhone = escapeHtml(phone);
//     const safeService = escapeHtml(service);
//     const safeMessage = escapeHtml(message).replace(
//       /\r?\n/g,
//       "<br />"
//     );

//     const response = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: fromEmail,
//         to: [toEmail],
//         reply_to: email,
//         subject: `Channel Website Enquiry - ${service}`,
//         html: `
//           <div style="font-family:Arial,sans-serif;line-height:1.7;color:#10243A">
//             <h2>New Channel Website Enquiry</h2>
//             <p><strong>Name:</strong> ${safeName}</p>
//             <p><strong>Email:</strong> ${safeEmail}</p>
//             <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
//             <p><strong>Service:</strong> ${safeService}</p>
//             <hr />
//             <p><strong>Message:</strong></p>
//             <p>${safeMessage}</p>
//           </div>
//         `,
//       }),
//       signal: AbortSignal.timeout(10000),
//     });

//     if (!response.ok) {
//       console.error(
//         "Email provider rejected enquiry:",
//         response.status
//       );

//       return NextResponse.json(
//         {
//           error:
//             "Your enquiry could not be sent. Please try again later.",
//         },
//         { status: 502 }
//       );
//     }

//     return NextResponse.json(
//       { success: true },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(
//       "Contact API error:",
//       error instanceof Error ? error.message : "Unknown error"
//     );

//     return NextResponse.json(
//       {
//         error:
//           "Something went wrong while processing your enquiry.",
//       },
//       { status: 500 }
//     );
//   }
// }