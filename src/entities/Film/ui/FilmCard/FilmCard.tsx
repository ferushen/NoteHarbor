import { Link } from 'react-router-dom';
import { Film } from '../../model/types';

import cls from './FilmCard.module.css';

export interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
  const { title, episodeId, id } = film;

  return (
    <Link to={'films/' + id} className={cls.card}>
      <div className={cls.poster}>{episodeId}</div>
      <div className={cls.title}>{title}</div>
    </Link>
  );
}