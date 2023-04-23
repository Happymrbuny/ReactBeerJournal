import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { beersReducer } from '../features/beers/beersSlice';
import { breweriesReducer } from '../features/breweries/breweriesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { eventsReducer } from '../features/events/eventsSlice';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    breweries: breweriesReducer,
    comments: commentsReducer,
    events: eventsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
