import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
