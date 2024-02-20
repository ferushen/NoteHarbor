import { createSlice } from '@reduxjs/toolkit';
import { Film } from './types';

interface FilmsSliceState {
	items: Film[];
}

const initialState: FilmsSliceState = {
	items: [],
};

export const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {},
});

export const { actions: filmsActions } = filmsSlice;
export const { reducer: filmsReducer } = filmsSlice;
