import { Container, Row } from 'reactstrap';
import BeersList from '../features/beers/BeersList';
import SubHeader from '../components/SubHeader';

const BeersDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <Row>
                <BeersList />
            </Row>
        </Container>
    );
};

export default BeersDirectoryPage;