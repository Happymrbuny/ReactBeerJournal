import { Container, Row, Col, Button } from 'reactstrap';
import BeersList from '../features/beers/BeersList';
import BeerDetail from '../features/beers/BeerDetail';
import { selectRandomBeer } from '../features/beers/beersSlice';

const BeerDirectoryPage = () => {
    let selectedBeer = selectRandomBeer();

    const toggleBeer = () => {
        selectedBeer = selectRandomBeer();
        console.log(selectedBeer);
    };

    return (
        <Container>
            <Button onClick={() => toggleBeer()}>Select Random Beer</Button>
            <Row>
                <Col sm='5' md='7'>
                    <BeersList />
                </Col>
                <Col sm='7' md='5'>
                    <BeerDetail beer={selectedBeer} />
                </Col>
            </Row>
        </Container>
    );
};

export default BeerDirectoryPage;