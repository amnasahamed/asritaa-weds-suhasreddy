import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarPlus,
  Clock,
  MapPin,
  Shirt,
  Sparkles,
  ExternalLink,
  Calendar,
  Compass,
  Check,
} from "lucide-react";
const mapPlate = "https://media.invitestory.in/ever-after-bloom/src/assets/map-plate.jpg";
const car = "https://media.invitestory.in/ever-after-bloom/src/assets/wedding-car.png";
import { invitation, type WeddingEvent } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

function buildIcs() {
  const start = new Date(invitation.dateISO);
  const end = new Date(start.getTime() + 4 * 3_600_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Asritaa & Suhas Reddy Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@asritaa-suhas-wedding`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${invitation.couple.bride} & ${invitation.couple.groom} — Wedding & Muhurtham`,
    `LOCATION:${invitation.venue.name}, ${invitation.venue.address}`,
    "DESCRIPTION:Join us to celebrate the wedding ceremony of Asritaa and Suhas Reddy.",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

const summaryCards = [
  { icon: Sparkles, label: "Celebration Dates", value: invitation.dateLabel },
  { icon: Clock, label: "Auspicious Muhurtham", value: invitation.timeLabel },
  {
    icon: MapPin,
    label: "Main Wedding Venue",
    value: `${invitation.venue.name} · ${invitation.venue.address}`,
  },
  { icon: Shirt, label: "Dress Code", value: invitation.dressCode },
];

export function Details() {
  const [selectedDay, setSelectedDay] = useState<"all" | "day1" | "day2">("all");
  const [calendarDownloaded, setCalendarDownloaded] = useState(false);

  const filteredEvents = invitation.events.filter((evt) => {
    if (selectedDay === "day1") return evt.day.includes("10 October");
    if (selectedDay === "day2") return evt.day.includes("11 October");
    return true;
  });

  return (
    <section id="details" className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 0%, var(--cream) 45%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Chapter Two"
          title="Celebration & Itinerary"
          note="Join us across every sacred ceremony & joyous gathering"
        />
        <Ornament className="mt-8" />

        {/* Overview cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="plate paper-grain flex h-full flex-col justify-between rounded-[1.6rem] p-6"
              >
                <div>
                  <c.icon className="text-gold-deep" size={22} strokeWidth={1.5} />
                  <p className="mt-4 font-sans text-[0.62rem] tracking-[0.34em] text-gold-deep uppercase">
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-base leading-snug text-primary sm:text-lg">
                    {c.value}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Action Buttons: Add to Calendar & Quick Map */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.a
            href={buildIcs()}
            download="asritaa-suhas-wedding.ics"
            onClick={() => {
              setCalendarDownloaded(true);
              setTimeout(() => setCalendarDownloaded(false), 3000);
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-[0.68rem] tracking-[0.22em] text-primary-foreground uppercase shadow-md transition-all"
          >
            {calendarDownloaded ? (
              <>
                <Check size={16} className="text-emerald-300" strokeWidth={2} /> Added to Calendar
              </>
            ) : (
              <>
                <CalendarPlus size={16} strokeWidth={1.6} /> Add to Calendar
              </>
            )}
          </motion.a>

          <motion.a
            href={invitation.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass-plate inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-[0.68rem] tracking-[0.22em] text-primary uppercase shadow-sm transition-all"
          >
            <Compass size={16} strokeWidth={1.6} /> View Main Venue Map
          </motion.a>
        </Reveal>

        {/* Detailed Events Timeline Section */}
        <div className="mt-20">
          <div className="text-center">
            <span className="font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase">
              The Auspicious Schedule
            </span>
            <h3 className="mt-2 font-display text-2xl text-primary sm:text-3xl">
              Order of Events & Venues
            </h3>
            <p className="mx-auto mt-2 max-w-md font-sans text-xs tracking-wider text-muted-foreground">
              Please tap on &ldquo;Get Directions&rdquo; beside any event to navigate directly via
              Google Maps.
            </p>

            {/* Day Filter Tabs */}
            <div className="mt-6 inline-flex rounded-full bg-primary/10 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setSelectedDay("all")}
                className={`rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${
                  selectedDay === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-primary/70 hover:text-primary"
                }`}
              >
                All Events (7)
              </button>
              <button
                type="button"
                onClick={() => setSelectedDay("day1")}
                className={`rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${
                  selectedDay === "day1"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-primary/70 hover:text-primary"
                }`}
              >
                Oct 10 · Mehendi & Sangeeth
              </button>
              <button
                type="button"
                onClick={() => setSelectedDay("day2")}
                className={`rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${
                  selectedDay === "day2"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-primary/70 hover:text-primary"
                }`}
              >
                Oct 11 · Haldi to Muhurtham
              </button>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((evt, i) => (
                <motion.div
                  key={evt.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="plate paper-grain rounded-[1.8rem] p-5 sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-gold/20 px-3 py-1 font-sans text-[0.55rem] font-semibold tracking-[0.2em] text-gold-deep uppercase">
                          {evt.tag}
                        </span>
                        <span className="flex items-center gap-1 font-sans text-xs font-semibold text-primary">
                          <Clock size={13} className="text-gold-deep" />
                          {evt.time}
                        </span>
                        <span className="text-xs text-muted-foreground">· {evt.day}</span>
                      </div>

                      <h4 className="mt-2 font-display text-xl text-primary sm:text-2xl">
                        {evt.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">{evt.subtitle}</p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary/80">
                        <span className="inline-flex items-center gap-1.5 font-sans font-medium">
                          <MapPin size={14} className="text-gold-deep" />
                          {evt.venueName}, {evt.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <Shirt size={13} className="text-gold-deep/80" />
                          {evt.dressCode}
                        </span>
                      </div>
                    </div>

                    <div className="sm:self-center">
                      <motion.a
                        href={evt.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary/25 bg-background/80 px-4 py-2.5 font-sans text-[0.62rem] font-semibold tracking-[0.2em] text-primary uppercase shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
                      >
                        <MapPin size={13} />
                        Get Directions
                        <ExternalLink size={12} className="opacity-70" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Venues Directory Cards */}
        <div className="mt-20">
          <div className="text-center">
            <span className="font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase">
              Venues Guide
            </span>
            <h3 className="mt-2 font-display text-2xl text-primary sm:text-3xl">
              Three Auspicious Locations in Vizag
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {invitation.venues.map((venue, idx) => (
              <Reveal key={venue.id} delay={idx * 0.08}>
                <div className="glass-plate flex h-full flex-col justify-between rounded-[1.6rem] p-6 text-center">
                  <div>
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                      <MapPin size={18} />
                    </div>
                    <h4 className="mt-3 font-display text-lg text-primary">{venue.name}</h4>
                    <p className="font-sans text-xs text-muted-foreground">{venue.address}</p>

                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {venue.events.map((ev) => (
                        <span
                          key={ev}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 font-sans text-[0.55rem] font-medium tracking-wider text-primary"
                        >
                          {ev}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <a
                      href={venue.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase hover:underline"
                    >
                      Open Maps Link <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Illustrated map plate with the wedding car rolling in */}
        <Reveal delay={0.14} className="mt-16">
          <div className="plate relative overflow-hidden rounded-[2rem]">
            <img
              src={mapPlate}
              alt="Hand-painted illustrated map of the celebratory wedding venues"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, color-mix(in oklab, var(--cream) 60%, transparent), transparent 55%)",
              }}
            />
            <div className="absolute top-4 left-6 rounded-full bg-white/75 px-3 py-1 font-sans text-[0.6rem] tracking-[0.25em] text-primary uppercase backdrop-blur-md">
              Visakhapatnam, Andhra Pradesh
            </div>
            <motion.img
              src={car}
              alt="Illustrated vintage wedding car heading to the celebration"
              aria-hidden
              loading="lazy"
              width={1175}
              height={567}
              className="absolute bottom-2 left-0 w-44 sm:w-60"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 30, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
