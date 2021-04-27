import { combineReducers } from 'redux';
import arzReducer from './arz/arzReducer';
import cryptoReducer from './crypto/cryptoReducer';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  arz: arzReducer,
  crypto: cryptoReducer,
});

export default rootReducer;
