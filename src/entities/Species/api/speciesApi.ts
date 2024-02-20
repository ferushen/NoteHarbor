import { baseApi } from '@/shared/api/baseApi';
import type { Species, SpeciesForSearch } from '../model/types';
import type { SpeciesFromApi } from './types';
import { mapSpecies } from '../lib/mapSpecies';
import { mapRace } from '../lib/mapRace';
import { mapSearchRace } from '../lib/mapSearchRace';

export const speciesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		species: build.query<Species[], void>({
			query: () => ({
				url: `/species`,
			}),
			transformResponse: (response: { results: SpeciesFromApi[] }) =>
				mapSpecies(response.results),
		}),
		race: build.query<Species, { id: string }>({
			query: ({ id }) => ({
				url: `/species/${id}`,
			}),
			transformResponse: (response: SpeciesFromApi) => mapRace(response),
		}),
		searchRace: build.query<SpeciesForSearch[], { search?: string }>({
			query: ({ search }) => ({
				url: `/species/${search ? `?search=${search}` : ''}`,
			}),
			transformResponse: (response: { results: SpeciesFromApi[] }) =>
				mapSearchRace(response.results),
		}),
	}),
});

export const { useSpeciesQuery, useRaceQuery, useSearchRaceQuery } = speciesApi;
