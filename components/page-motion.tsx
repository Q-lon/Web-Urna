"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-provider";

const easing = "cubic-bezier(.22,1,.36,1)";

/** Progressive enhancement only: no hidden content, masks, scroll or layout changes. */
export function PageMotion() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const seen = useRef(new WeakSet<Element>());
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const compact = matchMedia("(max-width: 1023px)");
    let observer: IntersectionObserver | undefined;
    const running = new Set<Animation>();
    const stop = () => {
      observer?.disconnect();
      running.forEach(animation => animation.cancel());
      running.clear();
    };
    const start = () => {
      stop();
      // Mobile content stays visible from its first paint. Starting an opacity
      // animation after intersection made already-visible text flash on Safari.
      if (reduced.matches || compact.matches) return;
      const selector = ".home-main h1,.home-main h2,.home-main h3,.home-main p,.home-main blockquote,.home-main .step-number,.home-main .founder-number,.home-main .hero-brand,.home-main figure > img,.home-main .hero-image > img,.home-main .partner-cards,.home-main .partner-contact-form label,.home-main .button-row > a,.home-main .text-link,.home-main .editorial-accordion button,.home-main .partner-contact-form > button";
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          observer?.unobserve(node);
          if (seen.current.has(node) || node.closest("[hidden]")) continue;
          seen.current.add(node);
          if (node.matches('.partner-cards')) {
            // One observation starts all rows together; hover never changes their width.
            Array.from(node.children).forEach((child, index) => {
              const animation = child.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: compact.matches ? 450 : 800, delay: compact.matches ? index * 30 : index * 85, easing, fill: 'backwards' });
              running.add(animation);
              animation.finished.then(() => { running.delete(animation); animation.cancel(); }).catch(() => {});
            });
            continue;
          }
          const originalOpacity = getComputedStyle(node).opacity;
          const image = node.matches("figure > img,.hero-image > img");
          const heading = node.matches("h1,h2,blockquote");
          const watermark = node.matches(".founder-number");
          const eyebrow = node.matches(".eyebrow");
          const card = node.closest(".step-card");
          const siblings = card?.parentElement ? Array.from(card.parentElement.children) : [];
          const index = card ? siblings.indexOf(card) : 0;
          const row = node.matches('.partner-cards li,.partner-contact-form label') ? node : node.closest('.editorial-accordion li');
          const rowIndex = row?.parentElement ? Array.from(row.parentElement.children).indexOf(row) : 0;
          const hero = !!node.closest('#inicio');
          const number = node.matches('.step-number');
          const logo = node.matches('.hero-brand');
          const action = node.matches('a,button');
          const dark = !!node.closest('#modulo,#alianzas,#socio,#fundadores');
          // Choreography, not layout: no wrappers, measuring lines or scroll listeners.
          let delay = image ? 0 : eyebrow ? 40 : heading ? 140 : 260;
          if (hero) delay = image ? 0 : logo ? 100 : heading ? 250 : action ? 570 + Array.from(node.parentElement!.children).indexOf(node) * 80 : 420;
          else if (card) delay = 280 + index * 95 + (number ? 0 : node.matches('h3') ? 100 : 180);
          else if (row) delay = 220 + rowIndex * 85;
          else if (action) delay = 400;
          if (compact.matches) delay = Math.min(delay * .25, 110);
          const frames: Keyframe[] = image
            ? [{ opacity: .96, scale: compact.matches ? "1.01" : "1.025" }, { opacity: originalOpacity, scale: "1" }]
            : watermark
              ? [{ opacity: 0, scale: "0.97" }, { opacity: originalOpacity, scale: "1" }]
              : number
                ? [{ opacity: 0, translate: "0 15px", scale: "0.98" }, { opacity: originalOpacity, translate: "0 0", scale: "1" }]
                : [{ opacity: 0, translate: `0 ${compact.matches ? 5 : heading ? 22 : eyebrow ? 8 : 12}px` }, { opacity: originalOpacity, translate: "0 0" }];
          const animation = node.animate(frames, {
            duration: compact.matches ? 550 : image ? 1600 : watermark ? 1400 : (heading ? 1100 : eyebrow ? 700 : 850) + (dark ? 100 : 0),
            delay, easing, fill: "backwards",
          });
          running.add(animation);
          animation.finished.then(() => { running.delete(animation); animation.cancel(); }).catch(() => {});
        }
      }, { threshold: .15 });
      nodes.forEach(node => observer?.observe(node));
    };
    start();
    reduced.addEventListener("change", start);
    compact.addEventListener("change", start);
    return () => {
      stop();
      reduced.removeEventListener("change", start);
      compact.removeEventListener("change", start);
    };
  }, [pathname, language]);
  return null;
}
