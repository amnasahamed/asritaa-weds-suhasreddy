import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const brideImg = "/client/bride-asritaa.jpg";
const groomImg = "/client/groom-suhas.jpg";
const cartoonImg = "/client/couple_cartoon_hero.jpg";

function PortraitCard({
  src,
  alt,
  name,
  role,
  text,
  flip,
}: {
  src: string;
  alt: string;
  name: string;
  role: string;
  text: string;
  flip?: boolean;
}) {
  return (
    <Reveal delay={flip ? 0.12 : 0} className="group">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="plate paper-grain overflow-hidden rounded-[2rem]"
      >
        <div className="relative overflow-hidden aspect-[4/5] sm:aspect-square">
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover object-top"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at 50% 70%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)",
            }}
          />
        </div>
        <div className="px-6 pt-6 pb-8 text-center">
          <p className="font-sans text-[0.62rem] tracking-[0.4em] text-gold-deep uppercase">
            {role}
          </p>
          <h3 className="mt-3 text-2xl text-primary sm:text-3xl">{name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function CoupleStory() {
  const { story } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 26%, var(--ivory)) 50%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Chapter One" title={story.title} note={story.subtitle} />
        <Ornament className="mt-8" />

        {/* Bride and Groom Solo Portraits */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <PortraitCard
            src={brideImg}
            alt="Portrait of the radiant bride Asritaa in traditional red bridal silk"
            {...story.bride}
          />
          <PortraitCard
            src={groomImg}
            alt="Portrait of the groom Suhas Reddy in an ivory sherwani"
            flip
            {...story.groom}
          />
        </div>

        {/* AI Storybook Cartoon Showcase */}
        <Reveal delay={0.16} className="mt-16">
          <div className="plate paper-grain overflow-hidden rounded-[2.2rem] p-6 sm:p-10">
            <div className="grid gap-8 items-center lg:grid-cols-12">
              <div className="lg:col-span-7 overflow-hidden rounded-[1.8rem] shadow-lg">
                <motion.img
                  src={cartoonImg}
                  alt="Fairytale AI cartoon illustration of Asritaa & Suhas Reddy dancing in an illuminated garden"
                  loading="lazy"
                  className="aspect-[9/14] w-full max-h-[540px] object-cover sm:max-h-[620px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              <div className="lg:col-span-5 text-center lg:text-left space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3.5 py-1 font-sans text-[0.6rem] font-medium tracking-[0.25em] text-gold-deep uppercase">
                  <Sparkles size={13} /> Illustrated Storybook Art
                </span>
                <h3 className="font-display text-2xl text-primary sm:text-3xl lg:text-4xl leading-tight">
                  A Dance in the Starlit Courtyard
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  Hand-crafted in a whimsical fairytale aesthetic, capturing Asritaa and Suhas
                  twirling beneath glowing garden lanterns and blooming bougainvillea. A memory
                  painted for eternity.
                </p>

                <div className="pt-2">
                  <p className="font-script text-xl text-primary/80 italic">
                    &ldquo;In your arms, every season feels like spring.&rdquo;
                  </p>
                  <p className="mt-2 font-sans text-[0.6rem] tracking-[0.3em] text-gold-deep uppercase">
                    Asritaa &bull; Suhas Reddy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
