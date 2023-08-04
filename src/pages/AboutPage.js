import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import EventsList from '../features/events/EventsList';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        We present a curated database of the best beers in the
                        world.
                        We increase access to new beers for the public while
                        promoting safe and respectful use of alcohol. The expert
                        beer tasters on our staff personally verify each
                        beer to make sure that they are up to our standards. We
                        also present a platform for drinkers to share reviews on
                        beers they have enjoyed with each other.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>February 3, 2016</dd>
                                <dt className='col-6'>No. of beers in 2019</dt>
                                <dd className='col-6'>563</dd>
                                <dt className='col-6'>No. of Reviews in 2019</dt>
                                <dd className='col-6'>4388</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                Beer: the cause of and solution to all of life’s problems.
                                </p>
                                <footer className='blockquote-footer'>
                                Homer Simpson{' '}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Community Events</h3>
                </Col>
                <EventsList />
            </Row>
        </Container>
    );
};

export default AboutPage;