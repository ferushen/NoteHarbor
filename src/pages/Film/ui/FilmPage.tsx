import { useParams } from 'react-router-dom';
import { useFilmQuery } from '@/entities/Film/api/filmsApi';

import cls from './FilmPage.module.css';

export function FilmPage() {

  const { id } = useParams<{ id: string }>();
  const { data: film, isLoading } = useFilmQuery({ id: id as string });

  if (isLoading) {
    return (
      <>
        {'Выполняем загрузку данных...'}
      </>
    );
  }

  if (!film) {
    return (
      <>
        {'Данные были перехвачены противником'}
      </>
    );
  }

  return (
    <>
      <h1>{film.title}</h1>
      <div>{film.openingCrawl}</div>
      <h2>Связанные с фильмом персонажи</h2>
      <div className={cls.table}></div>
      <h2>Связанные с фильмом планеты</h2>
      <div className={cls.table}></div>
      <h2>Связанные с фильмом расы</h2>
      <div className={cls.table}></div>
    </>
  );
}