import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const __API__ = 'http://swapi.dev/api/';

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
	}),
	endpoints: () => ({}),
});
