import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Melatonin Vintner" },
      {
        name: "description",
        content:
          "Speak to Melatonin Vintner about private selections, gifting, shipping, returns or trade enquiries.",
      },
      { property: "og:title", content: "Contact — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "Private selections, gifting, shipping and trade enquiries — we reply personally.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-[1400px] gap-16 px-5 pt-40 pb-24 sm:px-8 sm:pt-48 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl">
            Write to the house
          </h1>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
            Private selections, gifting, allocations, shipping and returns, or
            trade enquiries. A person reads every message.
          </p>

          <dl className="mt-12 space-y-8">
            {[
              ["Email", "hello@placeholder-domain.com"],
              ["Telephone", "+0 000 000 0000 (placeholder)"],
              ["Cellar Door", "Placeholder Address, Placeholder City"],
              ["Hours", "Monday–Saturday, placeholder hours"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                  {k}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs leading-relaxed text-muted-foreground/70">
            Contact details above are placeholders and should be replaced with
            your real business information before launch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="border border-border p-8 sm:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Message received — we'll reply shortly.");
            }}
          >
            <div className="space-y-8">
              {[
                { id: "name", label: "Name", type: "text", autoComplete: "name" },
                { id: "email", label: "Email", type: "email", autoComplete: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 w-full bg-accent px-10 py-4 text-xs tracking-[0.26em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-accent/85"
            >
              Send message
            </button>
            <p aria-live="polite" className="mt-4 min-h-5 text-xs text-muted-foreground">
              {sent ? "Thank you. We'll be in touch." : ""}
            </p>
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
