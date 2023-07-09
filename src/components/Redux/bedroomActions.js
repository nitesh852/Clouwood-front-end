export const TOGGLE_LIGHT1 = "TOGGLE_LIGHT1";
export const TOGGLE_LIGHT2 = "TOGGLE_LIGHT2";
export const TOGGLE_BOTH_LIGHTS = "TOGGLE_BOTH_LIGHTS";

export const toggleLight1 = () => ({
  type: TOGGLE_LIGHT1,
});

export const toggleLight2 = () => ({
  type: TOGGLE_LIGHT2,
});

export const toggleBothLights = () => ({
  type: TOGGLE_BOTH_LIGHTS,
});
