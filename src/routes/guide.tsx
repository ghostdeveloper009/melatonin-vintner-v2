import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Drink Guide — Melatonin Vintner" },
      {
        name: "description",
        content:
          "Learn the language of the pour — wine types, food pairing, serving temperature, and spirits.",
      },
    ],
    links: [{ rel: "canonical", href: "/guide" }],
  }),
  component: Guide,
});

const guides = [
  {
    n: "01",
    title: "Wine Types",
    sections: [
      "Red wines range from light and elegant to bold and full-bodied. Carlo Rossi and Cape More offer classic smooth profiles, while André Rosé and Dominio Rosé bring delicate fruit.",
      "White wines like Mixed Southern Snow are fruity and refreshing — served chilled, they're perfect for warm evenings.",
      "Sparkling wines like Four Cousins Sparkling are for celebration — crisp, refreshing and always welcome.",
    ],
  },
  {
    n: "02",
    title: "Food & Drink Pairing",
    sections: [
      "Red wines pair well with grilled meats, stews and rich dishes. Suya, pepper soup and jollof rice find their match in a smooth red.",
      "Rosé wines complement lighter fare — salads, small chops and fresh fruit.",
      "Whisky and cognac stand alongside dark chocolate, dried fruit or simply on their own.",
    ],
  },
  {
    n: "03",
    title: "Serving",
    sections: [
      "Red wine: serve at room temperature (15-18°C) in a wide-bowl glass.",
      "White and rosé: serve chilled (8-12°C) in a smaller glass.",
      "Sparkling: serve well-chilled (6-8°C) in a flute to preserve the bubbles.",
      "Whisky: serve neat, on ice, or with a splash of water to open the flavours.",
    ],
  },
  {
    n: "04",
    title: "Spirits",
    sections: [
      "Whisky: from the bold 8 PM to the honeyed Zenith — each has its own character.",
      "Cognac: Hennessy, Martell and Rémy Martin represent the pinnacle of French brandy.",
      "Gin: versatile and aromatic — perfect with tonic or in cocktails.",
      "Vodka: clean and crisp — Smirnoff for mixing, Cîroc for sipping.",
    ],
  },
];

function Guide() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pt-40 pb-16 sm:px-8 sm:pt-48">
          <Reveal>
            <p className="eyebrow">Drink Guide</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-7xl">
              Learn the language
              <span className="block italic text-accent">of the pour</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="space-y-20">
          {guides.map((g, i) => (
            <Reveal key={g.n} delay={i * 80}>
              <div>
                <span className="text-[0.65rem] tracking-[0.24em] text-accent">
                  {g.n}
                </span>
                <h2 className="mt-4 font-display text-4xl">{g.title}</h2>
                <div className="mt-6 space-y-4">
                  {g.sections.map((s, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
