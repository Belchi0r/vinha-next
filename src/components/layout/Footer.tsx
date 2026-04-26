import Link from "next/link";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { navItems, siteConfig } from "@/src/lib/site";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:px-8 lg:py-16">
        <div>
          <LogoMark light />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            Formacao esportiva com valores cristaos, metodologia profissional e ambiente
            seguro para criancas e adolescentes no DF.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gold-200">
            Navegacao
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/62 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gold-200">
            Contato
          </h2>
          <div className="mt-5 space-y-3 text-sm text-white/68">
            <p>WhatsApp: {siteConfig.whatsapp}</p>
            <p>Instagram: {siteConfig.instagram}</p>
            <p>Planos: consulte pelo WhatsApp</p>
          </div>
          <ButtonLink href={siteConfig.whatsappUrl} variant="light" className="mt-6 w-full sm:w-auto">
            Consultar planos
          </ButtonLink>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6">
        <p className="mx-auto max-w-7xl text-xs font-semibold text-white/42">
          (c) {new Date().getFullYear()} Escola de Futebol Vinha do Senhor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
