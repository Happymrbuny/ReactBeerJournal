import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedBeer } from '../beers/beersSlice';
import { selectFeaturedBrewery } from '../breweries/breweriesSlice';

const DisplayList = () => {
    const items = [selectFeaturedBeer(), selectFeaturedBrewery()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;