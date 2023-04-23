import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByBeerId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({ beerId }) => {
    const comments = useSelector(selectCommentsByBeerId(beerId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm beerId={beerId} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this beer yet.
        </Col>
    );
};

export default CommentsList;