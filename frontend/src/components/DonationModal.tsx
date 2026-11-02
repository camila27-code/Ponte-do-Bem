import { type FormEvent } from "react";
import { Plus, X } from "lucide-react";

interface DonationModalProps {
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function DonationModal({ onClose, onSubmit }: DonationModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#172018]/40 p-4 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-[440px] rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#6b936d]">Nova contribuição</p>
            <h2 id="modal-title" className="mt-1 text-[20px] font-semibold tracking-[-0.04em]">Cadastrar doação</h2>
            <p className="mt-1 text-[11px] text-[#858a80]">Registre os detalhes do item recebido.</p>
          </div>
          <button aria-label="Fechar" onClick={onClose} className="rounded-lg p-1.5 text-[#858a80] hover:bg-[#f4f5f2]">
            <X size={18} />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-[11px] font-medium text-[#52584f]">
            Nome do item
            <input
              name="name"
              required
              autoFocus
              placeholder="Ex.: Cesta básica"
              className="mt-1.5 h-10 w-full rounded-xl border border-[#e5e8e1] px-3 text-[12px] font-normal outline-none focus:border-[#91b394]"
            />
          </label>
          <label className="block text-[11px] font-medium text-[#52584f]">
            Categoria
            <select name="category" className="mt-1.5 h-10 w-full rounded-xl border border-[#e5e8e1] bg-white px-3 text-[12px] font-normal outline-none focus:border-[#91b394]">
              <option>Alimentos</option>
              <option>Roupas</option>
              <option>Higiene</option>
            </select>
          </label>
          <label className="block text-[11px] font-medium text-[#52584f]">
            Nome do doador
            <input
              name="donor"
              required
              placeholder="Ex.: Maria da Silva"
              className="mt-1.5 h-10 w-full rounded-xl border border-[#e5e8e1] px-3 text-[12px] font-normal outline-none focus:border-[#91b394]"
            />
          </label>
          <div className="flex justify-end gap-2 border-t border-[#f0f1ed] pt-4">
            <button type="button" onClick={onClose} className="rounded-xl border border-[#e5e8e1] px-4 py-2.5 text-[11px] font-semibold text-[#6f766b] hover:bg-[#f8f9f6]">
              Cancelar
            </button>
            <button type="submit" className="flex items-center gap-2 rounded-xl bg-[#397248] px-4 py-2.5 text-[11px] font-semibold text-white hover:bg-[#2f623e]">
              <Plus size={14} /> Cadastrar doação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
