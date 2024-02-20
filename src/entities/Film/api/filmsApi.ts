import { baseApi } from '@/shared/api/baseApi';
import type { FilmForSearch, Film } from '../model/types';
import type { FilmFromApi, FilmsResponse } from './types';
import { mapFilms } from '../lib/mapFilms';
import { mapFilm } from '../lib/mapFilm';
import { mapSearchFilm } from '../lib/mapSearchFilm';

export const filmsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		films: build.query<Film[], void>({
			query: () => ({
				url: `/films`,
			}),
			transformResponse: (response: FilmsResponse) => mapFilms(response.results),
			providesTags: ['Films'],
		}),
		film: build.query<Film, { id: string }>({
			query: ({ id }) => ({
				url: `/films/${id}`,
			}),
			transformResponse: (response: FilmFromApi) => mapFilm(response),
		}),
		searchFilm: build.query<FilmForSearch[], { search?: string }>({
			query: ({ search }) => ({
				url: `/films/${search ? `?search=${search}` : ''}`,
			}),
			transformResponse: (response: FilmsResponse) => mapSearchFilm(response.results),
		}),
	}),
});

export const { useFilmsQuery, useFilmQuery, useSearchFilmQuery } = filmsApi;
