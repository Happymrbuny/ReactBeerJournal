import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'commens',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByBeerId = (beerId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.beerId === parseInt(beerId)
    );
};