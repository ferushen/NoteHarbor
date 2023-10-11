import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import cls from './Layout.module.css';

interface Props {
  sidebarSlot?: ReactNode;
  searchSlot?: ReactNode;
  menuSlot?: ReactNode;
}

export function Layout(props: Props) {
  const { menuSlot, sidebarSlot, searchSlot } = props;

  return (
    <>
      <div className={cls.layoutContainer}>
        <header className={cls.headerContainer}>
          <div className={cls.logo}>SW SEARCH</div>
          <div className={cls.controlsContainer}>
            {searchSlot}
            {menuSlot}
          </div>
        </header>

        <div className={cls.content}>
          {sidebarSlot ? sidebarSlot : <div></div>}
          <main>
            <Outlet />
          </main>
          <footer className={cls.footerContainer}>2023</footer>
        </div>
      </div>
    </>
  )
}