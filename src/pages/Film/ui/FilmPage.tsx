import { useParams } from 'react-router-dom';
import { useFilmQuery } from '@/entities/Film/api/filmsApi';
import { PlanetLink } from '@/entities/Planet';
import { PersonLink } from '@/entities/Person';
import { SpeciesLink } from '@/entities/Species';

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
        {'Данные были перехвачены противником!'}
      </>
    );
  }

  const characters = Object.keys(film.characters).map((id) => (
    <PersonLink id={id} key={'person' + id} />
  ));
  const planets = Object.keys(film.planets).map((id) => (
    <PlanetLink id={id} key={'planet' + id} />
  ));
  const species = Object.keys(film.species).map((id) => (
    <SpeciesLink id={id} key={'species' + id} />
  ));

  return (
    <div className={cls.container}>
      <div className={cls.titleContainer}>
        <h1 className={cls.title}>{film.title}</h1>
        <div className={cls.crawl}>{film.openingCrawl}</div>
      </div>
      <div className={cls.table}>
        <h2 className={cls.subTitle}>Связанные с фильмом персонажи</h2>
        <div className={cls.items}>{characters}</div>
      </div>
      <div className={cls.table}>
        <h2 className={cls.subTitle}>Связанные с фильмом планеты</h2>
        <div className={cls.items}>{planets}</div>
      </div>
      <div className={cls.table}>
        <h2 className={cls.subTitle}>Связанные с фильмом расы</h2>
        <div className={cls.items}>{species}</div>
      </div>
    </div>
  );
}