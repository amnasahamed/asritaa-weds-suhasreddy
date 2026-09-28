import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
const coupleLanterns =
  "https://media.invitestory.in/ever-after-bloom/src/assets/couple-lanterns.png";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const plates = [
  {
    src: "/client/couple-dancing.jpg",
    alt: "Asritaa and Suhas Reddy dancing joyfully in pastel attire",
    title: "Dancing in the Garden",
    span: "sm:row-span-2",
    ratio: "aspect-[3/4] sm:aspect-auto",
  },
  {
    src: "/client/couple-traditional-1.jpg",
    alt: "Asritaa and Suhas in traditional South Indian bridal silk and sherwani",
    title: "Traditional Grace",
    span: "",
    ratio: "aspect-square sm:aspect-[4/5]",
  },
  {
    src: "/client/couple-festive.jpg",
    alt: "Warm radiant smiles of Asritaa and Suhas together",
    title: "Joyful Beginnings",
    span: "",
    ratio: "aspect-square sm:aspect-[4/5]",
  },
  {
    src: "/client/couple-traditional-2.jpg",
    alt: "The couple standing hand in hand amidst lush green foliage",
    title: "Forever by Your Side",
    span: "sm:col-span-2",
    ratio: "aspect-[16/10]",
  },
];

export function Gallery() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 22%, var(--ivory)) 60%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Chapter Four"
          title="Moments in Bloom"
          note="Glimpses from Asritaa & Suhas's cherished celebrations"
        />
        <Ornament className="mt-8" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {plates.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.06} className={p.span}>
              <motion.button
                type="button"
                onClick={() => setOpen(i)}
                whileHover={{ y: -6 }}
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={{
                  y: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className="plate group block h-full w-full overflow-hidden rounded-[1.8rem] p-2 text-left cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-[1.4rem]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`${p.ratio} h-full w-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.05]`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 60%)",
                    }}
                  >
                    <div className="flex w-full items-center justify-between text-white">
                      <span className="font-display text-sm tracking-wide">{p.title}</span>
                      <ZoomIn size={16} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <motion.img
            src={coupleLanterns}
            alt="Illustrated silhouette of the couple looking up at lanterns"
            loading="lazy"
            width={556}
            height={908}
            className="w-36 sm:w-48 opacity-90"
            animate={reduced ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={plates[open]!.src}
                alt={plates[open]!.alt}
                className="max-h-[82vh] w-auto rounded-[1.4rem] object-contain shadow-2xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="mt-3 text-center font-display text-sm text-white/90">
                {plates[open]!.title}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40"
              onClick={() => setOpen(null)}
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
