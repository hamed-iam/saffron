import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import throttle from 'lodash.throttle';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState({
      theme: store.getState().theme,
    });
  }, 1000)
);

export default store;
