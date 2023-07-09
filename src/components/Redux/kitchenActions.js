export const TOGGLE_KITCHEN_LIGHT1 = "TOGGLE_KITCHEN_LIGHT1";
export const TOGGLE_KITCHEN_LIGHT2 = "TOGGLE_KITCHEN_LIGHT2";
export const TOGGLE_BOTH_KITCHEN_LIGHTS = "TOGGLE_BOTH_KITCHEN_LIGHTS";

export const toggleKitchenLight1 = () => {
  return {
    type: TOGGLE_KITCHEN_LIGHT1,
  };
};

export const toggleKitchenLight2 = () => {
  return {
    type: TOGGLE_KITCHEN_LIGHT2,
  };
};

export const toggleBothKitchenLights = () => {
  return {
    type: TOGGLE_BOTH_KITCHEN_LIGHTS,
  };
};
