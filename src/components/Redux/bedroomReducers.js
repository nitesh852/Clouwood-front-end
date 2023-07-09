import {
  TOGGLE_LIGHT1,
  TOGGLE_LIGHT2,
  TOGGLE_BOTH_LIGHTS,
} from "./bedroomActions";

const initialState = {
  light1Status: false,
  light2Status: false,
};

const bedroomReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT1:
      return {
        ...state,
        light1Status: !state.light1Status,
      };
    case TOGGLE_LIGHT2:
      return {
        ...state,
        light2Status: !state.light2Status,
      };
    case TOGGLE_BOTH_LIGHTS:
      return {
        ...state,
        light1Status: !state.light1Status,
        light2Status: !state.light2Status,
      };
    default:
      return state;
  }
};

export default bedroomReducers;
