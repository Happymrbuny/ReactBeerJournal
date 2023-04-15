import { BEERS } from '../../app/shared/BEERS';

export const selectAllBeers = () => {
    return BEERS;
}

export const selectBeerById = (id) => {
    return BEERS.find((beer) => beer.id === id);
};