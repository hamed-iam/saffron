import { combineReducers } from 'redux';
import arzReducer from './arz/arzReducer';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  arz: arzReducer,
});

export default rootReducer;
