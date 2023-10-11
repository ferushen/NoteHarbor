import { Layout } from "@/shared/ui";
import { Search } from "@/features/Search";
import { Menu } from "@/features/Menu/ui/Menu";
import { Sidebar } from "@/widgets/Sidebar";

export const filmsLayout = () => (
  <Layout
    searchSlot={<Search />}
    menuSlot={<Menu />}
    sidebarSlot={<Sidebar />}
  />
);
