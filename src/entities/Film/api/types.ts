import { EpisodeNumbers } from '../model/types';

export interface FilmFromApi {
	title: string;
	episode_id: EpisodeNumbers;
	opening_crawl: string;
	release_date: string;
	species: string[];
	characters: string[];
	planets: string[];
}
