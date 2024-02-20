import { FilmForSearch } from '@/entities/Film/model/types';
import { PersonForSearch } from '@/entities/Person/model/types';
import { PlanetForSearch } from '@/entities/Planet/model/types';
import { SpeciesForSearch } from '@/entities/Species/model/types';

export type SearchResult = (
	| FilmForSearch
	| PersonForSearch
	| PlanetForSearch
	| SpeciesForSearch
)[];
