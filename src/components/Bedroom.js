// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   turnOnBedroomLight,
//   turnOffBedroomLight,
//   toggleBothBedroomLights,
// } from "../actions";
// import Light from "./Light";
// import Button from "./Button";
// import io from "socket.io-client";

// const Bedroom = () => {
//   const dispatch = useDispatch();
//   const bedroomLight = useSelector((state) => state.bedroomLight);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const socket = io("http://localhost:3001", { transports: ["websocket"] });

//     socket.on("connect_error", (error) => {
//       setError(error.message);
//     });

//     socket.on("bedroomLightStatus", (isOn) => {
//       if (isOn) {
//         dispatch(turnOnBedroomLight());
//       } else {
//         dispatch(turnOffBedroomLight());
//       }
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [dispatch]);

//   const handleTurnOn = () => {
//     dispatch(turnOnBedroomLight());
//   };

//   const handleTurnOff = () => {
//     dispatch(turnOffBedroomLight());
//   };

//   const handleToggleBoth = () => {
//     dispatch(toggleBothBedroomLights());
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Bedroom</h2>
//       <Light isOn={bedroomLight} />
//       <Button label="Turn On" onClick={handleTurnOn} />
//       <Button label="Turn Off" onClick={handleTurnOff} />
//       <Button label="Both On" onClick={handleToggleBoth} />
//     </div>
//   );
// };

// export default Bedroom;

import React from "react";
import { connect } from "react-redux";
import { turnOnLight, turnOffLight, toggleBothLights } from "../actions";

const Bedroom = ({
  light1,
  light2,
  turnOnLight,
  turnOffLight,
  toggleBothLights,
}) => {
  return (
    <div>
      <h2>Bedroom</h2>
      <div>
        <p>Light 1: {light1 ? "On" : "Off"}</p>
        <button onClick={() => turnOnLight("bedroom", "light1")}>
          Turn On
        </button>
        <button onClick={() => turnOffLight("bedroom", "light1")}>
          Turn Off
        </button>
      </div>
      <div>
        <p>Light 2: {light2 ? "On" : "Off"}</p>
        <button onClick={() => turnOnLight("bedroom", "light2")}>
          Turn On
        </button>
        <button onClick={() => turnOffLight("bedroom", "light2")}>
          Turn Off
        </button>
      </div>
      <div>
        <button onClick={() => toggleBothLights("bedroom")}>Both On</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  light1: state.bedroom.light1,
  light2: state.bedroom.light2,
});

const mapDispatchToProps = {
  turnOnLight,
  turnOffLight,
  toggleBothLights,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);
