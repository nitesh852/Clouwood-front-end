// export const turnOnBedroomLight = () => {
//   return {
//     type: "TURN_ON_BEDROOM_LIGHT",
//   };
// };

// export const turnOffBedroomLight = () => {
//   return {
//     type: "TURN_OFF_BEDROOM_LIGHT",
//   };
// };

// export const toggleBothBedroomLights = () => {
//   return {
//     type: "TOGGLE_BOTH_BEDROOM_LIGHTS",
//   };
// };

// export const turnOnKitchenLight = () => {
//   return {
//     type: "TURN_ON_KITCHEN_LIGHT",
//   };
// };

// export const turnOffKitchenLight = () => {
//   return {
//     type: "TURN_OFF_KITCHEN_LIGHT",
//   };
// };

// export const toggleBothKitchenLights = () => {
//   return {
//     type: "TOGGLE_BOTH_KITCHEN_LIGHTS",
//   };
// };

export const turnOnLight = (room, light) => ({
  type: "TURN_ON_LIGHT",
  payload: { room, light },
});

export const turnOffLight = (room, light) => ({
  type: "TURN_OFF_LIGHT",
  payload: { room, light },
});

export const toggleBothLights = (room) => ({
  type: "TOGGLE_BOTH_LIGHTS",
  payload: { room },
});
