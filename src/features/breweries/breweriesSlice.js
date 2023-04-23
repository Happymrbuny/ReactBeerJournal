import { createSlice } from '@reduxjs/toolkit';
import { BREWERIES } from '../../app/shared/BREWERIES';

const initialState = {
    breweriesArray: BREWERIES
};

const breweriesSlice = createSlice({
    name: 'breweries',
    initialState
});

export const breweriesReducer = breweriesSlice.reducer;

export const selectFeaturedBrewery = (state) => {
    return state.breweries.breweriesArray.find((brewery) => brewery.featured);
};