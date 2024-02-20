import type { PlanetFromApi } from '../api/types';
import type { Planet } from '../model/types';
import { createMappedEntity, getIdFromUrl } from '@/shared/lib/helpers';

export function mapPlanet(planet: PlanetFromApi): Planet {
	const films = createMappedEntity(planet.films);
	const persons = createMappedEntity(planet.residents);

	const mappedPlanet = {
		id: getIdFromUrl(planet.url),
		name: planet.name,
		info: {
			diameter: planet.diameter,
			rotationPeriod: planet.rotation_period,
			orbitalPeriod: planet.orbital_period,
			gravity: planet.gravity,
			population: planet.population,
			climate: planet.climate,
			terrain: planet.terrain,
			surfaceWater: planet.surface_water,
		},
		persons,
		films,
	};

	return mappedPlanet;
}
