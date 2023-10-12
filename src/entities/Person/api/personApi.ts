import { baseApi } from '@/shared/api/baseApi';
import type { Person } from '../model/types';
import type { PersonFromApi } from './types';
import { mapPersons } from '../lib/mapPersons';
import { mapPerson } from '../lib/mapPerson';

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
	}),
});

export const { usePersonQuery, usePersonsQuery } = personApi;
