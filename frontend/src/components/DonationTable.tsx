import { Boxes, Shirt, Utensils } from "lucide-react";
import type { Category, Donation, DonationStatus } from "../types";

export function DonationTable({ donations }: { donations: Donation[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left">
        <thead>
          <tr className="border-b border-[#f0f1ed] text-[9px] font-semibold uppercase tracking-[0.11em] text-[#a0a49c]">
            <th className="px-6 py-3.5">Doação</th>
            <th className="px-4 py-3.5">Categoria</th>
            <th className="px-4 py-3.5">Doador</th>
            <th className="px-4 py-3.5">Recebida em</th>
            <th className="px-6 py-3.5">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f3f4f1]">
          {donations.map((donation) => (
            <tr key={donation.id} className="transition hover:bg-[#fcfcfb]">
              <td className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${categoryColor(donation.category)}`}>
                    {categoryIcon(donation.category)}
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold text-[#41473f]">{donation.name}</span>
                    {donation.urgent && <span className="mt-0.5 block text-[9px] font-medium text-[#c77a4b]">Prioridade de saída</span>}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3.5 text-[10px] text-[#777d74]">{donation.category}</td>
              <td className="px-4 py-3.5 text-[10px] text-[#777d74]">{donation.donor}</td>
              <td className="px-4 py-3.5 text-[10px] text-[#92968e]">{donation.date}</td>
              <td className="px-6 py-3.5"><StatusBadge status={donation.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function categoryColor(category: Category) {
  if (category === "Alimentos") return "bg-[#f9f0e3] text-[#b47d42]";
  if (category === "Roupas") return "bg-[#edf0f8] text-[#7582a4]";
  return "bg-[#eaf3ec] text-[#62816a]";
}

function categoryIcon(category: Category) {
  if (category === "Alimentos") return <Utensils size={15} />;
  if (category === "Roupas") return <Shirt size={15} />;
  return <Boxes size={15} />;
}

function StatusBadge({ status }: { status: DonationStatus }) {
  const styles = {
    Disponível: "bg-[#edf5eb] text-[#57805b]",
    Reservada: "bg-[#f8f1e7] text-[#a77b43]",
    Entregue: "bg-[#eef0f4] text-[#737d8c]",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold ${styles[status]}`}>
      <span className="size-1.5 rounded-full bg-current" /> {status}
    </span>
  );
}
