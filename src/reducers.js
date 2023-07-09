// const initialState = {
//   bedroomLight: false,
//   kitchenLight: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "TURN_ON_BEDROOM_LIGHT":
//       return {
//         ...state,
//         bedroomLight: true,
//       };
//     case "TURN_OFF_BEDROOM_LIGHT":
//       return {
//         ...state,
//         bedroomLight: false,
//       };
//     case "TOGGLE_BOTH_BEDROOM_LIGHTS":
//       return {
//         ...state,
//         bedroomLight: !state.bedroomLight,
//       };
//     case "TURN_ON_KITCHEN_LIGHT":
//       return {
//         ...state,
//         kitchenLight: true,
//       };
//     case "TURN_OFF_KITCHEN_LIGHT":
//       return {
//         ...state,
//         kitchenLight: false,
//       };
//     case "TOGGLE_BOTH_KITCHEN_LIGHTS":
//       return {
//         ...state,
//         kitchenLight: !state.kitchenLight,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

const initialState = {
  bedroom: {
    light1: false,
    light2: false,
  },
  kitchen: {
    light1: false,
    light2: false,
  },
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TURN_ON_LIGHT":
      return {
        ...state,
        [action.payload.room]: {
          ...state[action.payload.room],
          [action.payload.light]: true,
        },
      };
    case "TURN_OFF_LIGHT":
      return {
        ...state,
        [action.payload.room]: {
          ...state[action.payload.room],
          [action.payload.light]: false,
        },
      };
    case "TOGGLE_BOTH_LIGHTS":
      const currentState = state[action.payload.room];
      return {
        ...state,
        [action.payload.room]: {
          light1: !currentState.light1,
          light2: !currentState.light2,
        },
      };
    default:
      return state;
  }
};

export default lightReducer;
