import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import vineyard from "@/assets/vineyard.jpg";
import lifestyle from "@/assets/lifestyle-gather.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Melatonin Vintner" },
      {
        name: "description",
        content:
          "Melatonin Vintner is a curated wine house built on craftsmanship, discovery and the pleasure of a well-chosen bottle.",
      },
      { property: "og:title", content: "About — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "Craftsmanship, discovery and taste — the thinking behind the Melatonin Vintner collection.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  ["Craftsmanship", "We favour growers who work small, slow and deliberately."],
  ["Discovery", "The cellar changes. Familiar bottles sit beside unfamiliar ones."],
  ["Taste", "Notes written plainly, so you can decide for yourself."],
  ["Celebration", "Wine belongs to occasions — and to ordinary Tuesdays."],
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative">
        <img
          src={vineyard}
          alt="Vineyard rows at dusk beneath a golden sky"
          width={1600}
          height={1008}
          className="h-[70svh] w-full object-cover"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-24">
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              More Than Wine.
              <span className="block italic text-accent">An Experience.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
            [Placeholder copy — replace with your own history and voice.]
            Melatonin Vintner began with a simple preference: fewer bottles,
            better chosen.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              We are a curated house rather than a warehouse. Each wine on this
              site is selected for character — a sense of where it comes from,
              and of the hands that made it. We publish what we know: region,
              vintage, producer, and how the wine actually drinks.
            </p>
            <p>
              We do not claim a heritage we have not earned. Company details,
              certifications, partnerships and awards will appear here once
              provided; until then this section is intentionally plain.
            </p>
            <p>
              What we can promise is the standard of selection, the care of
              storage and shipping, and an honest description in the glass.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border">
        <ul className="mx-auto grid max-w-[1400px] gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([title, copy], i) => (
            <Reveal as="li" key={title} delay={i * 80} className="bg-background p-10">
              <h2 className="font-display text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {copy}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <img
            src={lifestyle}
            alt="A candlelit dinner table with glasses of red wine raised in a toast"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Culture, kept in a bottle
          </h2>
          <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
            Wine is one of the few things we still make the slow way. It records
            a place and a year, and it asks to be shared. That is the whole idea
            behind Melatonin Vintner — and the reason we spend so long choosing.
          </p>
          <Link
            to="/collection"
            className="link-underline mt-9 inline-block text-[0.7rem] tracking-[0.24em] text-accent uppercase"
          >
            Explore the collection →
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
