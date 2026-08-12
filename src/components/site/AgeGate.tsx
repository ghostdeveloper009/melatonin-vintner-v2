import { useEffect, useState } from "react";

const KEY = "mv.age-verified.v1";

/**
 * Tasteful age confirmation. We do not state a universal legal age — drinking
 * age varies by jurisdiction.
 */
export function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [exited, setExited] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY) !== "yes") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const confirm = () => {
    try {
      window.sessionStorage.setItem(KEY, "yes");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/98 px-6 backdrop-blur-md"
    >
      <div className="w-full max-w-md text-center">
        <p className="eyebrow">Melatonin Vintner</p>
        <h1
          id="age-gate-title"
          className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl"
        >
          {exited ? "Come back another evening." : "A moment, please."}
        </h1>
        {exited ? (
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            You may close this window. Please enjoy responsibly.
          </p>
        ) : (
          <>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              You must be of legal drinking age in your jurisdiction to enter
              this website. Requirements vary by country and region.
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <button
                onClick={confirm}
                className="w-full border border-accent/60 bg-accent/10 px-8 py-4 text-xs tracking-[0.24em] text-accent uppercase transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
              >
                I am of legal drinking age
              </button>
              <button
                onClick={() => setExited(true)}
                className="w-full border border-border px-8 py-4 text-xs tracking-[0.24em] text-muted-foreground uppercase transition-colors duration-500 hover:text-foreground"
              >
                Exit
              </button>
            </div>
            <p className="mt-8 text-[0.65rem] tracking-[0.18em] text-muted-foreground/70 uppercase">
              Please enjoy responsibly
            </p>
          </>
        )}
      </div>
    </div>
  );
}
