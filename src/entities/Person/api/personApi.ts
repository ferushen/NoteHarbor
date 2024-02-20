import { baseApi } from '@/shared/api/baseApi';

import type { Person, PersonForSearch } from '../model/types';
import type { PersonFromApi } from './types';

import { mapPersons } from '../lib/mapPersons';
import { mapPerson } from '../lib/mapPerson';
import { mapSearchPerson } from '../lib/mapSearchPerson';

export const personApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		persons: build.query<Person[], void>({
			query: () => ({
				url: `/people`,
			}),
			transformResponse: (response: { results: PersonFromApi[] }) =>
				mapPersons(response.results),
		}),
		person: build.query<Person, { id: string }>({
			query: ({ id }) => ({
				url: `/people/${id}`,
			}),
			transformResponse: (response: PersonFromApi) => mapPerson(response),
		}),
		searchPerson: build.query<PersonForSearch[], { search?: string }>({
			query: ({ search }) => ({
				url: `/people/${search ? `?search=${search}` : ''}`,
			}),
			transformResponse: (response: { results: PersonFromApi[] }) =>
				mapSearchPerson(response.results),
		}),
	}),
});

export const { usePersonQuery, usePersonsQuery, useSearchPersonQuery } = personApi;
