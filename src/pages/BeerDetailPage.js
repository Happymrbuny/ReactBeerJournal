import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBeerById } from '../features/beers/beersSlice';
import BeerDetail from '../features/beers/BeerDetail';
import CommentsList from '../features/comments/CommentsList';

const BeerDetailPage = () => {
    const { beerId } = useParams();
    const beer = selectBeerById(beerId);

    return (
        <Container>
            <Row>
                <BeerDetail beer={beer} />
                <CommentsList beerId={beerId} />
            </Row>
        </Container>
    );
};

export default BeerDetailPage;