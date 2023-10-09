import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const __API__ = 'https://moviesdatabase.p.rapidapi.com';

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', 'e96075d921mshf5291785b7b5145p11b185jsne984c90f9baa');
			headers.set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

			return headers;
		},
	}),
	endpoints: () => ({}),
});
