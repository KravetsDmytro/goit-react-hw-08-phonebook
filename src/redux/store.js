import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import contactsSlice from './contactsSlice';
import authReducer from '../redux/auth/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor= persistStore(store);
