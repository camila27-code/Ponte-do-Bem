import type { Donation, Page } from "./types";
import {
  HeartHandshake,
  House,
  LayoutDashboard,
  Package,
  Users,
} from "lucide-react";

export const initialDonations: Donation[] = [
  { id: 1, name: "Cesta básica completa", category: "Alimentos", donor: "Mariana Costa", date: "Hoje, 09:42", status: "Disponível", urgent: true },
  { id: 2, name: "Cobertores de casal", category: "Roupas", donor: "Instituto Acolher", date: "Hoje, 08:15", status: "Reservada" },
  { id: 3, name: "Kit de higiene pessoal", category: "Higiene", donor: "Farmácia São João", date: "Ontem, 16:30", status: "Disponível" },
  { id: 4, name: "Leite em pó (latas)", category: "Alimentos", donor: "Roberto Almeida", date: "Ontem, 14:12", status: "Entregue" },
  { id: 5, name: "Roupas infantis (0–5 anos)", category: "Roupas", donor: "Ana Luiza Martins", date: "18 out, 11:05", status: "Disponível" },
];

export const beneficiaries = [
  { name: "Maria Oliveira", family: "6 pessoas", area: "Vila Esperança", priority: "Alta prioridade" },
  { name: "João Pedro Santos", family: "4 pessoas", area: "Jardim das Flores", priority: "Acompanhamento" },
  { name: "Ana Paula Ferreira", family: "5 pessoas", area: "Parque das Águas", priority: "Alta prioridade" },
  { name: "Carlos Eduardo Lima", family: "3 pessoas", area: "Centro", priority: "Acompanhamento" },
];

export const donors = [
  { name: "Mariana Costa", type: "Pessoa física", contributions: "12 doações", since: "Desde ago. 2025" },
  { name: "Instituto Acolher", type: "Organização", contributions: "28 doações", since: "Desde jun. 2025" },
  { name: "Farmácia São João", type: "Empresa parceira", contributions: "19 doações", since: "Desde jul. 2025" },
  { name: "Roberto Almeida", type: "Pessoa física", contributions: "7 doações", since: "Desde set. 2025" },
];

export const navigation: { label: Page; icon: typeof LayoutDashboard }[] = [
  { label: "Início", icon: House },
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Doações", icon: Package },
  { label: "Beneficiários", icon: Users },
  { label: "Doadores", icon: HeartHandshake },
];
