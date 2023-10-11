import { FilmCardList } from '@/entities/Film';
import { useFilmsQuery } from '@/entities/Film/api/filmsApi';

import cls from './FilmsPage.module.css';

export function FilmsPage() {
  const { data: films, isLoading } = useFilmsQuery();

  return (
    <div className={cls.container}>
      {isLoading && 'Загружаем данные'}
      {films && <FilmCardList films={films} />}
    </div>
  )
}
