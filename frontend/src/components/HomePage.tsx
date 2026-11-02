import { ArrowRight, Heart, HeartHandshake, PackageCheck, UsersRound } from "lucide-react";
import type { Page } from "../types";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const highlights = [
  {
    icon: HeartHandshake,
    title: "Conecte pessoas",
    description: "Aproxime quem quer ajudar de quem precisa de apoio.",
  },
  {
    icon: PackageCheck,
    title: "Organize doações",
    description: "Acompanhe itens e veja o andamento de cada contribuição.",
  },
  {
    icon: UsersRound,
    title: "Priorize o cuidado",
    description: "Ajude a direcionar recursos para famílias prioritárias.",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[28px] bg-[#e9f2e7] px-6 py-10 md:px-12 md:py-14">
        <div className="pointer-events-none absolute -right-12 -top-20 size-72 rounded-full border-[36px] border-white/35" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-[11px] font-semibold text-[#397248]">
            <Heart size={14} fill="currentColor" />
            Rede solidária
          </span>
          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.05em] text-[#263b2a] md:text-5xl">
            Um gesto de cada vez, uma comunidade mais forte.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#627463] md:text-base">
            O Ponte do Bem aproxima doadores e beneficiários para que cada contribuição chegue a
            quem mais precisa, com cuidado e transparência.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("Visão geral")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#397248] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2f623e]"
            >
              Acessar painel <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate("Doações")}
              className="rounded-xl border border-[#cbdcc8] bg-white/70 px-5 py-3 text-sm font-semibold text-[#397248] transition hover:bg-white"
            >
              Ver doações
            </button>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-it-helps" className="space-y-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7e947d]">
            Solidariedade em movimento
          </p>
          <h2 id="how-it-helps" className="mt-1 text-xl font-bold tracking-[-0.04em]">
            Como podemos ajudar
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-[#edf4eb] text-[#397248]">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-sm font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#858a80]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#e9ebe5] bg-white p-5 md:flex-row md:items-center md:px-7">
        <div>
          <h2 className="text-base font-bold">Toda ajuda pode fazer a diferença.</h2>
          <p className="mt-1 text-sm text-[#858a80]">
            Confira as contribuições cadastradas na rede solidária.
          </p>
        </div>
        <button
          onClick={() => onNavigate("Doações")}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#397248] transition hover:bg-[#edf4eb]"
        >
          Explorar doações <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
