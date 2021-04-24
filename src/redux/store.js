import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  const preferences = store.getState().preferences;

  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;
