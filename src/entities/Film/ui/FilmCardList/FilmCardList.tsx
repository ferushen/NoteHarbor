import { type Film } from '../../model/types';
import { FilmCard } from '../FilmCard/FilmCard';

import cls from './FilmCardList.module.css';

interface FilmCardListProps {
  films: Film[];
}

export function FilmCardList(props: FilmCardListProps) {
  const { films } = props;

  return (
    <div className={cls.container}>
      {films && films.map(film => <FilmCard key={film.episodeId} film={film} />)}
    </div>
  );
}