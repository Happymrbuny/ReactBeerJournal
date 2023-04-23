import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedBeer } from '../beers/beersSlice';
import { selectFeaturedBrewery } from '../breweries/breweriesSlice';
import { selectFeaturedEvent } from '../events/eventsSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedBeer(state),
        selectFeaturedBrewery(state),
        selectFeaturedEvent(state)
    ]);
    console.log('display items:', items);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;