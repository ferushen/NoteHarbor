import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { __API__ } from '../consts/api';

export const baseQuery = fetchBaseQuery({
	baseUrl: __API__,
});
