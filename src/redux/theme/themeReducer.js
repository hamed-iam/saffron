import { TOGGLE_DARK_THEME } from './themeTypes';

const initialState = {
  darkThemeEnabled: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return {
        ...state,
        darkThemeEnabled: !state.darkThemeEnabled,
      };

    default:
      return state;
  }
};

export default themeReducer;
