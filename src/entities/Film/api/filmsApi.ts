import { baseApi } from '@/shared/api/baseApi';
import { type Film } from '../model/types';
import { type FilmFromApi } from './types';
import { mapFilms } from '../lib/mapFilms';
import { mapFilm } from '../lib/mapFilm';

interface FilmsResponse {
	results: FilmFromApi[];
}

export const filmsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		films: build.query<Film[], void>({
			query: () => ({
				url: `/films`,
			}),
			transformResponse: (response: FilmsResponse) => mapFilms(response.results),
		}),
		film: build.query<Film, { id: string }>({
			query: ({ id }) => ({
				url: `/films/${id}`,
			}),
			transformResponse: (response: FilmFromApi) => mapFilm(response),
		}),
	}),
});

export const { useFilmsQuery, useFilmQuery } = filmsApi;
