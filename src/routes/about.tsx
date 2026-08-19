import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Melatonin Vintner" },
      {
        name: "description",
        content:
          "Melatonin Vintner — a premium drinks collection curated for quality, character and experience. Pour better. Live better.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-16 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Pour better.
              <span className="block italic text-accent">Live better.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Melatonin Vintner is a premium drinks collection based in Ishieke,
              serving curated wines and liquor selections for every occasion.
              From fine dining to celebrations, weddings to date nights, dinner
              parties to quiet evenings — we select for character, balance, and
              the moments that matter.
            </p>
            <p>
              Our collection spans wines, whisky, vodka, gin, cognac and brandy,
              rum, bitters and specialty spirits. Each product is chosen for
              quality, reputation and the experience it delivers in the glass.
            </p>
            <p>
              We don't just sell drinks. We curate experiences. Quality
              selections. Classic taste. Exceptional moments.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              ["Quality", "Every product selected for character and reputation."],
              ["Curation", "Chosen with intention, not for volume."],
              ["Occasion", "From quiet evenings to grand celebrations."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-background p-8">
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <h2 className="font-display text-3xl">Get in touch</h2>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>📞 08070430838</p>
              <p>📍 Ishieke</p>
              <p>TikTok: @mellatonin_vintner</p>
              <p>Instagram: @mellatonin_vintner</p>
            </div>
            <Link
              to="/contact"
              className="link-underline mt-8 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
            >
              Contact us →
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
