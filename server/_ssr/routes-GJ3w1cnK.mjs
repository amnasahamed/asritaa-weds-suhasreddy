import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, n as useTransform, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as invitation } from "./router-ISecFGSh.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Sparkles, c as MapPin, d as Compass, f as Clock, h as CalendarPlus, i as Volume2, l as Heart, m as Check, n as X, o as Shirt, p as ChevronDown, r as VolumeX, s as Music, t as ZoomIn, u as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-GJ3w1cnK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var seal = "https://media.invitestory.in/ever-after-bloom/src/assets/invite-seal.png";
var video = "https://media.invitestory.in/ever-after-bloom/src/assets/invite-open.mp4";
/** Frame of the film where the envelope is fully open and we cross into the site. */
var FADE_AT = 7.15;
/**
* The cover of the storybook: a wax-sealed envelope. Tapping the seal plays the
* opening film, which dissolves into the invitation at 7.15s.
*/
function IntroGate() {
	const [stage, setStage] = (0, import_react.useState)("seal");
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [fading, setFading] = (0, import_react.useState)(false);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (stage === "done") return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [stage]);
	const open = () => {
		if (stage !== "seal") return;
		setStage("film");
		window.dispatchEvent(new CustomEvent("play-wedding-music"));
		const el = videoRef.current;
		if (!el) return;
		el.currentTime = 0;
		el.play();
	};
	const finish = () => {
		if (fading) return;
		setFading(true);
		window.dispatchEvent(new CustomEvent("play-wedding-music"));
		window.setTimeout(() => setStage("done"), 1300);
	};
	if (stage === "done") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[100] overflow-hidden bg-[var(--ivory)]",
		initial: { opacity: 1 },
		animate: { opacity: fading ? 0 : 1 },
		transition: {
			duration: 1.2,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		style: { pointerEvents: fading ? "none" : "auto" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.video, {
				ref: videoRef,
				src: video,
				playsInline: true,
				muted: true,
				preload: "auto",
				initial: false,
				animate: { opacity: playing ? 1 : 0 },
				transition: {
					duration: .5,
					ease: "easeOut"
				},
				className: "absolute inset-0 h-full w-full object-cover",
				onPlaying: () => setPlaying(true),
				onTimeUpdate: (e) => {
					if (e.currentTarget.currentTime >= FADE_AT) finish();
				},
				onEnded: finish,
				onError: finish
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				onClick: open,
				disabled: stage === "film",
				"aria-label": "Tap the seal to open the invitation",
				className: "absolute inset-0 h-full w-full cursor-pointer",
				initial: {
					opacity: 0,
					scale: 1.04
				},
				animate: {
					opacity: playing ? 0 : 1,
					scale: playing ? 1.02 : 1
				},
				transition: {
					duration: playing ? .5 : 1.1,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				style: { pointerEvents: stage === "film" ? "none" : "auto" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: seal,
					alt: "Ivory wedding envelope with a gold wax seal on a marble pedestal, framed by bougainvillea",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					"aria-hidden": true,
					className: "pointer-events-none absolute top-[46%] left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl",
					style: { background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 55%, transparent), transparent 70%)" },
					animate: {
						opacity: [
							.35,
							.8,
							.35
						],
						scale: [
							.9,
							1.15,
							.9
						]
					},
					transition: {
						duration: 2.8,
						repeat: Infinity,
						ease: "easeInOut"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: finish,
				className: "absolute right-5 bottom-6 z-10 rounded-full bg-[color-mix(in_oklab,var(--ivory)_70%,transparent)] px-4 py-2 font-sans text-[0.6rem] tracking-[0.28em] text-primary uppercase backdrop-blur",
				children: "Skip"
			})
		]
	});
}
var lantern = "https://media.invitestory.in/ever-after-bloom/src/assets/lantern.png";
/** Warm paper lanterns rising on staggered, randomised loops. */
function LanternField({ count = 9, className = "", travel = 1.15 }) {
	const reduced = useReducedMotion();
	const lanterns = Array.from({ length: count }, (_, i) => {
		const rand = (i * 9301 + 49297) % 233280 / 233280;
		const start = (i * 23 + rand * 30) % 72;
		const climb = (100 - start + 18) * travel;
		return {
			left: 4 + (i * 11.3 + rand * 17) % 90,
			size: 18 + rand * 44,
			start,
			climb,
			duration: 22 + rand * 18,
			drift: rand > .5 ? 22 : -18,
			opacity: .55 + rand * .45
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		children: lanterns.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src: lantern,
			alt: "",
			loading: "lazy",
			width: l.size,
			height: l.size * 1.3,
			className: "absolute will-change-transform",
			style: {
				left: `${l.left}%`,
				width: l.size,
				bottom: `${l.start}%`,
				filter: "drop-shadow(0 0 14px color-mix(in oklab, var(--gold) 55%, transparent))",
				opacity: l.opacity
			},
			initial: false,
			animate: reduced ? {
				y: 0,
				x: 0
			} : {
				y: ["0vh", `-${l.climb}vh`],
				x: [
					0,
					l.drift,
					-l.drift * .6,
					0
				],
				rotate: [
					0,
					3,
					-2,
					0
				]
			},
			transition: reduced ? { duration: 0 } : {
				duration: l.duration,
				repeat: Infinity,
				ease: "linear",
				x: {
					duration: l.duration / 2,
					repeat: Infinity,
					ease: "easeInOut"
				},
				rotate: {
					duration: 9,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}
		}, i))
	});
}
/** Drifting flower petals, painted as soft ellipses so they cost nothing. */
function Petals({ count = 14, className = "" }) {
	if (useReducedMotion()) return null;
	const petals = Array.from({ length: count }, (_, i) => {
		const rand = i * 7919 % 997 / 997;
		return {
			left: (i * 13.7 + rand * 9) % 100,
			size: 6 + rand * 9,
			duration: 13 + rand * 12,
			delay: -rand * 20,
			sway: 30 + rand * 50,
			hue: rand > .6 ? "var(--rose)" : rand > .3 ? "var(--blush)" : "var(--peach)"
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		children: petals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute block will-change-transform",
			style: {
				left: `${p.left}%`,
				top: "-6%",
				width: p.size,
				height: p.size * .62,
				borderRadius: "60% 40% 55% 45% / 60% 55% 45% 40%",
				background: `color-mix(in oklab, ${p.hue} 75%, transparent)`
			},
			animate: {
				y: ["0vh", "112vh"],
				x: [
					0,
					p.sway,
					-p.sway * .7,
					0
				],
				rotate: [
					0,
					220,
					380
				],
				opacity: [
					0,
					.85,
					.85,
					0
				]
			},
			transition: {
				duration: p.duration,
				delay: p.delay,
				repeat: Infinity,
				ease: "linear",
				x: {
					duration: p.duration / 2.4,
					repeat: Infinity,
					ease: "easeInOut"
				},
				rotate: {
					duration: p.duration,
					repeat: Infinity,
					ease: "linear"
				},
				opacity: {
					duration: p.duration,
					repeat: Infinity,
					times: [
						0,
						.12,
						.85,
						1
					]
				}
			}
		}, i))
	});
}
var heroPalace = "https://media.invitestory.in/ever-after-bloom/src/assets/hero-palace.jpg";
var bougainvillea = "https://media.invitestory.in/ever-after-bloom/src/assets/bougainvillea.png";
/** Chapter one: the palace at dawn, with the sky as the stage. */
function Hero() {
	const reduced = useReducedMotion();
	const { scrollY } = useScroll();
	const skyY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 170]);
	const plateY = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 70]);
	const titleY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -60]);
	const fade = useTransform(scrollY, [0, 520], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[100svh] min-h-[620px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-0",
				style: {
					y: skyY,
					scale: 1.08
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: heroPalace,
					alt: "Watercolour illustration of a sandstone palace beneath a blush dawn sky",
					width: 1024,
					height: 1536,
					className: "h-full w-full object-cover object-bottom"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, color-mix(in oklab, var(--lavender) 22%, transparent) 0%, transparent 34%, color-mix(in oklab, var(--cream) 18%, transparent) 78%, color-mix(in oklab, var(--ivory) 62%, transparent) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanternField, {
				count: 10,
				travel: 1.1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, { count: 12 }),
			!reduced && [0, 1].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute h-40 w-[160%] rounded-full blur-3xl",
				style: {
					top: `${12 + i * 16}%`,
					left: "-30%",
					background: `color-mix(in oklab, var(--ivory) ${34 - i * 10}%, transparent)`
				},
				animate: { x: [
					"-8%",
					"18%",
					"-8%"
				] },
				transition: {
					duration: 52 + i * 22,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, i)),
			!reduced && [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
				"aria-hidden": true,
				viewBox: "0 0 24 8",
				className: "pointer-events-none absolute w-4 text-primary/40 sm:w-5",
				style: { top: `${26 + i * 5}%` },
				animate: {
					x: ["-10vw", "112vw"],
					y: [
						0,
						-14,
						6,
						0
					]
				},
				transition: {
					duration: 34 + i * 9,
					delay: i * 7,
					repeat: Infinity,
					ease: "linear",
					y: {
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut"
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M1 5C4 1 7 1 10 5M14 5c3-4 6-4 9 0",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.1",
					strokeLinecap: "round"
				})
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: bougainvillea,
				alt: "",
				"aria-hidden": true,
				width: 957,
				height: 715,
				className: "pointer-events-none absolute -top-6 -left-16 w-52 opacity-90 sm:w-72 md:w-80",
				style: { y: plateY },
				animate: reduced ? {} : { rotate: [
					0,
					1.6,
					-1,
					0
				] },
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: bougainvillea,
				alt: "",
				"aria-hidden": true,
				width: 957,
				height: 715,
				className: "pointer-events-none absolute -right-20 bottom-24 w-48 scale-x-[-1] opacity-85 sm:w-64 md:w-72",
				style: { y: plateY },
				animate: reduced ? {} : { rotate: [
					0,
					-1.4,
					1,
					0
				] },
				transition: {
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative z-10 flex h-full flex-col items-center px-6 pt-[13svh] text-center",
				style: {
					y: titleY,
					opacity: fade
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.1,
							delay: .2
						},
						className: "font-sans text-[0.62rem] tracking-[0.5em] text-primary/70 uppercase sm:text-xs",
						children: invitation.hero.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 22,
							filter: "blur(8px)"
						},
						animate: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						transition: {
							duration: 1.5,
							delay: .45,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-6 text-5xl leading-[0.95] text-primary drop-shadow-[0_2px_18px_rgba(255,255,255,0.55)] sm:text-6xl md:text-7xl",
						children: [
							invitation.couple.bride,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3 font-script text-3xl italic sm:text-4xl",
								children: "&"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "sm:hidden" }),
							invitation.couple.groom
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scaleX: .4
						},
						animate: {
							opacity: 1,
							scaleX: 1
						},
						transition: {
							duration: 1.2,
							delay: .9
						},
						className: "mt-6 h-px w-40 origin-center",
						style: { background: "var(--gradient-gold)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1.2,
							delay: 1.05
						},
						className: "mt-5 font-script text-xl text-primary/80 italic sm:text-2xl",
						children: invitation.hero.blessing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
						href: "#details",
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1.3
						},
						whileHover: { scale: 1.04 },
						whileTap: { scale: .97 },
						className: "glass-plate shimmer mt-9 rounded-full px-8 py-3 font-sans text-[0.7rem] tracking-[0.32em] uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-text shimmer font-semibold",
							children: invitation.hero.eyebrow
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mt-auto mb-8 text-primary/50",
						animate: reduced ? {} : { y: [
							0,
							8,
							0
						] },
						transition: {
							duration: 2.6,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 22 })
					})
				]
			})
		]
	});
}
var flourish = "https://media.invitestory.in/ever-after-bloom/src/assets/gold-flourish.png";
/** Scroll-reveal wrapper used by every section so the page turns like pages. */
function Reveal({ children, delay = 0, y = 28, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-12% 0px -8% 0px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Ornament({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: `flex justify-center ${className}`,
		y: 12,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: flourish,
			alt: "",
			"aria-hidden": true,
			loading: "lazy",
			width: 888,
			height: 124,
			className: "h-auto w-40 opacity-80 sm:w-52"
		})
	});
}
function SectionTitle({ eyebrow, title, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				y: 14,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[0.68rem] tracking-[0.42em] text-gold-deep uppercase",
					children: eyebrow
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl leading-tight text-primary sm:text-4xl md:text-5xl",
					children: title
				})
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .16,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md font-script text-lg text-muted-foreground italic sm:text-xl",
					children: note
				})
			}) : null
		]
	});
}
var brideImg = "/client/bride-asritaa.jpg";
var groomImg = "/client/groom-suhas.jpg";
var cartoonImg = "/client/couple_cartoon_hero.jpg";
function PortraitCard({ src, alt, name, role, text, flip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: flip ? .12 : 0,
		className: "group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			whileHover: { y: -6 },
			transition: {
				type: "spring",
				stiffness: 180,
				damping: 20
			},
			className: "plate paper-grain overflow-hidden rounded-[2rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden aspect-[4/5] sm:aspect-square",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src,
					alt,
					loading: "lazy",
					width: 1024,
					height: 1024,
					className: "h-full w-full object-cover object-top",
					initial: { scale: 1.06 },
					whileInView: { scale: 1 },
					viewport: { once: true },
					transition: {
						duration: 1.6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
					style: { background: "radial-gradient(circle at 50% 70%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 65%)" }
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pt-6 pb-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.62rem] tracking-[0.4em] text-gold-deep uppercase",
						children: role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-2xl text-primary sm:text-3xl",
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: text
					})
				]
			})]
		})
	});
}
function CoupleStory() {
	const { story } = invitation;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 py-24 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			style: { background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 26%, var(--ivory)) 50%, var(--ivory) 100%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Chapter One",
					title: story.title,
					note: story.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitCard, {
						src: brideImg,
						alt: "Portrait of the radiant bride Asritaa in traditional red bridal silk",
						...story.bride
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitCard, {
						src: groomImg,
						alt: "Portrait of the groom Suhas Reddy in an ivory sherwani",
						flip: true,
						...story.groom
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .16,
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "plate paper-grain overflow-hidden rounded-[2.2rem] p-6 sm:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 items-center lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7 overflow-hidden rounded-[1.8rem] shadow-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: cartoonImg,
									alt: "Fairytale AI cartoon illustration of Asritaa & Suhas Reddy dancing in an illuminated garden",
									loading: "lazy",
									className: "aspect-[9/14] w-full max-h-[540px] object-cover sm:max-h-[620px]",
									whileHover: { scale: 1.02 },
									transition: { duration: .8 }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 text-center lg:text-left space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3.5 py-1 font-sans text-[0.6rem] font-medium tracking-[0.25em] text-gold-deep uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 13 }), " Illustrated Storybook Art"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-primary sm:text-3xl lg:text-4xl leading-tight",
										children: "A Dance in the Starlit Courtyard"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-sm leading-relaxed text-muted-foreground",
										children: "Hand-crafted in a whimsical fairytale aesthetic, capturing Asritaa and Suhas twirling beneath glowing garden lanterns and blooming bougainvillea. A memory painted for eternity."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-script text-xl text-primary/80 italic",
											children: "“In your arms, every season feels like spring.”"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-sans text-[0.6rem] tracking-[0.3em] text-gold-deep uppercase",
											children: "Asritaa • Suhas Reddy"
										})]
									})
								]
							})]
						})
					})
				})
			]
		})]
	});
}
function diff(target) {
	const ms = Math.max(0, target - Date.now());
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms / 36e5 % 24),
		minutes: Math.floor(ms / 6e4 % 60),
		seconds: Math.floor(ms / 1e3 % 60)
	};
}
function Unit({ value, label }) {
	const text = String(value).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-plate flex min-w-[4.6rem] flex-col items-center rounded-2xl px-3 py-4 sm:min-w-[6rem] sm:px-5 sm:py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-9 overflow-hidden sm:h-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				initial: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						y: 22,
						opacity: 0
					},
					animate: {
						y: 0,
						opacity: 1
					},
					exit: {
						y: -22,
						opacity: 0
					},
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "block font-display text-3xl text-primary tabular-nums sm:text-4xl",
					children: text
				}, text)
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 font-sans text-[0.55rem] tracking-[0.3em] text-gold-deep uppercase sm:text-[0.62rem]",
			children: label
		})]
	});
}
function Countdown() {
	const target = new Date(invitation.dateISO).getTime();
	const [left, setLeft] = (0, import_react.useState)({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	(0, import_react.useEffect)(() => {
		setLeft(diff(target));
		const id = setInterval(() => setLeft(diff(target)), 1e3);
		return () => clearInterval(id);
	}, [target]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--lavender) 30%, var(--ivory)) 55%, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanternField, {
				count: 6,
				className: "opacity-70",
				travel: 1.1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "The Auspicious Moment",
						title: "Until the Sacred Muhurtham"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-3 sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
								value: left.days,
								label: "Days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
								value: left.hours,
								label: "Hours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
								value: left.minutes,
								label: "Minutes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unit, {
								value: left.seconds,
								label: "Seconds"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-center font-script text-lg text-muted-foreground italic",
						children: [
							invitation.ceremonyDateLabel,
							" • ",
							invitation.timeLabel
						]
					})
				]
			})
		]
	});
}
var mapPlate = "https://media.invitestory.in/ever-after-bloom/src/assets/map-plate.jpg";
var car = "https://media.invitestory.in/ever-after-bloom/src/assets/wedding-car.png";
function buildIcs() {
	const start = new Date(invitation.dateISO);
	const end = new Date(start.getTime() + 144e5);
	const stamp = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
	const lines = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Asritaa & Suhas Reddy Wedding//EN",
		"BEGIN:VEVENT",
		`UID:${start.getTime()}@asritaa-suhas-wedding`,
		`DTSTAMP:${stamp(/* @__PURE__ */ new Date())}`,
		`DTSTART:${stamp(start)}`,
		`DTEND:${stamp(end)}`,
		`SUMMARY:${invitation.couple.bride} & ${invitation.couple.groom} — Wedding & Muhurtham`,
		`LOCATION:${invitation.venue.name}, ${invitation.venue.address}`,
		"DESCRIPTION:Join us to celebrate the wedding ceremony of Asritaa and Suhas Reddy.",
		"END:VEVENT",
		"END:VCALENDAR"
	];
	return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}
