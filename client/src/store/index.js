import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import favoritesReducer from '../reducers/favoritesReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReduser = combineReducers({
	favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

function setupStore() {
	return configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});
}

export const store = setupStore();
export const persistor = persistStore(store);
