import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
const createDebugger = require('redux-flipper').default;

import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
