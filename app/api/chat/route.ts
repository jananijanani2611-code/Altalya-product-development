import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const text = String(message || "").toLowerCase();

  let reply =
    "Ibistra builds AI-powered digital products, automation tools, analytics platforms, and scalable business solutions.";

  if (text.includes("price") || text.includes("pricing")) {
    reply =
      "Ibistra offers flexible custom pricing based on your product needs, features, timeline, and support requirements.";
  } else if (text.includes("product")) {
    reply =
      "Our products include Ibistra Analytics, Ibistra Automate, Ibistra Secure, and Ibistra Engage.";
  } else if (text.includes("service")) {
    reply =
      "We provide product development, custom software, web applications, AI integration, cloud solutions, UI/UX design, QA testing, and support.";
  } else if (text.includes("contact")) {
    reply =
      "You can contact Ibistra through the contact section for consultation, project discussion, or support.";
  } else if (text.includes("technology") || text.includes("tech")) {
    reply =
      "Ibistra uses modern technologies like Next.js, React, cloud infrastructure, AI/ML integration, analytics, automation, and secure backend systems.";
  }

  return NextResponse.json({ reply });
}