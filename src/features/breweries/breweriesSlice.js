import { BREWERIES } from '../../app/shared/BREWERIES';

export const selectFeaturedBrewery = () => {
    return BREWERIES.find((brewery) => brewery.featured);
};