import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BeersList from '../features/beers/BeersList';
import BeerDetail from '../features/beers/BeerDetail';
import { selectBeerById } from '../features/beers/beersSlice';

const BeerDirectoryPage = () => {
    const [beerId, setBeerId] = useState(0);
    const selectedBeer = selectBeerById(beerId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <BeersList setBeerId={setBeerId} />
                </Col>
                <Col sm='7' md='5'>
                    <BeerDetail beer={selectedBeer} />
                </Col>
            </Row>
        </Container>
    );
};

export default BeerDirectoryPage;