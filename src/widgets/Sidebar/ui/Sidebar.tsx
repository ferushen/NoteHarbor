import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useMobile } from '@/shared/lib/hooks/useMobile';

import BurgerIcon from '@/shared/assets/icons/btn-burger.svg';
import cls from './Sidebar.module.css';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  const linkStyles = ({ isActive }: Record<string, boolean>) =>
    isActive ? cn(cls.link, cls.active) : cls.link;

  const navigation = (className: CSSModuleClasses[string]) => (
    <nav className={className}>
      <NavLink to='/films' className={linkStyles}>Фильмы</NavLink>
      <NavLink to='/persons' className={linkStyles}>Персонажи</NavLink>
      <NavLink to='/planets' className={linkStyles}>Планеты</NavLink>
      <NavLink to='/species' className={linkStyles}>Расы</NavLink>
    </nav>
  );

  if (isMobile) {
    return (
      <div className={cls.btnContainer}>
        <button className={cls.btn} onClick={() => setIsOpen(prev => !prev)}><BurgerIcon /></button>
        {isOpen && navigation(cls.navigationMobile)}
      </div>
    );
  }

  return navigation(cls.navigation);
}