var summaryCards = [
	{
		icon: Sparkles,
		label: "Celebration Dates",
		value: invitation.dateLabel
	},
	{
		icon: Clock,
		label: "Auspicious Muhurtham",
		value: invitation.timeLabel
	},
	{
		icon: MapPin,
		label: "Main Wedding Venue",
		value: `${invitation.venue.name} · ${invitation.venue.address}`
	},
	{
		icon: Shirt,
		label: "Dress Code",
		value: invitation.dressCode
	}
];
function Details() {
	const [selectedDay, setSelectedDay] = (0, import_react.useState)("all");
	const [calendarDownloaded, setCalendarDownloaded] = (0, import_react.useState)(false);
	const filteredEvents = invitation.events.filter((evt) => {
		if (selectedDay === "day1") return evt.day.includes("10 October");
		if (selectedDay === "day2") return evt.day.includes("11 October");
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "details",
		className: "relative overflow-hidden px-5 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10",
			style: { background: "linear-gradient(180deg, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 0%, var(--cream) 45%, var(--ivory) 100%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Chapter Two",
					title: "Celebration & Itinerary",
					note: "Join us across every sacred ceremony & joyous gathering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: summaryCards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileHover: { y: -4 },
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 18
							},
							className: "plate paper-grain flex h-full flex-col justify-between rounded-[1.6rem] p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
									className: "text-gold-deep",
									size: 22,
									strokeWidth: 1.5
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-sans text-[0.62rem] tracking-[0.34em] text-gold-deep uppercase",
									children: c.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-base leading-snug text-primary sm:text-lg",
									children: c.value
								})
							] })
						})
					}, c.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
						href: buildIcs(),
						download: "asritaa-suhas-wedding.ics",
						onClick: () => {
							setCalendarDownloaded(true);
							setTimeout(() => setCalendarDownloaded(false), 3e3);
						},
						whileHover: { scale: 1.03 },
						whileTap: { scale: .97 },
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-[0.68rem] tracking-[0.22em] text-primary-foreground uppercase shadow-md transition-all",
						children: calendarDownloaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							size: 16,
							className: "text-emerald-300",
							strokeWidth: 2
						}), " Added to Calendar"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							size: 16,
							strokeWidth: 1.6
						}), " Add to Calendar"] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: invitation.venue.mapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						whileHover: { scale: 1.03 },
						whileTap: { scale: .97 },
						className: "glass-plate inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-[0.68rem] tracking-[0.22em] text-primary uppercase shadow-sm transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
							size: 16,
							strokeWidth: 1.6
						}), " View Main Venue Map"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase",
								children: "The Auspicious Schedule"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl text-primary sm:text-3xl",
								children: "Order of Events & Venues"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-md font-sans text-xs tracking-wider text-muted-foreground",
								children: "Please tap on “Get Directions” beside any event to navigate directly via Google Maps."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 inline-flex rounded-full bg-primary/10 p-1 backdrop-blur-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSelectedDay("all"),
										className: `rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${selectedDay === "all" ? "bg-primary text-primary-foreground shadow-sm" : "text-primary/70 hover:text-primary"}`,
										children: "All Events (7)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSelectedDay("day1"),
										className: `rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${selectedDay === "day1" ? "bg-primary text-primary-foreground shadow-sm" : "text-primary/70 hover:text-primary"}`,
										children: "Oct 10 · Mehendi & Sangeeth"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSelectedDay("day2"),
										className: `rounded-full px-4 py-2 font-sans text-[0.65rem] tracking-[0.2em] uppercase transition-all ${selectedDay === "day2" ? "bg-primary text-primary-foreground shadow-sm" : "text-primary/70 hover:text-primary"}`,
										children: "Oct 11 · Haldi to Muhurtham"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "popLayout",
							children: filteredEvents.map((evt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									scale: .96
								},
								transition: {
									duration: .35,
									delay: i * .04
								},
								className: "plate paper-grain rounded-[1.8rem] p-5 sm:p-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-gold/20 px-3 py-1 font-sans text-[0.55rem] font-semibold tracking-[0.2em] text-gold-deep uppercase",
														children: evt.tag
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1 font-sans text-xs font-semibold text-primary",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
															size: 13,
															className: "text-gold-deep"
														}), evt.time]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs text-muted-foreground",
														children: ["· ", evt.day]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-2 font-display text-xl text-primary sm:text-2xl",
												children: evt.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: evt.subtitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5 font-sans font-medium",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
															size: 14,
															className: "text-gold-deep"
														}),
														evt.venueName,
														", ",
														evt.location
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5 text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shirt, {
														size: 13,
														className: "text-gold-deep/80"
													}), evt.dressCode]
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:self-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
											href: evt.mapsUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											whileHover: { scale: 1.04 },
											whileTap: { scale: .96 },
											className: "inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary/25 bg-background/80 px-4 py-2.5 font-sans text-[0.62rem] font-semibold tracking-[0.2em] text-primary uppercase shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 13 }),
												"Get Directions",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
													size: 12,
													className: "opacity-70"
												})
											]
										})
									})]
								})
							}, evt.id))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase",
							children: "Venues Guide"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl text-primary sm:text-3xl",
							children: "Three Auspicious Locations in Vizag"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-3",
						children: invitation.venues.map((venue, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: idx * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-plate flex h-full flex-col justify-between rounded-[1.6rem] p-6 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-deep",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-3 font-display text-lg text-primary",
										children: venue.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-xs text-muted-foreground",
										children: venue.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap justify-center gap-1.5",
										children: venue.events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary/10 px-2.5 py-0.5 font-sans text-[0.55rem] font-medium tracking-wider text-primary",
											children: ev
										}, ev))
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 pt-4 border-t border-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: venue.mapsUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1 font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase hover:underline",
										children: ["Open Maps Link ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 12 })]
									})
								})]
							})
						}, venue.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .14,
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "plate relative overflow-hidden rounded-[2rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mapPlate,
								alt: "Hand-painted illustrated map of the celebratory wedding venues",
								loading: "lazy",
								width: 1280,
								height: 1024,
								className: "h-64 w-full object-cover sm:h-80"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-0",
								style: { background: "linear-gradient(0deg, color-mix(in oklab, var(--cream) 60%, transparent), transparent 55%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-6 rounded-full bg-white/75 px-3 py-1 font-sans text-[0.6rem] tracking-[0.25em] text-primary uppercase backdrop-blur-md",
								children: "Visakhapatnam, Andhra Pradesh"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: car,
								alt: "Illustrated vintage wedding car heading to the celebration",
								"aria-hidden": true,
								loading: "lazy",
								width: 1175,
								height: 567,
								className: "absolute bottom-2 left-0 w-44 sm:w-60",
								initial: {
									x: -100,
									opacity: 0
								},
								whileInView: {
									x: 30,
									opacity: 1
								},
								viewport: {
									once: true,
									margin: "-15%"
								},
								transition: {
									duration: 1.6,
									ease: [
										.22,
										1,
										.36,
										1
									]
								}
							})
						]
					})
				})
			]
		})]
	});
}
var garden = "https://media.invitestory.in/ever-after-bloom/src/assets/garden-courtyard.jpg";
/** Illustrated chapters, stitched together by a vine that draws itself. */
function Timeline() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 78%", "end 55%"]
	});
	const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: garden,
				alt: "",
				"aria-hidden": true,
				loading: "lazy",
				width: 1536,
				height: 1024,
				className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 74%, transparent) 30%, color-mix(in oklab, var(--ivory) 74%, transparent) 70%, var(--ivory) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Chapter Three",
					title: "How it happened",
					note: "Four pages, briefly"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					className: "relative mt-14 pl-12 sm:pl-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": true,
						className: "absolute top-0 left-3 h-full w-8 sm:left-5",
						viewBox: "0 0 40 1000",
						preserveAspectRatio: "none",
						fill: "none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
							d: "M20 0 C34 120, 6 220, 20 340 C34 460, 6 560, 20 680 C34 800, 6 900, 20 1000",
							stroke: "var(--olive)",
							strokeWidth: "2",
							strokeLinecap: "round",
							opacity: "0.65",
							style: { pathLength: draw }
						}), [
							110,
							300,
							500,
							700,
							880
						].map((y, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ellipse, {
							cx: i % 2 ? 30 : 10,
							cy: y,
							rx: "9",
							ry: "4.5",
							fill: "var(--sage)",
							opacity: "0.7",
							transform: `rotate(${i % 2 ? 24 : -24} ${i % 2 ? 30 : 10} ${y})`,
							style: { scale: draw }
						}, y))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-10",
						children: invitation.chapters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								whileHover: { x: 4 },
								transition: {
									type: "spring",
									stiffness: 200,
									damping: 20
								},
								className: "plate paper-grain relative rounded-[1.6rem] px-6 py-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -left-[3.15rem] top-7 flex h-8 w-8 items-center justify-center rounded-full font-display text-xs text-primary-foreground sm:-left-[4.2rem]",
										style: { background: "var(--gradient-gold)" },
										children: c.no
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[0.58rem] tracking-[0.34em] text-gold-deep uppercase",
										children: c.when
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl text-primary sm:text-2xl",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.text
									})
								]
							})
						}) }, c.no))
					})]
				})]
			})
		]
	});
}
var coupleLanterns = "https://media.invitestory.in/ever-after-bloom/src/assets/couple-lanterns.png";
var plates = [
	{
		src: "/client/couple-dancing.jpg",
		alt: "Asritaa and Suhas Reddy dancing joyfully in pastel attire",
		title: "Dancing in the Garden",
		span: "sm:row-span-2",
		ratio: "aspect-[3/4] sm:aspect-auto"
	},
	{
		src: "/client/couple-traditional-1.jpg",
		alt: "Asritaa and Suhas in traditional South Indian bridal silk and sherwani",
		title: "Traditional Grace",
		span: "",
		ratio: "aspect-square sm:aspect-[4/5]"
	},
	{
		src: "/client/couple-festive.jpg",
		alt: "Warm radiant smiles of Asritaa and Suhas together",
		title: "Joyful Beginnings",
		span: "",
		ratio: "aspect-square sm:aspect-[4/5]"
	},
	{
		src: "/client/couple-traditional-2.jpg",
		alt: "The couple standing hand in hand amidst lush green foliage",
		title: "Forever by Your Side",
		span: "sm:col-span-2",
		ratio: "aspect-[16/10]"
	}
];
function Gallery() {
	const reduced = useReducedMotion();
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 22%, var(--ivory)) 60%, var(--ivory) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Chapter Four",
						title: "Moments in Bloom",
						note: "Glimpses from Asritaa & Suhas's cherished celebrations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, { className: "mt-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: plates.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							className: p.span,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								type: "button",
								onClick: () => setOpen(i),
								whileHover: { y: -6 },
								animate: reduced ? {} : { y: [
									0,
									-4,
									0
								] },
								transition: { y: {
									duration: 7 + i,
									repeat: Infinity,
									ease: "easeInOut"
								} },
								className: "plate group block h-full w-full overflow-hidden rounded-[1.8rem] p-2 text-left cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full overflow-hidden rounded-[1.4rem]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.src,
										alt: p.alt,
										loading: "lazy",
										width: 1024,
										height: 1024,
										className: `${p.ratio} h-full w-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.05]`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
										style: { background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 60%)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex w-full items-center justify-between text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-sm tracking-wide",
												children: p.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, {
												size: 16,
												className: "text-white/80"
											})]
										})
									})]
								})
							})
						}, p.src))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "mt-14 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: coupleLanterns,
							alt: "Illustrated silhouette of the couple looking up at lanterns",
							loading: "lazy",
							width: 556,
							height: 908,
							className: "w-36 sm:w-48 opacity-90",
							animate: reduced ? {} : { y: [
								0,
								-7,
								0
							] },
							transition: {
								duration: 8,
								repeat: Infinity,
								ease: "easeInOut"
							}
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setOpen(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-h-[90vh] max-w-4xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: plates[open].src,
						alt: plates[open].alt,
						className: "max-h-[82vh] w-auto rounded-[1.4rem] object-contain shadow-2xl",
						initial: {
							scale: .92,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						exit: {
							scale: .94,
							opacity: 0
						},
						transition: {
							duration: .4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center font-display text-sm text-white/90",
						children: plates[open].title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close",
					className: "absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/40",
					onClick: () => setOpen(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 })
				})]
			}) })
		]
	});
}
var sunset = "https://media.invitestory.in/ever-after-bloom/src/assets/sunset-sky.jpg";
var lanternImg = "https://media.invitestory.in/ever-after-bloom/src/assets/lantern.png";
var blessings = [
	"May your evenings always be unhurried.",
	"May the tea be hot and the arguments short.",
	"May you keep choosing each other.",
	"May your house be loud with the right people.",
	"May the monsoon always find you together."
];
/** A soft aurora wash — pure CSS, no canvas, cheap on mobile. */
function AuroraGlow() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			0,
			1,
			2
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute h-[70%] w-[70%] rounded-full blur-[90px]",
			style: {
				left: `${i * 26 - 10}%`,
				top: `${8 + i * 12}%`,
				background: [
					"color-mix(in oklab, var(--lavender) 55%, transparent)",
					"color-mix(in oklab, var(--peach) 50%, transparent)",
					"color-mix(in oklab, var(--skyblue) 48%, transparent)"
				][i],
				mixBlendMode: "screen",
				opacity: .55
			},
			animate: reduced ? {} : {
				x: [
					0,
					40,
					-30,
					0
				],
				y: [
					0,
					-26,
					18,
					0
				]
			},
			transition: {
				duration: 30 + i * 11,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}, i))
	});
}
function Footer() {
	const [released, setReleased] = (0, import_react.useState)([]);
	const release = () => {
		const id = Date.now();
		setReleased((prev) => [...prev, {
			id,
			text: blessings[Math.floor(Math.random() * blessings.length)],
			left: 18 + Math.random() * 64
		}]);
		setTimeout(() => setReleased((prev) => prev.filter((r) => r.id !== id)), 7e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden pt-28 pb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: sunset,
				alt: "",
				"aria-hidden": true,
				loading: "lazy",
				width: 1920,
				height: 1024,
				className: "absolute inset-0 h-full w-full object-cover opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 40%, transparent) 26%, color-mix(in oklab, var(--lavender) 30%, transparent) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanternField, {
				count: 7,
				travel: 1.05,
				className: "opacity-90"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: released.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "pointer-events-none absolute bottom-10 z-10 flex w-40 flex-col items-center text-center",
				style: { left: `${r.left}%` },
				initial: {
					y: 0,
					opacity: 0,
					scale: .7
				},
				animate: {
					y: -520,
					opacity: [
						0,
						1,
						1,
						0
					],
					scale: 1
				},
				exit: { opacity: 0 },
				transition: {
					duration: 7,
					ease: "easeOut"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lanternImg,
					alt: "",
					width: 580,
					height: 751,
					className: "w-10 drop-shadow-[0_0_18px_color-mix(in_oklab,var(--gold)_65%,transparent)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 font-script text-sm text-primary italic",
					children: r.text
				})]
			}, r.id)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 mx-auto max-w-xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ornament, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-script text-3xl leading-snug text-primary italic sm:text-4xl",
						children: [
							invitation.footer.line1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							invitation.footer.line2
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						type: "button",
						onClick: release,
						whileHover: { scale: 1.04 },
						whileTap: { scale: .95 },
						className: "glass-plate mt-10 rounded-full px-7 py-3 font-sans text-[0.64rem] tracking-[0.3em] text-primary uppercase",
						children: "Release a wish lantern"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 font-display text-lg text-primary",
						children: invitation.footer.signoff
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-[0.6rem] tracking-[0.34em] text-primary/60 uppercase",
						children: invitation.dateLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 inline-flex items-center gap-2 font-sans text-[0.6rem] tracking-[0.3em] text-primary/55 uppercase",
						children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								size: 11,
								className: "fill-rose text-rose"
							}),
							" for our people"
						]
					})
				]
			})
		]
	});
}
function MusicPlayer() {
	const audioRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [hasInteracted, setHasInteracted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const audio = new Audio("/music/wedding-theme.mp3");
		audio.loop = true;
		audio.volume = .55;
		audioRef.current = audio;
		const handlePlayMusic = () => {
			if (!hasInteracted) audio.play().then(() => {
				setIsPlaying(true);
				setHasInteracted(true);
			}).catch(() => {});
		};
		window.addEventListener("play-wedding-music", handlePlayMusic);
		return () => {
			window.removeEventListener("play-wedding-music", handlePlayMusic);
			audio.pause();
		};
	}, [hasInteracted]);
	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else audio.play().then(() => {
			setIsPlaying(true);
			setHasInteracted(true);
		}).catch(console.error);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 right-5 z-40 sm:bottom-8 sm:right-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			type: "button",
			onClick: togglePlay,
			whileHover: { scale: 1.08 },
			whileTap: { scale: .92 },
			"aria-label": isPlaying ? "Mute music" : "Play wedding music",
			className: "glass-plate flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg backdrop-blur-md border border-primary/20 text-primary transition-colors hover:bg-primary/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-5 w-5 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								scale: .8,
								opacity: 0
							},
							animate: {
								scale: 1,
								opacity: 1
							},
							exit: {
								scale: .8,
								opacity: 0
							},
							className: "flex items-center gap-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "h-3 w-0.5 rounded-full bg-gold-deep",
									animate: { height: [
										"4px",
										"14px",
										"6px",
										"14px"
									] },
									transition: {
										duration: .8,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "h-4 w-0.5 rounded-full bg-primary",
									animate: { height: [
										"12px",
										"5px",
										"16px",
										"8px"
									] },
									transition: {
										duration: .7,
										repeat: Infinity,
										ease: "easeInOut",
										delay: .1
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "h-2 w-0.5 rounded-full bg-gold-deep",
									animate: { height: [
										"6px",
										"15px",
										"5px",
										"11px"
									] },
									transition: {
										duration: .9,
										repeat: Infinity,
										ease: "easeInOut",
										delay: .2
									}
								})
							]
						}, "playing") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: .8,
								opacity: 0
							},
							animate: {
								scale: 1,
								opacity: 1
							},
							exit: {
								scale: .8,
								opacity: 0
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {
								size: 16,
								className: "text-primary/70"
							})
						}, "paused")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-primary",
					children: isPlaying ? "Music Playing" : "Play Music"
				}),
				isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
					size: 15,
					className: "text-gold-deep"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
					size: 15,
					className: "text-primary/60"
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative w-full overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroGate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleStory, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, {})
		]
	});
}
//#endregion
export { Index as component };
