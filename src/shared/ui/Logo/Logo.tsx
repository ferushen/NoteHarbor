import { Link } from "react-router-dom";
import cls from './Logo.module.css';

interface Props {
  href: string;
}

export function Logo({ href }: Props) {
  return <Link to={href} className={cls.logo}>SW SEARCH</Link>;
}