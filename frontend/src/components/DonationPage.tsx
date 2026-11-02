import { Search } from "lucide-react";
import { DonationTable } from "./DonationTable";
import type { CategoryFilter, Donation } from "../types";

interface DonationPageProps {
  donations: Donation[];
  search: string;
  onSearch: (value: string) => void;
  categoryFilter: CategoryFilter;
  onCategoryFilter: (value: CategoryFilter) => void;
}

export function DonationPage({
  donations,
  search,
  onSearch,
  categoryFilter,
  onCategoryFilter,
}: DonationPageProps) {
  return (
    <section>
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-[23px] font-semibold tracking-[-0.04em]">Todas as doações</h2>
          <p className="mt-1 text-[12px] text-[#858a80]">Gerencie os itens recebidos e acompanhe cada etapa.</p>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#777d74]">
          <span className="size-2 rounded-full bg-[#76a779]" />
          {donations.filter((item) => item.status === "Disponível").length} disponíveis
        </div>
      </div>
      <div className="rounded-2xl border border-[#e9ebe5] bg-white">
        <div className="flex flex-col gap-3 border-b border-[#eff0ec] p-4 sm:flex-row sm:items-center">
          <label className="relative flex-1 sm:max-w-[340px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a49c]" />
            <input
              value={search}
              onChange={(event) => onSearch(event.target.value)}
              placeholder="Buscar doação ou doador..."
              className="h-10 w-full rounded-xl border border-[#e9ebe5] bg-[#fcfcfb] pl-9 pr-3 text-[12px] outline-none transition placeholder:text-[#a0a49c] focus:border-[#9dbb9e]"
            />
          </label>
          <select
            value={categoryFilter}
            onChange={(event) => onCategoryFilter(event.target.value as CategoryFilter)}
            className="h-10 rounded-xl border border-[#e9ebe5] bg-white px-3 text-[11px] text-[#6f766b] outline-none focus:border-[#9dbb9e]"
          >
            <option>Todas as categorias</option>
            <option>Alimentos</option>
            <option>Roupas</option>
            <option>Higiene</option>
          </select>
        </div>
        {donations.length > 0 ? (
          <DonationTable donations={donations} />
        ) : (
          <div className="px-5 py-14 text-center">
            <Search size={22} className="mx-auto text-[#a0a49c]" />
            <p className="mt-3 text-[13px] font-medium">Nenhuma doação encontrada</p>
            <p className="mt-1 text-[11px] text-[#92968e]">Tente mudar os termos da busca ou o filtro.</p>
          </div>
        )}
      </div>
    </section>
  );
}
