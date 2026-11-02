import type { ReactNode } from "react";
import {
  Bell,
  CircleHelp,
  Check,
  HeartHandshake,
  LogOut,
  Menu,
  Plus,
  Settings,
  Sparkles,
} from "lucide-react";
import { navigation } from "../data";
import type { Page } from "../types";

interface AppShellProps {
  page: Page;
  availableDonationCount: number;
  isMobileMenuOpen: boolean;
  notice: string;
  onNavigate: (page: Page) => void;
  onMobileMenuChange: (isOpen: boolean) => void;
  onAddDonation: () => void;
  children: ReactNode;
}

export function AppShell({
  page,
  availableDonationCount,
  isMobileMenuOpen,
  notice,
  onNavigate,
  onMobileMenuChange,
  onAddDonation,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#20251f]">
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex w-[260px] flex-col border-r border-[#e9ebe5] bg-white px-5 py-6 transition-transform lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("Visão geral");
          }}
          className="mb-10 flex items-center gap-3 px-1"
          aria-label="Ponte do Bem - início"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-[#e8f2e7] text-[#397248]">
            <HeartHandshake size={24} strokeWidth={2.2} />
          </span>
          <span>
            <span className="block text-[17px] font-bold tracking-[-0.04em]">ponte do bem</span>
            <span className="block text-[11px] font-medium tracking-wide text-[#858a80]">REDE SOLIDÁRIA</span>
          </span>
        </a>

        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a2a69e]">
          Menu principal
        </p>
        <nav className="space-y-1">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => onNavigate(label)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-medium transition ${
                page === label
                  ? "bg-[#edf4eb] text-[#397248]"
                  : "text-[#777d74] hover:bg-[#f7f8f5] hover:text-[#30372f]"
              }`}
            >
              <Icon size={18} strokeWidth={1.8} />
              {label}
              {label === "Doações" && (
                <span className="ml-auto rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-[#747b70]">
                  {availableDonationCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-9 rounded-2xl bg-[#f7f8f5] p-4">
          <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-[#e7efe4] text-[#4c8056]">
            <Sparkles size={17} />
          </div>
          <p className="text-[13px] font-semibold">Pequenos gestos,</p>
          <p className="text-[13px] font-semibold">grandes mudanças.</p>
          <p className="mt-2 text-[11px] leading-relaxed text-[#858a80]">
            Cada doação é uma nova oportunidade de transformar vidas.
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e5e9e1]">
            <div className="h-full w-[72%] rounded-full bg-[#78a77d]" />
          </div>
          <p className="mt-2 text-[10px] text-[#858a80]">Meta mensal: 72% alcançada</p>
        </div>

        <div className="mt-auto border-t border-[#eff0ec] pt-5">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] font-medium text-[#777d74] hover:bg-[#f7f8f5]">
            <CircleHelp size={17} /> Central de ajuda
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[12px] font-medium text-[#777d74] hover:bg-[#f7f8f5]">
            <Settings size={17} /> Configurações
          </button>
          <div className="mt-4 flex items-center gap-3 border-t border-[#eff0ec] px-2 pt-4">
            <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e7d9c9] text-xs font-bold text-[#705943]">
              CM
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold">Camila Lima</p>
              <p className="text-[10px] text-[#92968e]">Administradora</p>
            </div>
            <button aria-label="Sair" className="text-[#92968e] hover:text-[#40463e]">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-20 bg-black/20 lg:hidden"
          onClick={() => onMobileMenuChange(false)}
        />
      )}

      <main className="min-h-screen lg:ml-[260px]">
        <header className="sticky top-0 z-10 flex h-[76px] items-center justify-between border-b border-[#e9ebe5] bg-[#f7f8f5]/95 px-5 backdrop-blur md:px-9">
          <div className="flex items-center gap-3">
            <button
              aria-label="Abrir menu"
              onClick={() => onMobileMenuChange(true)}
              className="rounded-lg p-2 text-[#6d7569] hover:bg-white lg:hidden"
            >
              <Menu size={20} />
            </button>
            <div>
              <p className="text-[11px] text-[#92968e]">Ponte do Bem / {page}</p>
              <h1 className="mt-0.5 text-[17px] font-semibold tracking-[-0.03em]">{page}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden text-[11px] text-[#92968e] sm:block">Quarta-feira, 22 de outubro</span>
            <button
              aria-label="Notificações"
              className="relative grid size-9 place-items-center rounded-xl border border-[#e9ebe5] bg-white text-[#777d74] hover:text-[#397248]"
            >
              <Bell size={17} />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#e98c62]" />
            </button>
            <button
              onClick={onAddDonation}
              className="hidden items-center gap-2 rounded-xl bg-[#397248] px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#2f623e] sm:flex"
            >
              <Plus size={16} /> Nova doação
            </button>
            <button
              onClick={onAddDonation}
              aria-label="Nova doação"
              className="grid size-9 place-items-center rounded-xl bg-[#397248] text-white sm:hidden"
            >
              <Plus size={18} />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] px-5 py-7 md:px-9 md:py-9">
          {notice && (
            <div role="status" className="mb-5 flex items-center gap-2 rounded-xl border border-[#d6e8d3] bg-[#eff7ed] px-4 py-3 text-sm text-[#397248]">
              <Check size={17} /> {notice}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
