import { useEffect, useLayoutEffect, useState } from 'react';
import { useSearchFilmQuery } from '@/entities/Film';
import { useSearchPersonQuery } from '@/entities/Person';
import { useSearchPlanetQuery } from '@/entities/Planet';
import { useSearchRaceQuery } from '@/entities/Species';
import cls from './Search.module.css';
import { Link, useLocation } from 'react-router-dom';
import { SearchResult } from '../model/types';
import cn from 'classnames';
import { FilmForSearch } from '@/entities/Film/model/types';

const initDone = {
  films: false,
  persons: false,
  planets: false,
  races: false,
};

export function Search() {
  console.log('----RENDER--SEARCH-----')
  const [query, setQuery] = useState<string>('');
  const [result, setResult] = useState<FilmForSearch[]>([]);
  const [done, setDone] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log('RESULT', result)
  console.log('DONE', done)

  const location = useLocation();

  const { data: films, isFetching, isUninitialized } = useSearchFilmQuery(
    { search: query },
    {
      skip: query.length <= 2,
    },
  );

  console.log('useSearchFilmQuery :: data', films)
  console.log('useSearchFilmQuery :: isFetching', isFetching)
  console.log('useSearchFilmQuery :: isUninitialized', isUninitialized)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    if (query.length > 2) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    console.log('>> EFFECT :: SET RESULTS AND DONE');

    setIsOpen(() => true);

    if (!isUninitialized && !isFetching) {
      console.log('>> EFFECT :: films', done)
      setResult((prev) => {
        if (films) {
          return [...films]
        }
        return [...prev]
      });
      setDone(true);
    }

    // return () => {
    //   console.log('>> UNMOUNT EFFECT')
    //   if (query.length > 1) {
    //     console.log('>> UNMOUNT EFFECT WITH CONDITION')
    //     setDone(() => {
    //       console.log('>> UNMOUNT EFFECT :: RESET DONS')
    //       return false;
    //     });

    //     setResult(() => {
    //       console.log('>> UNMOUNT EFFECT :: RESET RESULTS')
    //       return [];
    //     });
    //   }
    // };
  }, [query, isUninitialized, isFetching]);

  // useEffect(() => {
  //   setIsOpen(true);
  //   return () => {
  //     console.log('>> UNMOUNT EFFECT')
  //     if (query.length > 1) {
  //       console.log('>> UNMOUNT EFFECT WITH CONDITION')
  //       setDone(() => {
  //         console.log('>> UNMOUNT EFFECT :: RESET DONS')
  //         return false;
  //       });

  //       setResult(() => {
  //         console.log('>> UNMOUNT EFFECT :: RESET RESULTS')
  //         return [];
  //       });
  //     }
  //   };
  // }, [query]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      console.log(e.target);
      setIsOpen(false);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  useEffect(() => {
    console.log('>> EFFECT [LOCATION] :: ALL RESET')
    setQuery('');
    setResult([]);
    setDone(false);
  }, [location]);

  return (
    <div className={cls.container}>
      <input
        className={cls.input}
        type='text'
        placeholder='Поиск по вселенной Star Wars'
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onClick={(e) => e.stopPropagation()}
      />
      {query.length > 2 && (
        <div
          className={cn(cls.result, { [cls.hidden]: !isOpen })}
          // key='result'
          onClick={(e) => e.stopPropagation()}>
          {isUninitialized
            ? 'Пока не ищем'
            : isFetching
              ? 'Поиск...'
              : result.length !== 0
                ? result.map((item) => (
                  <div
                    className={cls.resultItem}
                    key={item.name}>
                    <span className={cls.linkInfo}>{item.category}</span>
                    <Link
                      className={cls.link}
                      to={`/${item.category}/${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
                ))
                : 'Ничего не найдено'}
        </div>
      )}
    </div>
  );
}
