import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ISecFGSh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CnrPYd3Z.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "An Illustrated Wedding Invitation" },
			{
				name: "description",
				content: "A hand-painted, animated Indian wedding storybook invitation."
			},
			{
				name: "theme-color",
				content: "#fdf8ef"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Karla:wght@300;400;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var invitation = {
	couple: {
		bride: "Asritaa",
		groom: "Suhas Reddy",
		initials: "A & S"
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
		mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA"
	},
	dressCode: "Festive Indian & Traditional Pattu Attire",
	hero: {
		kicker: "Together with our families",
		eyebrow: "Save the Date",
		blessing: "Two hearts, two souls, one eternal bond"
	},
	story: {
		title: "The Two of Them",
		subtitle: "A story of companionship, laughter and lifelong love",
		bride: {
			name: "Asritaa",
			role: "The Bride",
			text: "Radiant, graceful, and full of heartfelt warmth. With a laugh that fills the room and a kind soul that makes everyone around her feel cherished and at home.",
			image: "/client/bride-asritaa.jpg"
		},
		groom: {
			name: "Suhas Reddy",
			role: "The Groom",
			text: "Steady, caring, and deeply devoted. With an easy smile, quiet strength, and an unwavering commitment to holding her hand through every season of life.",
			image: "/client/groom-suhas.jpg"
		},
		cartoonHero: "/client/couple_cartoon_hero.jpg"
	},
	venues: [
		{
			id: "courtyard-villa",
			name: "Courtyard Villa",
			location: "Vizag",
			address: "Courtyard Villa, Visakhapatnam, Andhra Pradesh",
			mapsUrl: "https://maps.app.goo.gl/io9oiP3xa9jtJnoNA",
			events: ["Mehendi", "Sangeeth & Cocktail"]
		},
		{
			id: "mvv-city",
			name: "MVV City",
			location: "Visakhapatnam",
			address: "MVV City, Visakhapatnam, Andhra Pradesh",
			mapsUrl: "https://maps.app.goo.gl/RV9GdmCsndfCwQ1y5",
			events: ["Haldi", "Pelli Kuturu & Pelli Koduku"]
		},
		{
			id: "the-park",
			name: "The Park Hotel",
			location: "Vizag",
			address: "The Park Hotel, Beach Road, Visakhapatnam",
			mapsUrl: "https://maps.app.goo.gl/kLa6wRpVKSdBornHA",
			events: [
				"Varamala",
				"Pre-Reception",
				"Marriage (Muhurtham)"
			]
		}
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
			tag: "Day 1 · Afternoon"
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
			tag: "Day 1 · Evening"
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
			tag: "Day 2 · Morning"
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
			tag: "Day 2 · Late Morning"
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
			tag: "Day 2 · Sunset"
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
			tag: "Day 2 · Evening"
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
			tag: "Day 2 · Auspicious Muhurtham"
		}
	],
	chapters: [
		{
			no: "I",
			title: "The First Spark",
			when: "The Beginning",
			text: "Two lives quietly crossing paths, conversations turning into hours, and finding a comfort in one another that neither had ever known before."
		},
		{
			no: "II",
			title: "Growing Together",
			when: "Everyday Moments",
			text: "Sharing dreams, family gatherings, endless smiles, and learning that home isn't a place, but the person who stands beside you."
		},
		{
			no: "III",
			title: "The Promise",
			when: "The Yes",
			text: "With hearts sure and clear, they chose each other for tomorrow and all the days that follow, sealed with laughter and blessing."
		},
		{
			no: "IV",
			title: "And Now, Forever",
			when: "October 2026",
			text: "Joined by our families and dearest friends, we step across this sacred threshold to begin our greatest adventure together."
		}
	],
	footer: {
		line1: "Come celebrate with us.",
		line2: "Bless our beginning with your presence.",
		signoff: "With love & gratitude, Asritaa & Suhas Reddy"
	}
};
var $$splitComponentImporter = () => import("./routes-GJ3w1cnK.mjs");
var siteUrl = "https://asritaa-suhasreddy.inviteby.top";
var title = `${invitation.couple.bride} & ${invitation.couple.groom} — Royal Wedding Invitation`;
var description = `Together with our families, Asritaa & Suhas Reddy invite you to celebrate their wedding on ${invitation.dateLabel} in Visakhapatnam.`;
var ogImageUrl = `${siteUrl}/og-image.jpg`;
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		links: [{
			rel: "canonical",
			href: siteUrl
		}],
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:site_name",
				content: "InviteStory"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: siteUrl
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:image",
				content: ogImageUrl
			},
			{
				property: "og:image:secure_url",
				content: ogImageUrl
			},
			{
				property: "og:image:type",
				content: "image/jpeg"
			},
			{
				property: "og:image:width",
				content: "1024"
			},
			{
				property: "og:image:height",
				content: "576"
			},
			{
				property: "og:image:alt",
				content: `Wedding Invitation of ${invitation.couple.bride} & ${invitation.couple.groom}`
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: ogImageUrl
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { invitation as n, router_exports as t };
