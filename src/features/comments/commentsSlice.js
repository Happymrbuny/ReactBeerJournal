import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByBeerId = (beerId) => {
    return COMMENTS.filter(
        (comment) => comment.beerId === parseInt(beerId)
    );
};