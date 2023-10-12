import type { FilmFromApi } from '../api/types';
import type { EpisodeNumbers, Film } from '../model/types';
import { createMappedEntity } from '@/shared/lib/helpers';

export function mapFilm(film: FilmFromApi): Film {
	const mappedCharacters = createMappedEntity(film.characters);
	const mappedSpecies = createMappedEntity(film.species);
	const mappedPlanets = createMappedEntity(film.planets);

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

	return mappedFilm;
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
