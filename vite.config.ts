// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // This drives the prerender SSR runtime.
    server: { entry: "server" },
    // SPA mode renders a single prerendered shell page so the site can be served as
    // static files by the inviteby.top publisher (which expects dist/index.html).
    // `outputPath: "/index.html"` controls the file name written by TanStack Start's
    // prerender — without this, the prerenderer writes `.html` (because the route is `/`).
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        outputPath: "/index.html",
        crawlLinks: true,
      },
    },
  },
  // Drop the Nitro/Cloudflare deploy plugin. The site is a single-page wedding invitation
  // with zero server-side logic, so we don't need a Worker runtime — only a prerendered
  // HTML shell that TanStack Start generates via its own post-build `prerenderWithVite`.
  // Skipping Nitro also bypasses Nitro's static preset, which is broken with rolldown when
  // `nitro.options.entry` is unset (it falls back to `index.html` as an SSR input and Vite
  // refuses to bundle it).
  nitro: false,
  vite: {
    // Flatten Vite's per-environment output dirs so the static publisher finds
    // `dist/index.html` directly. TanStack Start's prerender writes the HTML to the
    // client env's outDir, so we point it at `dist`. The SSR env still builds to
    // `dist/server` — it's not deployed, but it's harmless to leave.
    environments: {
      client: { build: { outDir: "dist" } },
      ssr: { build: { outDir: "dist/server" } },
    },
  },
});
