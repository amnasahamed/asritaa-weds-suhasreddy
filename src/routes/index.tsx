import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { Hero } from "@/components/invitation/Hero";
import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Details } from "@/components/invitation/Details";
import { Timeline } from "@/components/invitation/Timeline";
import { Gallery } from "@/components/invitation/Gallery";
import { Footer } from "@/components/invitation/Footer";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { invitation } from "@/content/invitation";

const siteUrl = "https://asritaa-weds-suhasreddy.vercel.app";
const title = `${invitation.couple.bride} & ${invitation.couple.groom} — Royal Wedding Invitation`;
const description = `Together with our families, Asritaa & Suhas Reddy invite you to celebrate their wedding on ${invitation.dateLabel} in Visakhapatnam.`;
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: `${siteUrl}/` },
      { rel: "image_src", href: ogImageUrl },
    ],
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: "Asritaa & Suhas Reddy Wedding" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "576" },
      {
        property: "og:image:alt",
        content: `Wedding Invitation of ${invitation.couple.bride} & ${invitation.couple.groom}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: `${siteUrl}/` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImageUrl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroGate />
      <Hero />
      <CoupleStory />
      <Countdown />
      <Details />
      <Timeline />
      <Gallery />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
