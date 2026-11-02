import { useMemo, useState, type FormEvent } from "react";
import { AppShell } from "./components/AppShell";
import { Dashboard } from "./components/Dashboard";
import { DonationModal } from "./components/DonationModal";
import { DonationPage } from "./components/DonationPage";
import { HomePage } from "./components/HomePage";
import { PeoplePage } from "./components/PeoplePage";
import { initialDonations } from "./data";
import type { Category, CategoryFilter, Donation, Page } from "./types";

function App() {
  const [page, setPage] = useState<Page>("Início");
  const [donations, setDonations] = useState(initialDonations);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Todas as categorias");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredDonations = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("pt-BR");
    return donations.filter((donation) => {
      const matchesSearch = `${donation.name} ${donation.donor} ${donation.category}`
        .toLocaleLowerCase("pt-BR")
        .includes(query);
      const matchesCategory =
        categoryFilter === "Todas as categorias" || donation.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [categoryFilter, donations, search]);

  function addDonation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const donor = String(formData.get("donor")).trim();
    const category = String(formData.get("category")) as Category;

    if (!name || !donor) return;

    const newDonation: Donation = {
      id: Date.now(),
      name,
      category,
      donor,
      date: "Agora mesmo",
      status: "Disponível",
    };
    setDonations((current) => [newDonation, ...current]);
    setIsModalOpen(false);
    setPage("Doações");
    setSearch("");
    setCategoryFilter("Todas as categorias");
    setNotice("Doação cadastrada com sucesso!");
    window.setTimeout(() => setNotice(""), 3500);
  }

  function navigate(nextPage: Page) {
    setPage(nextPage);
    setIsMobileMenuOpen(false);
    setSearch("");
  }

  return (
    <AppShell
      page={page}
      availableDonationCount={donations.filter((item) => item.status === "Disponível").length}
      isMobileMenuOpen={isMobileMenuOpen}
      notice={notice}
      onNavigate={navigate}
      onMobileMenuChange={setIsMobileMenuOpen}
      onAddDonation={() => setIsModalOpen(true)}
    >
      {page === "Início" && <HomePage onNavigate={navigate} />}
      {page === "Visão geral" && (
        <Dashboard
          donations={donations}
          onNavigate={navigate}
          onAdd={() => setIsModalOpen(true)}
        />
      )}
      {page === "Doações" && (
        <DonationPage
          donations={filteredDonations}
          search={search}
          onSearch={setSearch}
          categoryFilter={categoryFilter}
          onCategoryFilter={setCategoryFilter}
        />
      )}
      {page === "Beneficiários" && <PeoplePage type="beneficiaries" />}
      {page === "Doadores" && <PeoplePage type="donors" />}
      {isModalOpen && (
        <DonationModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={addDonation}
        />
      )}
    </AppShell>
  );
}

export default App;
