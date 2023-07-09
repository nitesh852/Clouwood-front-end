import {
  TOGGLE_KITCHEN_LIGHT1,
  TOGGLE_KITCHEN_LIGHT2,
  TOGGLE_BOTH_KITCHEN_LIGHTS,
} from "./kitchenActions";

const initialState = {
  kitchenLight1Status: false,
  kitchenLight2Status: false,
};

const kitchenReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_KITCHEN_LIGHT1:
      return {
        ...state,
        kitchenLight1Status: !state.kitchenLight1Status,
      };
    case TOGGLE_KITCHEN_LIGHT2:
      return {
        ...state,
        kitchenLight2Status: !state.kitchenLight2Status,
      };
    case TOGGLE_BOTH_KITCHEN_LIGHTS:
      return {
        ...state,
        kitchenLight1Status: !state.kitchenLight1Status,
        kitchenLight2Status: !state.kitchenLight2Status,
      };
    default:
      return state;
  }
};

export default kitchenReducers;
