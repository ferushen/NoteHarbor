import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import { useMobile } from '@/shared/lib/hooks/useMobile';

import cls from './Layout.module.css';

interface Props {
  headerLeftSlot?: ReactNode;
  headerCenterSlot?: ReactNode;
  headerRightSlot?: ReactNode;
  headerBottomSlot?: ReactNode;
  contentLeftSlot?: ReactNode;
}

export function Layout(props: Props) {
  const {
    headerLeftSlot,
    headerCenterSlot,
    headerRightSlot,
    headerBottomSlot,
    contentLeftSlot
  } = props;

  const isMobile = useMobile();

  return (
    <>
      <div className={cn(cls.layout, isMobile ? cls.layoutMobile : cls.layoutDesktop)}>
        <header className={cls.header}>
          <div className={cls.headerTop}>
            {headerLeftSlot}
            {headerCenterSlot}
            {headerRightSlot}
          </div>
          <div className={cls.headerBottom}>
            {headerBottomSlot}
          </div>
        </header>

        <div className={isMobile ? cls.contentMobile : cls.contentDesktop}>
          <aside className={isMobile ? '' : cls.sidebar}>{contentLeftSlot}</aside>
          <main className={cls.main}>
            <Outlet />
          </main>
        </div>

        <footer className={cls.footer}>© {new Date().getFullYear()} Ferushen</footer>
      </div>
    </>
  )
}