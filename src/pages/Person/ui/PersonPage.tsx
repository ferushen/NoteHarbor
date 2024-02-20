import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { usePersonQuery } from '@/entities/Person';
import { SpeciesLink } from '@/entities/Species';
import { FilmLink } from '@/entities/Film';

import cls from './PersonPage.module.css';

export function PersonPage() {
  const { id } = useParams<{ id: string }>();
  const { data: person, isLoading } = usePersonQuery({ id: id as string });

  if (isLoading) {
    return <div className={cls.container}>{'Выполняем загрузку данных...'}</div>;
  }

  if (!person) {
    return <div className={cls.container}>{'Данные были перехвачены противником!'}</div>;
  }

  const pastes = {
    femaleDetected: 'Была замечена',
    maleDetected: 'Был замечен',
    inFilm: 'в фильме',
    inFilms: 'в фильмах',
    onPlanet: 'на планете',
    onPlanets: 'на планетах',
  };

  const translateInfo = {
    birthYear: 'Год рождения',
    homeWorld: 'Родная планета',
    species: 'Раса',
    gender: 'Пол',
    height: 'Рост',
    mass: 'Масса тела',
    skinColor: 'Цвет кожи',
    eyeColor: 'Цвет глаз',
    hairColor: 'Цвет волос',
  };

  const information = () =>
    Object.entries(person.info).map(([char, value]) => {
      if (typeof value === 'string') {
        return (
          <div
            className={cls.info}
            key={char}>
            <span>{translateInfo[char as keyof typeof translateInfo]}</span>
            <span>{value}</span>
          </div>
        );
      }

      const species =
        Object.entries(value).length === 0
          ? 'Информация отсутствует'
          : Object.entries(value).map(([id, race]) => (
            <SpeciesLink
              id={id}
              key={race}
            />
          ));

      return (
        <div
          className={cls.info}
          key={char}>
          <span>{translateInfo[char as keyof typeof translateInfo]}</span>
          <div className={cn(cls.item, cls.itemGroup)}>{species}</div>
        </div>
      );
    });

  const filmsTitle = `${person.info.gender === 'female'
    ? pastes['femaleDetected']
    : pastes['maleDetected']
    } ${Object.keys(person.films).length === 1 ? pastes['inFilm'] : pastes['inFilms']}`;

  const films = Object.keys(person.films).map((id) => (
    <FilmLink
      id={id}
      key={'film' + id}
    />
  ));

  return (
    <div className={cls.container}>
      <h1 className={cls.title}>{person.name}</h1>
      <h2 className={cls.subTitle}>Известные данные</h2>
      <div className={cls.table}>{information()}</div>
      <h2 className={cls.subTitle}>{filmsTitle}</h2>
      <div className={cls.table}>{films}</div>
    </div>
  );
}
