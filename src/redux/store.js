import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from "./contacts/contacts-slice";
import authReducer from './auth/auth-slice';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        contacts: contactsSlice,
  
    }, 

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: false,
});

export const persistor = persistStore(store);
