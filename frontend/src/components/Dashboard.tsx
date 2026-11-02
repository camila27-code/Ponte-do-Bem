import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Heart,
  Package,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";
import { DonationTable } from "./DonationTable";
import type { Donation, Page } from "../types";

interface DashboardProps {
  donations: Donation[];
  onNavigate: (page: Page) => void;
  onAdd: () => void;
}

export function Dashboard({ donations, onNavigate, onAdd }: DashboardProps) {
  return (
    <>
      <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-[12px] font-medium text-[#67896a]">
            <Sparkles size={14} /> Juntos, fazemos a diferença
          </p>
          <h2 className="text-[26px] font-semibold tracking-[-0.05em] md:text-[32px]">
            Bom dia, Camila <span aria-hidden="true">☀️</span>
          </h2>
          <p className="mt-1 text-[13px] text-[#858a80]">
            Veja o impacto que a nossa comunidade está criando.
          </p>
        </div>
        <button
          onClick={onAdd}
          className="flex w-fit items-center gap-2 rounded-xl border border-[#dfe5dc] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#397248] transition hover:border-[#9bb99c] hover:bg-[#f8fbf7]"
        >
          <Plus size={16} /> Cadastrar doação
        </button>
      </section>

      <section aria-label="Resumo das doações" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Doações recebidas" value="248" delta="+12,8%" detail="em relação ao mês passado" icon={<Package size={18} />} trend="up" tint="green" />
        <StatCard label="Pessoas beneficiadas" value="186" delta="+8,2%" detail="em relação ao mês passado" icon={<Users size={18} />} trend="up" tint="blue" />
        <StatCard
          label="Aguardando destino"
          value={String(donations.filter((item) => item.status === "Disponível").length + 31)}
          delta="12 urgentes"
          detail="precisam de atenção"
          icon={<Clock3 size={18} />}
          trend="attention"
          tint="orange"
        />
        <StatCard label="Doadores ativos" value="64" delta="+5 novos" detail="neste mês" icon={<Heart size={18} />} trend="up" tint="purple" />
      </section>

      <section className="mt-7 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
        <div className="rounded-2xl border border-[#e9ebe5] bg-white p-5 md:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.02em]">Visão das doações</h3>
              <p className="mt-1 text-[11px] text-[#92968e]">Doações recebidas nos últimos 7 dias</p>
            </div>
            <button className="flex items-center gap-1 rounded-lg border border-[#eceee9] px-3 py-2 text-[10px] font-medium text-[#777d74]">
              Esta semana <ChevronDown size={13} />
            </button>
          </div>
          <div className="flex h-[198px] gap-3">
            <div className="flex flex-col justify-between pb-6 text-[9px] text-[#a3a79f]">
              <span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
            </div>
            <div className="relative flex flex-1 items-end justify-around pb-6">
              <div className="pointer-events-none absolute inset-x-0 bottom-[31px] top-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((line) => <div key={line} className="border-t border-dashed border-[#edf0eb]" />)}
              </div>
              {[
                { day: "Qui", value: 44, height: "55%" },
                { day: "Sex", value: 65, height: "72%" },
                { day: "Sáb", value: 48, height: "60%" },
                { day: "Dom", value: 81, height: "88%" },
                { day: "Seg", value: 57, height: "66%" },
                { day: "Ter", value: 93, height: "100%" },
                { day: "Qua", value: 70, height: "79%" },
              ].map((bar) => (
                <div key={bar.day} className="group relative z-[1] flex h-full w-[9%] flex-col items-center justify-end">
                  <span className="mb-1 hidden rounded bg-[#30372f] px-1.5 py-1 text-[9px] text-white group-hover:block">
                    {bar.value} doações
                  </span>
                  <div
                    className={`w-full max-w-[34px] rounded-t-md transition-colors ${
                      bar.day === "Ter" ? "bg-[#6d9d72]" : "bg-[#e4eee2] group-hover:bg-[#bed4bc]"
                    }`}
                    style={{ height: bar.height }}
                  />
                  <span className="absolute -bottom-5 text-[9px] text-[#92968e]">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-[#f0f1ed] pt-4 text-[10px] text-[#858a80]">
            <span className="size-2 rounded-full bg-[#6d9d72]" /> Doações recebidas
            <span className="ml-auto font-medium text-[#397248]">+18,4% <ArrowUpRight size={12} className="inline" /></span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#396c45] p-6 text-white">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium">Campanha do mês</span>
            <Heart size={18} className="text-[#d7e8d1]" />
          </div>
          <h3 className="mt-5 max-w-[240px] text-[22px] font-semibold leading-tight tracking-[-0.04em]">
            Inverno com mais carinho
          </h3>
          <p className="mt-2 max-w-[270px] text-[11px] leading-relaxed text-white/75">
            Ajude famílias a se aquecerem. Estamos reunindo cobertores e roupas de frio.
          </p>
          <div className="mt-6 flex items-end justify-between">
            <p className="text-[11px] text-white/75"><strong className="text-[20px] text-white">72%</strong> da meta</p>
            <p className="text-[10px] text-white/75">144 de 200 itens</p>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[72%] rounded-full bg-[#d2e5bd]" />
          </div>
          <button
            onClick={() => onNavigate("Doações")}
            className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-white hover:text-[#d2e5bd]"
          >
            Ver campanha <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <section className="mt-7 rounded-2xl border border-[#e9ebe5] bg-white">
        <div className="flex items-center justify-between border-b border-[#eff0ec] px-5 py-4 md:px-6">
          <div>
            <h3 className="text-[14px] font-semibold">Doações recentes</h3>
            <p className="mt-1 text-[10px] text-[#92968e]">Acompanhe as últimas contribuições da comunidade</p>
          </div>
          <button
            onClick={() => onNavigate("Doações")}
            className="flex items-center gap-1 text-[11px] font-semibold text-[#52835a] hover:text-[#315d3b]"
          >
            Ver todas <ArrowRight size={14} />
          </button>
        </div>
        <DonationTable donations={donations.slice(0, 4)} />
      </section>
    </>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  detail: string;
  icon: ReactNode;
  trend: "up" | "attention";
  tint: "green" | "blue" | "orange" | "purple";
}

function StatCard({ label, value, delta, detail, icon, trend, tint }: StatCardProps) {
  const tintStyles = {
    green: "bg-[#eaf3e9] text-[#56815c]",
    blue: "bg-[#e9f1f5] text-[#5b8197]",
    orange: "bg-[#fbf0e5] text-[#c0824e]",
    purple: "bg-[#f0ecf7] text-[#8772a3]",
  };
  return (
    <article className="rounded-2xl border border-[#e9ebe5] bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-[#777d74]">{label}</p>
        <span className={`grid size-9 place-items-center rounded-xl ${tintStyles[tint]}`}>{icon}</span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <p className="text-[27px] font-semibold tracking-[-0.06em]">{value}</p>
        <span className={`text-[10px] font-semibold ${trend === "attention" ? "text-[#c0824e]" : "text-[#56815c]"}`}>
          {trend === "attention" ? <ArrowDownRight size={12} className="mr-0.5 inline" /> : <ArrowUpRight size={12} className="mr-0.5 inline" />}
          {delta}
        </span>
      </div>
      <p className="mt-0.5 text-[10px] text-[#a0a49c]">{detail}</p>
    </article>
  );
}
