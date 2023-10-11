import type { FilmFromApi } from '../api/types';
import type { EpisodeNumbers, Film, MappedEntity } from '../model/types';

export function mapFilms(films: FilmFromApi[]): Film[] {
	const sortedFilms = films.sort((a, b) => a.episode_id - b.episode_id);

	const transformedFilms = sortedFilms.reduce<Film[]>((acc, film) => {
		const mappedCharacters = film.characters.reduce<MappedEntity>((acc, item) => {
			return { ...acc, [getIdFromUrl(item)]: item };
		}, {});
		const mappedSpecies = film.species.reduce<MappedEntity>((acc, item) => {
			return { ...acc, [getIdFromUrl(item)]: item };
		}, {});
		const mappedPlanets = film.planets.reduce<MappedEntity>((acc, item) => {
			return { ...acc, [getIdFromUrl(item)]: item };
		}, {});

		const year = film.release_date.split('-')[0];

		const mappedFilm = {
			id: film.episode_id,
			episodeId: mapEpisodeToRoman(film.episode_id),
			title: film.title,
			releaseDate: {
				full: film.release_date,
				year,
			},
			openingCrawl: film.opening_crawl,
			characters: mappedCharacters,
			species: mappedSpecies,
			planets: mappedPlanets,
		};

		return [...acc, mappedFilm];
	}, []);

	return transformedFilms;
}

function getIdFromUrl(url: string) {
	const arr = url.split('/');
	return arr[arr.length - 2];
}

function mapEpisodeToRoman(number: EpisodeNumbers) {
	const mapper = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
	};

	return mapper[number];
}
