export type Category = "Alimentos" | "Roupas" | "Higiene";
export type CategoryFilter = Category | "Todas as categorias";
export type DonationStatus = "Disponível" | "Reservada" | "Entregue";
export type Page = "Início" | "Visão geral" | "Doações" | "Beneficiários" | "Doadores";

export interface Donation {
  id: number;
  name: string;
  category: Category;
  donor: string;
  date: string;
  status: DonationStatus;
  urgent?: boolean;
}
