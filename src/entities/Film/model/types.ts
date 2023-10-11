export interface Film {
	id: EpisodeNumbers;
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

export type MappedEntity = { [id: string]: string };

export type EpisodeNumbers = 1 | 2 | 3 | 4 | 5 | 6;
