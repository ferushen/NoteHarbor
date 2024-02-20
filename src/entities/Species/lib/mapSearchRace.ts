import type { SpeciesFromApi } from '../api/types';
import type { SpeciesForSearch } from '../model/types';
import { getIdFromUrl } from '@/shared/lib/helpers';

export function mapSearchRace(species: SpeciesFromApi[]): SpeciesForSearch[] {
	if (Array.isArray(species)) {
		const mappedSpecies = species.reduce<SpeciesForSearch[]>((acc, race) => {
			const mappedRace = {
				id: getIdFromUrl(race.url),
				name: race.name,
				category: 'species',
			};
			return [...acc, mappedRace];
		}, []);

		return mappedSpecies;
	}

	return [];
}
