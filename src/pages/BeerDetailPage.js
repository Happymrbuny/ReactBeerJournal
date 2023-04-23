import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBeerById } from '../features/beers/beersSlice';
import BeerDetail from '../features/beers/BeerDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const BeerDetailPage = () => {
    const { beerId } = useParams();
    const beer = useSelector(selectBeerById(beerId));
    console.log('beer:', beer);

    return (
        <Container>
            <SubHeader current={beer.name} detail={true} />
            <Row>
                <BeerDetail beer={beer} />
                <CommentsList beerId={beerId} />
            </Row>
        </Container>
    );
};

export default BeerDetailPage;