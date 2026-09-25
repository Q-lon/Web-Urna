"use client";

import { useEffect } from "react";

/** One desktop wheel gesture per slide, including the trackpad's momentum tail. */
export function SectionAlignment() {
  useEffect(() => {
    const compact = matchMedia("(max-width: 1023px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let restTimer: ReturnType<typeof setTimeout> | undefined;
    let touching = false;
    let adjusting = false;
    const root = document.documentElement;
    const alignAtRest = () => {
      if (!compact.matches || touching || document.querySelector('.menu-open, .partner-contact-form :focus')) return;
      const viewport = window.visualViewport;
      if (viewport && viewport.scale !== 1) return;
      const height = viewport?.height ?? innerHeight;
      const current = scrollY;
      const maximum = root.scrollHeight - innerHeight;
      // Align section starts only. An end target moves the heading underneath
      // the fixed header and exposes the next section behind Safari's toolbar.
      // Long sections keep ordinary scrolling so every line remains reachable.
      const targets = [...document.querySelectorAll<HTMLElement>('.home-main > section')]
        .map(section => section.getBoundingClientRect().top + current)
        .map(top => Math.max(0, Math.min(maximum, top)));
      const nearest = targets.sort((a, b) => Math.abs(a - current) - Math.abs(b - current))[0];
      if (nearest === undefined) return;
      const distance = Math.abs(nearest - current);
      // Catch a visibly unfinished section alignment, not only a tiny offset.
      // Keep the middle of a long section free for reading.
      if (distance < 3 || distance > Math.min(240, height * .32)) return;
      adjusting = true;
      window.scrollTo({ top: nearest, behavior: reduced.matches ? 'instant' : 'smooth' });
    };
    const rest = () => {
      clearTimeout(restTimer);
      if (!compact.matches || touching) return;
      restTimer = setTimeout(() => {
        if (adjusting) { adjusting = false; return; }
        alignAtRest();
      }, 380);
    };
    const interrupt = () => {
      clearTimeout(restTimer);
      if (adjusting) window.scrollTo({ top: scrollY, behavior: 'instant' });
      adjusting = false;
    };
    const touchStart = () => { touching = true; interrupt(); };
    const touchEnd = () => { touching = false; rest(); };
    const sync = () => { interrupt(); root.classList.toggle('compact-rest-alignment', compact.matches); };
    sync();
    compact.addEventListener('change', sync);
    window.addEventListener('scroll', rest, { passive: true });
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchend', touchEnd, { passive: true });
    window.addEventListener('touchcancel', touchEnd, { passive: true });
    window.addEventListener('wheel', interrupt, { passive: true });
    window.addEventListener('resize', interrupt);
    return () => {
      interrupt();
      root.classList.remove('compact-rest-alignment');
      compact.removeEventListener('change', sync);
      window.removeEventListener('scroll', rest);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchend', touchEnd);
      window.removeEventListener('touchcancel', touchEnd);
      window.removeEventListener('wheel', interrupt);
      window.removeEventListener('resize', interrupt);
    };
  }, []);

  useEffect(() => {
    const desktop = matchMedia("(min-width: 1024px) and (pointer: fine)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let locked = false;
    let lastWheel = 0;
    let accumulated = 0;
    let alignedSection: HTMLElement | undefined;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const cancel = () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      frame = 0;
      locked = false;
      accumulated = 0;
    };

    const release = () => {
      clearTimeout(timer);
      if (frame) return;
      const remaining = 220 - (performance.now() - lastWheel);
      if (remaining > 0) { timer = setTimeout(release, remaining); return; }
      locked = false;
      accumulated = 0;
    };

    const move = (direction: number, explicitDestination?: number) => {
      const start = window.scrollY;
      const sections = [...document.querySelectorAll<HTMLElement>(".home-main > section")];
      const targets = sections.map(section => section.getBoundingClientRect().top + start);
      const maximum = document.documentElement.scrollHeight - innerHeight;
      targets.push(maximum);
      const destination = explicitDestination ?? (direction > 0
        ? targets.find(top => top > start + 2)
        : targets.findLast(top => top < start - 2));
      if (destination === undefined) return;
      alignedSection = sections.find((section, index) => Math.abs(targets[index] - destination) < 2);
      const distance = Math.max(0, Math.min(maximum, destination)) - start;
      locked = true;
      // The user explicitly requests this visible navigation transition.
      // Decorative motion continues to respect the system preference.
      const duration = 850;
      let began: number | undefined;
      const tick = (now: number) => {
        began ??= now;
        const progress = Math.min(1, (now - began) / duration);
        const eased = progress < .5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        // Each frame sets its own position; native smooth scrolling would compete
        // with this controlled duration and easing.
        window.scrollTo({ top: start + distance * eased, behavior: "instant" });
        if (progress < 1) frame = requestAnimationFrame(tick);
        else { frame = 0; release(); }
      };
      frame = requestAnimationFrame(tick);
    };

    const canHandle = (target: EventTarget | null, direction: number) => {
      if (!desktop.matches || document.querySelector('.site-header.menu-open')) return false;
      let element = target instanceof HTMLElement ? target : null;
      if (element?.closest('input, textarea, select, [contenteditable=true], [role=dialog]')) return false;
      // Preserve independently scrollable controls and oversized accessible content.
      const section = element?.closest('section');
      if (section && section.scrollHeight > innerHeight + 2) return false;
      while (element && element !== document.body) {
        const overflow = getComputedStyle(element).overflowY;
        if (/(auto|scroll)/.test(overflow) && element.scrollHeight > element.clientHeight + 1 &&
          (direction < 0 ? element.scrollTop > 0 : element.scrollTop + element.clientHeight < element.scrollHeight - 1)) return false;
        element = element.parentElement;
      }
      return true;
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (locked) {
        event.preventDefault();
        lastWheel = performance.now();
        release();
        return;
      }
      if (!canHandle(event.target, Math.sign(event.deltaY))) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheel > 220) accumulated = 0;
      lastWheel = now;
      if (locked) { release(); return; }
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
      if (Math.sign(delta) !== Math.sign(accumulated)) accumulated = 0;
      accumulated += delta;
      if (Math.abs(accumulated) >= 24) move(Math.sign(accumulated));
    };
    const key = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (event.key === 'Escape' || event.key === 'Home' || event.key === 'End') { cancel(); return; }
      if (target?.closest("a, button, input, textarea, select, [contenteditable=true]") || event.ctrlKey || event.metaKey || event.altKey) return;
      const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key) ? (event.shiftKey ? -1 : 1) : ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
      if (!direction || !canHandle(event.target, direction)) return;
      event.preventDefault();
      if (!locked && !event.repeat) move(direction);
    };
    const anchorClick = (event: MouseEvent) => {
      if (!desktop.matches) return;
      // Compact layouts use native anchors; each section reserves header space.
      // Keep the approved desktop slide transition exactly as before.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target || !target.matches(".home-main > section")) return;
      event.preventDefault();
      cancel();
      history.pushState(null, "", url.hash);
      const destination = target.getBoundingClientRect().top + scrollY;
      move(Math.sign(destination - scrollY), destination);
    };
    const resize = () => {
      cancel();
      clearTimeout(resizeTimer);
      // Viewport-sized slides move in document space when the window changes.
      // Keep the selected slide, rather than retaining an obsolete pixel offset.
      resizeTimer = setTimeout(() => {
        if (!desktop.matches || !alignedSection?.isConnected) return;
        window.scrollTo({ top: alignedSection.getBoundingClientRect().top + window.scrollY, behavior: "instant" });
      }, 120);
    };
    document.addEventListener("click", anchorClick);
    window.addEventListener("wheel", wheel, { passive: false });
    window.addEventListener("keydown", key);
    window.addEventListener("pointerdown", cancel);
    window.addEventListener("resize", resize);
    window.addEventListener("blur", cancel);
    return () => {
      cancel();
      clearTimeout(resizeTimer);
      document.removeEventListener("click", anchorClick);
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("pointerdown", cancel);
      window.removeEventListener("resize", resize);
      window.removeEventListener("blur", cancel);
    };
  }, []);
  return null;
}
