import React from "react";

const Light = ({ isOn }) => {
  return (
    <div>
      <span>{isOn ? "On" : "Off"}</span>
    </div>
  );
};

export default Light;
