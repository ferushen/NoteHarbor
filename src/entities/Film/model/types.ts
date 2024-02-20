import { MappedEntity } from '@/shared/types/common';

export interface Film {
	id: string;
	episodeId: string;
	title: string;
	openingCrawl: string;
	releaseDate: {
		full: string;
		year: string;
	};
	characters: MappedEntity;
	species: MappedEntity;
	planets: MappedEntity;
}

export type FilmForSearch = { id: string; name: string; category: string };

export type EpisodeNumbers = 1 | 2 | 3 | 4 | 5 | 6;
