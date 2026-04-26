"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { navItems, siteConfig } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 14);
    };
    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setIsOpen(false);

    if (href === pathname) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <motion.div
        initial={shouldReduceMotion ? false : { y: -14, opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto max-w-7xl rounded-[1.35rem] border px-4 py-3 backdrop-blur-md transition-all duration-300",
          isScrolled
            ? "border-white/80 bg-white/95 shadow-[0_12px_34px_rgba(15,15,15,0.10)]"
            : "border-white/60 bg-white/88 shadow-[0_8px_26px_rgba(15,15,15,0.06)]",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <LogoMark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className="rounded-full px-4 py-2 text-sm font-bold text-zinc-700 transition-colors duration-300 hover:bg-burgundy-50 hover:text-burgundy-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-zinc-500 transition-colors duration-300 hover:text-burgundy-800"
            >
              {siteConfig.instagram}
            </a>
            <ButtonLink href="/matricula" className="min-h-11 px-5">
              Agendar aula experimental
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-sm transition-colors duration-300 hover:border-burgundy-200 hover:bg-burgundy-50 lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 rounded-full bg-current transition-transform duration-300",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 rounded-full bg-current transition-opacity duration-300",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 rounded-full bg-current transition-transform duration-300",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 lg:hidden",
            isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0">
            <nav className="flex flex-col gap-2 border-t border-zinc-100 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className="rounded-2xl px-4 py-3 text-base font-black text-zinc-800 transition-colors duration-300 hover:bg-burgundy-50 hover:text-burgundy-800"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/matricula" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Quero matricular meu filho
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsappUrl}
                variant="secondary"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Falar no WhatsApp
              </ButtonLink>
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
