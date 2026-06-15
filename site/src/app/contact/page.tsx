"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/layout/section";

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorText("");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      form.reset();
      router.push("/thank-you");
      return;
    }

    const data = (await response.json().catch(() => ({}))) as { error?: string };
    setStatus("error");
    setErrorText(data.error ?? "Unable to submit your message right now.");
  }

  return (
    <Section className="py-12 sm:py-16" title="Contact" kicker="Start a project">
      <form onSubmit={onSubmit} className="card max-w-2xl space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">Name</label>
          <input id="name" name="name" required className="w-full rounded-xl border border-[color:var(--color-line)] bg-transparent px-3 py-2" />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-xl border border-[color:var(--color-line)] bg-transparent px-3 py-2" />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm">Company</label>
          <input id="company" name="company" className="w-full rounded-xl border border-[color:var(--color-line)] bg-transparent px-3 py-2" />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm">Project brief</label>
          <textarea id="message" name="message" required rows={6} className="w-full rounded-xl border border-[color:var(--color-line)] bg-transparent px-3 py-2" />
        </div>

        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button type="submit" disabled={status === "loading"} className="button-primary disabled:opacity-70">
          {status === "loading" ? "Sending..." : "Send inquiry"}
        </button>

        {status === "error" ? <p className="text-sm text-red-700">{errorText}</p> : null}
      </form>
    </Section>
  );
}
