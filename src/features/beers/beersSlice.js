import { createSlice } from '@reduxjs/toolkit';
import { BEERS } from '../../app/shared/BEERS';

const initialState = {
    beersArray: BEERS
};

const beersSlice = createSlice({
    name: 'beers',
    initialState
});

export const beersReducer = beersSlice.reducer;

export const selectAllBeers = () => {
    return BEERS;
};

export const selectBeerById = (id) => {
    return BEERS.find((beer) => beer.id === parseInt(id));
};

export const selectFeaturedBeer = () => {
    return BEERS.find((beer) => beer.featured);
};