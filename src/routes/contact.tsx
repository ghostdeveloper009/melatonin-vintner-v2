import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Melatonin Vintner" },
      {
        name: "description",
        content: `Get in touch with ${siteConfig.brand}. Call ${siteConfig.phone}. Based in ${siteConfig.location}.`,
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-16 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Contact
              <span className="block italic text-accent">{siteConfig.brand}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="font-display text-3xl">Reach us directly</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Phone
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block font-display text-2xl text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                WhatsApp
              </p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-foreground transition-colors hover:text-accent"
              >
                Message us on WhatsApp →
              </a>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Location
              </p>
              <p className="mt-2 text-sm text-foreground">{siteConfig.location}</p>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                TikTok
              </p>
              <a
                href={siteConfig.tiktokHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.tiktok}
              </a>
            </div>
            <div>
              <p className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Instagram
              </p>
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.instagram}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display text-3xl">Send a message</h2>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setName("");
              setEmail("");
              setMessage("");
              toast.success("Thank you — we'll be in touch shortly.");
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-accent px-10 py-4 text-xs tracking-[0.26em] text-accent-foreground uppercase transition-colors duration-500 hover:bg-accent/85"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
