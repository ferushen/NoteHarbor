import type { FilmFromApi } from '../api/types';
import type { FilmForSearch } from '../model/types';

export function mapSearchFilm(films: FilmFromApi[]): FilmForSearch[] {
	if (Array.isArray(films)) {
		const transformedFilms = films.reduce<FilmForSearch[]>((acc, film) => {
			const mappedFilm = {
				id: film.episode_id.toString(),
				name: film.title,
				category: 'films',
			};

			return [...acc, mappedFilm];
		}, []);

		return transformedFilms;
	}

	return [];
}
