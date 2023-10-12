import { baseApi } from '@/shared/api/baseApi';
import type { Species } from '../model/types';
import type { SpeciesFromApi } from './types';
import { mapAllSpecies } from '../lib/mapAllSpecies';
import { mapOneSpecies } from '../lib/mapOneSpecies';

export const speciesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		allSpecies: build.query<Species[], void>({
			query: () => ({
				url: `/species`,
			}),
			transformResponse: (response: { results: SpeciesFromApi[] }) =>
				mapAllSpecies(response.results),
		}),
		oneSpecies: build.query<Species, { id: string }>({
			query: ({ id }) => ({
				url: `/species/${id}`,
			}),
			transformResponse: (response: SpeciesFromApi) => mapOneSpecies(response),
		}),
	}),
});

export const { useOneSpeciesQuery, useAllSpeciesQuery } = speciesApi;
