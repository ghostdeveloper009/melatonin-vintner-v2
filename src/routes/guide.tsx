import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

const chapters = [
  {
    n: "01",
    title: "Understanding Wine",
    body: "Wine is fermented grape juice shaped by three things: the grape, the place it grew, and the decisions made in the cellar. Everything else — tannin, acidity, body, sweetness — is vocabulary for describing that balance.",
  },
  {
    n: "02",
    title: "Red vs White",
    body: "Red wines are fermented with their skins, which contributes colour, tannin and structure. Whites are usually pressed off their skins, keeping them lighter and more acid-driven. Serving temperature exaggerates both effects.",
  },
  {
    n: "03",
    title: "Wine & Food Pairing",
    body: "Match weight before flavour: light dishes with light wines, rich dishes with structured ones. Acidity cuts fat, tannin loves protein, and sweetness needs a dish at least as sweet as the glass.",
  },
  {
    n: "04",
    title: "Understanding Regions",
    body: "A region tells you climate, soil and tradition in a single word. Cooler regions tend toward higher acidity and restraint; warmer regions toward ripeness and weight.",
  },
  {
    n: "05",
    title: "How to Serve",
    body: "Sparkling and light whites: well chilled. Full whites and rosé: lightly chilled. Reds: cool room temperature, not warm. Give young, structured reds air; give delicate older bottles none.",
  },
  {
    n: "06",
    title: "Storage",
    body: "Keep bottles on their side, in the dark, away from vibration, at a steady cool temperature. Consistency matters more than any exact number.",
  },
  {
    n: "07",
    title: "Choosing the Right Wine",
    body: "Start with the occasion, not the grape. Who is drinking, what is being eaten, and how long the evening will be will narrow the shelf faster than any score.",
  },
  {
    n: "08",
    title: "Understanding Vintage",
    body: "The vintage is the growing year. It matters most where weather varies sharply, and least in stable climates. A great producer in a difficult year usually beats the reverse.",
  },
];

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Wine Guide — Pairing, Serving & Vintage | Melatonin Vintner" },
      {
        name: "description",
        content:
          "A plain-spoken wine guide: red vs white, food pairing, regions, serving temperature, storage and how much vintage really matters.",
      },
      { property: "og:title", content: "Wine Guide — Melatonin Vintner" },
      {
        property: "og:description",
        content:
          "Learn how to choose, serve, pair and store wine — without the ceremony.",
      },
      { property: "og:url", content: "/guide" },
    ],
    links: [{ rel: "canonical", href: "/guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: chapters.map((c) => ({
            "@type": "Question",
            name: c.title,
            acceptedAnswer: { "@type": "Answer", text: c.body },
          })),
        }),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-20 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">Wine Guide</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              The language of the glass
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Eight short chapters. Enough to order well, serve properly and
              know what you like — and why.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-x-16 gap-y-16 lg:grid-cols-2">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={(i % 2) * 90} as="article">
              <span className="text-[0.65rem] tracking-[0.26em] text-accent">
                {c.n}
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight">{c.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 border-t border-border pt-14 text-center">
          <h2 className="font-display text-4xl">Ready to choose?</h2>
          <Link
            to="/collection"
            className="mt-8 inline-flex border border-accent/60 px-10 py-4 text-xs tracking-[0.24em] text-accent uppercase transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
          >
            Explore the collection
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
