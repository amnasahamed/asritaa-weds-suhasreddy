# Client Requirements & Project Specification

## 1. Project Overview

- **Client / Point of Contact:** Ashu (`+91 90300 13785`)
- **Project Name:** Asritaa & Suhas Reddy Wedding Invitation
- **Template Design:** **Ever After Bloom** (Interactive Web Wedding Invitation)
- **Pricing & Payment:**
  - Agreed Package: ₹1,999 (customized interactive invitation)
  - Advance Received: ₹500
  - Balance Due upon Preview: ₹1,499
- **Priority / Urgency:** **Critical / Immediate** (24-hour turnaround window elapsed; delivery committed for today)

---

## 2. Couple Information

- **Bride:** Asritaa
- **Groom:** Suhas Reddy
- **Monogram / Initials:** A & S

---

## 3. Event Schedule & Venue Details

All events below must be showcased with date, time, venue address, and 1-tap Google Maps navigation links.

### Day 1: Friday, October 10, 2026

| Time        | Event                   | Venue & Location       | Maps Link                                                        |
| :---------- | :---------------------- | :--------------------- | :--------------------------------------------------------------- |
| **4:00 PM** | **Mehendi**             | Courtyard Villa, Vizag | [Open in Google Maps](https://maps.app.goo.gl/io9oiP3xa9jtJnoNA) |
| **7:30 PM** | **Sangeeth & Cocktail** | Courtyard Villa, Vizag | [Open in Google Maps](https://maps.app.goo.gl/io9oiP3xa9jtJnoNA) |

### Day 2: Saturday, October 11, 2026

| Time         | Event                           | Venue & Location        | Maps Link                                                        |
| :----------- | :------------------------------ | :---------------------- | :--------------------------------------------------------------- |
| **8:30 AM**  | **Haldi**                       | MVV City, Visakhapatnam | [Open in Google Maps](https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5) |
| **11:00 AM** | **Pelli Kuturu & Pelli Koduku** | MVV City, Visakhapatnam | [Open in Google Maps](https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5) |
| **6:00 PM**  | **Varamala**                    | The Park Hotel, Vizag   | [Open in Google Maps](https://maps.app.goo.gl/kLa6wRpVKSdBornHA) |
| **7:00 PM**  | **Pre-Reception / Reception**   | The Park Hotel, Vizag   | [Open in Google Maps](https://maps.app.goo.gl/kLa6wRpVKSdBornHA) |
| **11:32 PM** | **Marriage (Muhurtham)**        | The Park Hotel, Vizag   | [Open in Google Maps](https://maps.app.goo.gl/kLa6wRpVKSdBornHA) |

---

## 4. Media & Visual Assets

### 4.1 Client Provided Photos

- `00000049-PHOTO...jpg` — Solo portrait of Groom (**Suhas Reddy**) in ivory embroidered sherwani.
- `00000050-PHOTO...jpg` — Solo portrait of Bride (**Asritaa**) in crimson/gold bridal silk saree and temple jewelry.
- `00000051-PHOTO...jpg` & `00000052-PHOTO...jpg` — Romantic traditional couple portraits in lush greenery.
- `00000060-PHOTO...jpg` — Couple dancing outdoors in pastel attire (Suhas in powder blue, Asritaa in blush pink lehenga).
- `00000061-PHOTO...jpg` — **Style Reference**: Client specifically requested an AI illustrated / storybook fairy-light cartoon style based on photo `00000060`.
- `00000063-PHOTO...jpg` — Close smiling portrait of the couple in festive pastel wear.

### 4.2 Visual Styling Directives

- **Hero / Storybook Illustration:** AI cartoon / fairytale illustrated transformation of the couple dancing in the garden (`00000060`), matching the warmth and fairy-lit atmosphere of `00000061`.
- **Gallery & Story Sections:** Integrate authentic high-resolution portraits of the bride, groom, and couple.
- **Color Palette & Theme:** Pastel rose, champagne gold, ivory, and soft foliage green aligned with the "Ever After Bloom" aesthetic.

---

## 5. Technical & Functional Deliverables

1. **Content Personalization (`src/content/invitation.ts`)**
   - Update couple names, ceremony countdown (Target: Oct 11, 2026, 11:32 PM IST).
   - Configure multi-event schedule with all 7 ceremonies grouped by date and location.
   - Include direct Google Maps navigation buttons for each venue.

2. **Interactive Features**
   - **Countdown Timer:** Live countdown to the auspicious Muhurtham (Oct 11, 2026, 23:32:00+05:30).
   - **Interactive Audio:** Background wedding music player with toggle control.
   - **Photo Gallery:** Showcase couple and individual portraits in interactive modal/lightbox.
   - **Interactive RSVP / Calendar:** "Add to Calendar" support with ICS file generation.

---

## 6. Action Items Checklist

- [ ] Configure `src/content/invitation.ts` with couple and event details.
- [ ] Adapt schedule/events component to display all 7 ceremonies with multi-venue map links.
- [ ] Place extracted client photos into the project asset directory (`src/assets/` or `public/`).
- [ ] Prepare illustrated hero art inspired by reference image `00000061`.
- [ ] Test build (`npm run build` / `bun run build`) and preview live.
