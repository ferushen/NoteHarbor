import { useParams } from 'react-router-dom';
import { usePlanetQuery } from '@/entities/Planet';
import { FilmLink } from '@/entities/Film';
import { PersonLink } from '@/entities/Person';

import cls from './PlanetPage.module.css';

export function PlanetPage() {
  const { id } = useParams<{ id: string }>();
  const { data: planet, isLoading } = usePlanetQuery({ id: id as string });

  if (isLoading) {
    return <div className={cls.container}>{'Выполняем загрузку данных...'}</div>;
  }

  if (!planet) {
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
    diameter: 'Диаметр',
    rotationPeriod: 'Количество часов в сутках',
    orbitalPeriod: 'Количество дней в году',
    gravity: 'Показатель гравитации',
    population: 'Численность населения',
    climate: 'Преобладающая климатическая зона',
    terrain: 'Рельеф',
    surfaceWater: 'Водные источники',
  };

  const information = () =>
    Object.entries(planet.info).map(([char, value]) => {
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

  const filmsTitle = `${pastes['femaleDetected']} ${Object.keys(planet.films).length === 1 ? pastes['inFilm'] : pastes['inFilms']
    }`;
  const personsTitle = `${pastes['onPlanet']} ${pastes['detected']}`;

  const films = Object.keys(planet.films).map((id) => (
    <FilmLink
      id={id}
      key={'film' + id}
    />
  ));

  const persons = Object.keys(planet.persons).map((id) => (
    <PersonLink
      id={id}
      key={'person' + id}
    />
  ));

  return (
    <div className={cls.container}>
      <h1 className={cls.title}>{planet.name}</h1>
      <h2 className={cls.subTitle}>Известные данные</h2>
      <div className={cls.table}>{information()}</div>
      <h2 className={cls.subTitle}>{personsTitle}</h2>
      <div className={cls.items}>{persons}</div>
      <h2 className={cls.subTitle}>{filmsTitle}</h2>
      <div className={cls.table}>{films}</div>
    </div>
  );
}
