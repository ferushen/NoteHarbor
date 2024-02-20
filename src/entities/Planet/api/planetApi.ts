import { baseApi } from '@/shared/api/baseApi';
import type { Planet, PlanetForSearch } from '../model/types';
import type { PlanetFromApi } from './types';
import { mapPlanets } from '../lib/mapPlanets';
import { mapPlanet } from '../lib/mapPlanet';
import { mapSearchPlanet } from '../lib/mapSearchPlanet';

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
		searchPlanet: build.query<PlanetForSearch[], { search?: string }>({
			query: ({ search }) => ({
				url: `/planets/${search ? `?search=${search}` : ''}`,
			}),
			transformResponse: (response: { results: PlanetFromApi[] }) =>
				mapSearchPlanet(response.results),
		}),
	}),
});

export const { usePlanetQuery, usePlanetsQuery, useSearchPlanetQuery } = planetApi;
