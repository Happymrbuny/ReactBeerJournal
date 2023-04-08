import BentPaddleBlackAleImg from '../assets/img/Bent-Paddle-Black-Ale.jpeg';
import SurlyFuriousImg from '../assets/img/Surly-Furious-IPA.jpeg';
import SierraNevadaPaleAleImg from '../assets/img/Sierra-Nevada-Pale-Ale.jpeg';
import SummitEPAImg from '../assets/img/Summit-Extra-Pale-Ale.jpeg';
//All beer images are from WikiliQ.org

export const BEERS = [
    {
        id: 0,
        name: 'Bent Paddle Black Ale',
        image: BentPaddleBlackAleImg,
        elevation: 1233,
        featured: true,
        description:
            'Brewed to be smooth, chocolatey, semi-roasted ale that bridges the islands of porter and stout.'
    },
    {
        id: 1,
        name: 'Surly Furious',
        image: SurlyFuriousImg,
        elevation: 877,
        featured: false,
        description:
            'Aggressively hopped and citrusy, but with a chewy, caramel backbone.'
    },
    {
        id: 2,
        name: 'Sierra Nevada Pale Ale',
        image: SierraNevadaPaleAleImg,
        elevation: 2901,
        featured: false,
        description:
            'Bold and complex with pine and citrus notes from whole-cone Cascade hops.'
    },
    {
        id: 3,
        name: 'Summit EPA',
        image: SummitEPAImg,
        elevation: 42,
        featured: false,
        description:
            'Caramel and biscuit malts balanced with a juicy citrus hop bite.'
    }
];
