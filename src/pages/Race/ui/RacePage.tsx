import { useParams } from 'react-router-dom';
import { useRaceQuery } from '@/entities/Species';
import { FilmLink } from '@/entities/Film';
import { PersonLink } from '@/entities/Person';

import cls from './RacePage.module.css';

export function RacePage() {
  const { id } = useParams<{ id: string }>();
  const { data: race, isLoading } = useRaceQuery({ id: id as string });

  if (isLoading) {
    return <div className={cls.container}>{'Выполняем загрузку данных...'}</div>;
  }

  if (!race) {
    return <div className={cls.container}>{'Данные были перехвачены противником!'}</div>;
  }

  const pastes = {
    femaleDetected: 'Была замечена',
    maleDetected: 'Был замечен',
    detected: 'Были замечены',
    inFilm: 'в фильме',
    inFilms: 'в фильмах',
    onPlanet: 'На планете',
    onPlanets: 'На планетах',
  };

  const translatedInfo = {
    classification: 'Классификация',
    designation: 'Назначение',
    averageHeight: 'Усредненный рост',
    averageLifespan: 'Средняя продолжительность жизни',
    eyeColors: 'Цвет глаз',
    hairColors: 'Цвет волос',
    skinColors: 'Цвет кожи',
    language: 'Язык',
    homeWorld: 'Происхождение',
  };

  const information = () =>
    Object.entries(race.info).map(([char, value]) => {
      return (
        <div
          className={cls.info}
          key={char}>
          <span>{translatedInfo[char as keyof typeof translatedInfo]}</span>
          <span>::</span>
          <span>{value ? value : 'Нет данных'}</span>
        </div>
      );
    });

  const personsTitle = `Среди "${race.name}" числятся`;
  const filmsTitle = `${pastes['femaleDetected']} ${Object.keys(race.films).length === 1 ? pastes['inFilm'] : pastes['inFilms']
    }`;

  const persons = Object.keys(race.persons).map((id) => (
    <PersonLink
      id={id}
      key={'person' + id}
    />
  ));

  const films = Object.keys(race.films).map((id) => (
    <FilmLink
      id={id}
      key={'film' + id}
    />
  ));

  return (
    <div className={cls.container}>
      <h1 className={cls.title}>{race.name}</h1>
      <h2 className={cls.subTitle}>Известные данные</h2>
      <div className={cls.table}>{information()}</div>
      <h2 className={cls.subTitle}>{personsTitle}</h2>
      <div className={cls.items}>{persons}</div>
      <h2 className={cls.subTitle}>{filmsTitle}</h2>
      <div className={cls.table}>{films}</div>
    </div>
  );
}
