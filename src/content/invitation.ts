/**
 * Invitation copy and event data for Asritaa & Suhas Reddy.
 */

export interface WeddingEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  subtitle: string;
  venueName: string;
  location: string;
  address: string;
  mapsUrl: string;
  dressCode: string;
  tag: string;
}

export const invitation = {
  couple: {
    bride: "Asritaa",
    groom: "Suhas Reddy",
    initials: "A & S",
  },
  /** ISO date-time of the main Muhurtham ceremony, used by countdown and calendar */
  dateISO: "2026-10-11T23:32:00+05:30",
  dateLabel: "10 & 11 October 2026",
  ceremonyDateLabel: "Sunday, 11 October 2026",
  timeLabel: "Lagna Muhurtham at 11:32 in the night",
  venue: {
    name: "The Park Hotel",
    address: "Beach Road, Visakhapatnam, Andhra Pradesh",
    mapsQuery: "The Park Hotel Beach Road Visakhapatnam",
    mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
  },
  dressCode: "Festive Indian & Traditional Pattu Attire",
  hero: {
    kicker: "Together with our families",
    eyebrow: "Save the Date",
    blessing: "Two hearts, two souls, one eternal bond",
  },
  story: {
    title: "The Two of Them",
    subtitle: "A story of companionship, laughter and lifelong love",
    bride: {
      name: "Asritaa",
      role: "The Bride",
      text: "Radiant, graceful, and full of heartfelt warmth. With a laugh that fills the room and a kind soul that makes everyone around her feel cherished and at home.",
      image: "/client/bride-asritaa.jpg",
    },
    groom: {
      name: "Suhas Reddy",
      role: "The Groom",
      text: "Steady, caring, and deeply devoted. With an easy smile, quiet strength, and an unwavering commitment to holding her hand through every season of life.",
      image: "/client/groom-suhas.jpg",
    },
    cartoonHero: "/client/couple_cartoon_hero.jpg",
  },
  venues: [
    {
      id: "courtyard-villa",
      name: "Courtyard Villa",
      location: "Vizag",
      address: "Courtyard Villa, Visakhapatnam, Andhra Pradesh",
      mapsUrl: "https://maps.app.goo.gl/io9oiP3xa9jtJnoNA",
      events: ["Mehendi", "Sangeeth & Cocktail"],
    },
    {
      id: "mvv-city",
      name: "MVV City",
      location: "Visakhapatnam",
      address: "MVV City, Visakhapatnam, Andhra Pradesh",
      mapsUrl: "https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5",
      events: ["Haldi", "Pelli Kuturu & Pelli Koduku"],
    },
    {
      id: "the-park",
      name: "The Park Hotel",
      location: "Vizag",
      address: "The Park Hotel, Beach Road, Visakhapatnam",
      mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
      events: ["Varamala", "Pre-Reception", "Marriage (Muhurtham)"],
    },
  ],
  events: [
    {
      id: "mehendi",
      day: "Friday, 10 October 2026",
      time: "4:00 PM",
      title: "Mehendi",
      subtitle: "An intimate afternoon of intricate henna, music & sweet celebration",
      venueName: "Courtyard Villa",
      location: "Vizag",
      address: "Courtyard Villa, Vizag",
      mapsUrl: "https://maps.app.goo.gl/io9oiP3xa9jtJnoNA",
      dressCode: "Pastel Greens, Florals & Festive Casuals",
      tag: "Day 1 · Afternoon",
    },
    {
      id: "sangeeth",
      day: "Friday, 10 October 2026",
      time: "7:30 PM",
      title: "Sangeeth & Cocktail",
      subtitle: "A high-spirited evening of music, dazzling dance & toasts to the couple",
      venueName: "Courtyard Villa",
      location: "Vizag",
      address: "Courtyard Villa, Vizag",
      mapsUrl: "https://maps.app.goo.gl/io9oiP3xa9jtJnoNA",
      dressCode: "Indo-Western Glitz & Evening Glam",
      tag: "Day 1 · Evening",
    },
    {
      id: "haldi",
      day: "Saturday, 11 October 2026",
      time: "8:30 AM",
      title: "Haldi",
      subtitle: "Auspicious turmeric blessings, flower showers & laughter with loved ones",
      venueName: "MVV City",
      location: "Visakhapatnam",
      address: "MVV City, Visakhapatnam",
      mapsUrl: "https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5",
      dressCode: "Shades of Sunshine Yellow & Marigold",
      tag: "Day 2 · Morning",
    },
    {
      id: "pelli",
      day: "Saturday, 11 October 2026",
      time: "11:00 AM",
      title: "Pelli Kuturu & Pelli Koduku",
      subtitle: "Traditional Telugu ceremonies sanctifying bride and groom for marriage",
      venueName: "MVV City",
      location: "Visakhapatnam",
      address: "MVV City, Visakhapatnam",
      mapsUrl: "https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5",
      dressCode: "Traditional Telugu Silk (Pattu) Attire",
      tag: "Day 2 · Late Morning",
    },
    {
      id: "varamala",
      day: "Saturday, 11 October 2026",
      time: "6:00 PM",
      title: "Varamala",
      subtitle: "The ceremonial exchange of floral garlands uniting the bride and groom",
      venueName: "The Park Hotel",
      location: "Vizag",
      address: "The Park Hotel, Beach Road, Vizag",
      mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
      dressCode: "Royal Traditional Festive Wear",
      tag: "Day 2 · Sunset",
    },
    {
      id: "reception",
      day: "Saturday, 11 October 2026",
      time: "7:00 PM",
      title: "Pre-Reception & Dinner",
      subtitle: "Warm greetings, grand feast, and celebration photographs with family",
      venueName: "The Park Hotel",
      location: "Vizag",
      address: "The Park Hotel, Beach Road, Vizag",
      mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
      dressCode: "Grand Indian Formal & Pattu Sarees",
      tag: "Day 2 · Evening",
    },
    {
      id: "marriage",
      day: "Saturday, 11 October 2026",
      time: "11:32 PM",
      title: "Lagna Muhurtham",
      subtitle: "The sacred nuptials, Jeelakarra Bellam, and eternal seven vows",
      venueName: "The Park Hotel",
      location: "Vizag",
      address: "The Park Hotel, Beach Road, Vizag",
      mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
      dressCode: "Traditional Wedding Pattu Silks",
      tag: "Day 2 · Auspicious Muhurtham",
    },
  ] as WeddingEvent[],
  chapters: [
    {
      no: "I",
      title: "The First Spark",
      when: "The Beginning",
      text: "Two lives quietly crossing paths, conversations turning into hours, and finding a comfort in one another that neither had ever known before.",
    },
    {
      no: "II",
      title: "Growing Together",
      when: "Everyday Moments",
      text: "Sharing dreams, family gatherings, endless smiles, and learning that home isn't a place, but the person who stands beside you.",
    },
    {
      no: "III",
      title: "The Promise",
      when: "The Yes",
      text: "With hearts sure and clear, they chose each other for tomorrow and all the days that follow, sealed with laughter and blessing.",
    },
    {
      no: "IV",
      title: "And Now, Forever",
      when: "October 2026",
      text: "Joined by our families and dearest friends, we step across this sacred threshold to begin our greatest adventure together.",
    },
  ],
  footer: {
    line1: "Come celebrate with us.",
    line2: "Bless our beginning with your presence.",
    signoff: "With love & gratitude, Asritaa & Suhas Reddy",
  },
} as const;

export const wishes = [
  {
    from: "With Family Blessings",
    text: "May your bond grow deeper with every sunrise, and your journey ahead be blessed with endless happiness, prosperity, and peace.",
  },
  {
    from: "Friends & Well-wishers",
    text: "Here is to two beautiful souls stepping into the sweetest chapter of their lives together. May you keep each other laughing forever.",
  },
  {
    from: "The Entire Family",
    text: "Your union is a celebration of two loving families coming together. We cannot wait to shower you with flowers, love, and cheers!",
  },
] as const;
