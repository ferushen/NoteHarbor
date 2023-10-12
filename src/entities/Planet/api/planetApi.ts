import { baseApi } from '@/shared/api/baseApi';
import type { Planet } from '../model/types';
import type { PlanetFromApi } from './types';
import { mapPlanets } from '../lib/mapPlanets';
import { mapPlanet } from '../lib/mapPlanet';

export const planetApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		planets: build.query<Planet[], void>({
			query: () => ({
				url: `/planets`,
			}),
			transformResponse: (response: { results: PlanetFromApi[] }) =>
				mapPlanets(response.results),
		}),
		planet: build.query<Planet, { id: string }>({
			query: ({ id }) => ({
				url: `/planets/${id}`,
			}),
			transformResponse: (response: PlanetFromApi) => mapPlanet(response),
		}),
	}),
});

export const { usePlanetQuery, usePlanetsQuery } = planetApi;
