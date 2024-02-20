import { FilmForSearch } from '@/entities/Film/model/types';
import { PersonForSearch } from '@/entities/Person/model/types';
import { PlanetForSearch } from '@/entities/Planet/model/types';
import { SpeciesForSearch } from '@/entities/Species/model/types';
import { baseApi } from '@/shared/api/baseApi';
import { SearchResult } from '../model/types';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { PersonFromApi } from '@/entities/Person/api/types';
import { mapSearchPerson } from '@/entities/Person/lib/mapSearchPerson';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';

// type SearchItem = PersonForSearch | PlanetForSearch | SpeciesForSearch | FilmForSearch;

// interface SearchResponse {
//   persons: PersonForSearch[]
//   planets: PlanetForSearch[];
//   species: SpeciesForSearch[];
//   films: FilmForSearch[];
// }

export type SearchResponse =
	| PersonForSearch[]
	| PlanetForSearch[]
	| SpeciesForSearch[]
	| FilmForSearch[];

const searchCategories = ['films', 'persons', 'planets', 'species'];

export const searchApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSearch: build.query<FilmForSearch[], { searchQuery?: string }>({
			async queryFn({ searchQuery }, _api, _extraOptions, baseQuery) {
				try {
					const response = (await baseQuery(
						`${'films'}/${searchQuery ? `?search=${searchQuery}` : ''}`
					)) as QueryReturnValue<FilmForSearch[]>;

					// const result = (await Promise.all(
					// 	searchCategories.map((category) =>
					// 		fetchWithBQ(`${category}/${search ? `?search=${search}` : ''}`)
					// 	)
					// )) as QueryReturnValue<FilmForSearch[]>[];

					if (response.error) {
						return { error: response.error as FetchBaseQueryError };
					}

					if (!response.data) {
						return { data: [] };
					}

					return {
						data: response.data as FilmForSearch[],
					};
				} catch (error) {
					return { error: { status: 'FETCH_ERROR' } as FetchBaseQueryError };
				}
			},
		}),
	}),
});

export const { useGetSearchQuery } = searchApi;
