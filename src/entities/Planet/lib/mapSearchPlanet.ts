import type { PlanetFromApi } from '../api/types';
import type { PlanetForSearch } from '../model/types';
import { getIdFromUrl } from '@/shared/lib/helpers';

export function mapSearchPlanet(planets: PlanetFromApi[]): PlanetForSearch[] {
	if (Array.isArray(planets)) {
		const mappedPlanets = planets.reduce<PlanetForSearch[]>((acc, planet) => {
			const mappedPlanet = {
				id: getIdFromUrl(planet.url),
				name: planet.name,
				category: 'planets',
			};
			return [...acc, mappedPlanet];
		}, []);

		return mappedPlanets;
	}

	return [];
}
