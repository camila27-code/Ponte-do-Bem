import { Sparkles } from "lucide-react";
import { beneficiaries, donors } from "../data";

type PeoplePageType = "beneficiaries" | "donors";

export function PeoplePage({ type }: { type: PeoplePageType }) {
  const isBeneficiary = type === "beneficiaries";
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-[23px] font-semibold tracking-[-0.04em]">
          {isBeneficiary ? "Pessoas beneficiárias" : "Rede de doadores"}
        </h2>
        <p className="mt-1 text-[12px] text-[#858a80]">
          {isBeneficiary
            ? "Acompanhe as famílias e priorize quem mais precisa."
            : "Conheça quem faz parte dessa corrente do bem."}
        </p>
      </div>
      <div className="rounded-2xl border border-[#e9ebe5] bg-white">
        <div className="flex items-center justify-between border-b border-[#eff0ec] px-5 py-4">
          <p className="text-[12px] font-semibold">{isBeneficiary ? "Beneficiários cadastrados" : "Doadores parceiros"}</p>
          <span className="rounded-full bg-[#f3f5f1] px-2.5 py-1 text-[10px] text-[#777d74]">
            {isBeneficiary ? "186 pessoas" : "64 doadores"}
          </span>
        </div>
        <div className="divide-y divide-[#f3f4f1]">
          {isBeneficiary
            ? beneficiaries.map((person) => (
                <div key={person.name} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                  <PersonAvatar name={person.name} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold">{person.name}</p>
                    <p className="mt-1 text-[10px] text-[#92968e]">{person.family} · {person.area}</p>
                  </div>
                  <span className={`w-fit rounded-full px-2.5 py-1 text-[9px] font-semibold ${
                    person.priority === "Alta prioridade"
                      ? "bg-[#fcf0e6] text-[#b97743]"
                      : "bg-[#f1f2ef] text-[#787e75]"
                  }`}>
                    {person.priority}
                  </span>
                </div>
              ))
            : donors.map((person) => (
                <div key={person.name} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                  <PersonAvatar name={person.name} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold">{person.name}</p>
                    <p className="mt-1 text-[10px] text-[#92968e]">{person.type} · {person.since}</p>
                  </div>
                  <span className="text-[10px] font-medium text-[#57805b]">{person.contributions}</span>
                </div>
              ))}
        </div>
      </div>
      {isBeneficiary && (
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-[#eee8d8] bg-[#fbf8ef] p-4 text-[10px] leading-relaxed text-[#8d7955]">
          <Sparkles size={14} className="mt-0.5 shrink-0" />
          A prioridade é calculada conforme as regras do projeto: renda familiar de até R$ 1.500,00 ou famílias com 5 ou mais integrantes.
        </p>
      )}
    </section>
  );
}

function PersonAvatar({ name }: { name: string }) {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#edf3e9] text-[11px] font-semibold text-[#57805b]">
      {name.split(" ").slice(0, 2).map((part) => part[0]).join("")}
    </div>
  );
}
