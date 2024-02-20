import { Layout } from "@/shared/ui";
import { Search } from "@/features/Search";
import { Menu } from "@/features/Menu/ui/Menu";
import { Sidebar } from "@/widgets/Sidebar";
import { Logo } from "@/shared/ui/Logo/Logo";
import { useMobile } from "@/shared/lib/hooks/useMobile";

export function BaseLayout() {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Layout
        headerLeftSlot={<Sidebar />}
        headerCenterSlot={null}
        headerRightSlot={<Logo href='/films' />}
        headerBottomSlot={<Search />}
        contentLeftSlot={null}
      />
    );
  }

  return (
    <Layout
      headerLeftSlot={<Logo href='/films' />}
      headerCenterSlot={<Search />}
      headerRightSlot={<Menu />}
      headerBottomSlot={null}
      contentLeftSlot={<Sidebar />}
    />
  );
}
