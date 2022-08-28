import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import UiReducer from './slices/uiSlice';
import searchSlice from './slices/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};
const rootReducer = combineReducers({
  ui: UiReducer,
  search: searchSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
