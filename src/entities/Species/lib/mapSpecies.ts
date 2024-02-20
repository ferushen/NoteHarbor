import type { SpeciesFromApi } from '../api/types';
import type { Species } from '../model/types';
import { createMappedEntity, getIdFromUrl } from '@/shared/lib/helpers';

export function mapSpecies(species: SpeciesFromApi[]): Species[] {
	const mappedSpecies = species.reduce<Species[]>((acc, race) => {
		const films = createMappedEntity(race.films);
		const persons = createMappedEntity(race.people);

		const mappedRace = {
			id: getIdFromUrl(race.url),
			name: race.name,
			info: {
				classification: race.classification,
				designation: race.designation,
				averageHeight: race.average_height,
				averageLifespan: race.average_lifespan,
				eyeColors: race.eye_colors,
				hairColors: race.hair_colors,
				skinColors: race.skin_colors,
				language: race.language,
				homeWorld: race.homeworld,
			},
			persons,
			films,
		};
		return [...acc, mappedRace];
	}, []);

	return mappedSpecies;
}
