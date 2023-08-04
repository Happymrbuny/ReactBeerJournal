import mnBeerDabblerLogo from '../assets/img/MNBD-logo.png';
import hoppedUpLogo from '../assets/img/HoppedUp-logo.png';
import brewsologyLogo from '../assets/img/Brewsology-logo.jpg';

export const EVENTS = [
    {
        id: 0,
        name: 'MN Beer Dabbler',
        image: mnBeerDabblerLogo,
        featured: false,
        description:
            "The biggest and best winter beer festival in Minnesota will make its triumphant return to the Minnesota State Fairgrounds on February 25, 2023!"
    },
    {
        id: 1,
        name: 'Hopped Up Caribou Beer Festival',
        image: hoppedUpLogo,
        featured: true,
        description:
            'Hopped Up Beer Festival is already the furthest north beer festival in Minnesota, but this year, it may also be one of the funkiest. Held July 14th through 16th at Caribou Highlands Lodge, this year’s festival will feature concerts on Friday and Saturday nights and all day Saturday.'
    },
    {
        id: 2,
        name: 'Minnesota Brewsology',
        image: brewsologyLogo,
        featured: false,
        description:
            'Sample over 50 breweries and 150 beers while exploring the Science Museum of Minnesota.'
    }
];
