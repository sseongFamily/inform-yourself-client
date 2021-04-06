import { combineReducers } from 'redux';
import infoCardReducer from './infoCardReducer';
import userReducer from './userReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userReducer,
  infoCardReducer,
});

export default persistReducer<any, any>(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
