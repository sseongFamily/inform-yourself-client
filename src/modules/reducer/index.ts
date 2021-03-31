import { combineReducers } from 'redux';
import infoCardReducer from './infoCardReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  infoCardReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
