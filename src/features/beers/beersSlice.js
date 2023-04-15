import { BEERS } from '../../app/shared/BEERS';

export const selectAllBeers = () => {
    return BEERS;
}

export const selectRandomBeer = () => {
    return BEERS[Math.floor(BEERS.length * Math.random())];
};