// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   turnOnKitchenLight,
// //   turnOffKitchenLight,
// //   toggleBothKitchenLights,
// // } from "../actions";
// // import Light from "./Light";
// // import Button from "./Button";

// // const Kitchen = () => {
// //   const dispatch = useDispatch();
// //   const kitchenLight = useSelector((state) => state.kitchenLight);

// //   const handleTurnOn = () => {
// //     dispatch(turnOnKitchenLight());
// //   };

// //   const handleTurnOff = () => {
// //     dispatch(turnOffKitchenLight());
// //   };

// //   const handleToggleBoth = () => {
// //     dispatch(toggleBothKitchenLights());
// //   };

// //   return (
// //     <div>
// //       <h2>Kitchen</h2>
// //       <Light isOn={kitchenLight} />
// //       <Button label="Turn On" onClick={handleTurnOn} />
// //       <Button label="Turn Off" onClick={handleTurnOff} />
// //       <Button label="Both On" onClick={handleToggleBoth} />
// //     </div>
// //   );
// // };

// // export default Kitchen;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   turnOnKitchenLight,
//   turnOffKitchenLight,
//   toggleBothKitchenLights,
// } from "../actions";
// import Light from "./Light";
// import Button from "./Button";
// import io from "socket.io-client";

// const Kitchen = () => {
//   const dispatch = useDispatch();
//   const kitchenLight = useSelector((state) => state.kitchenLight);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const socket = io("http://localhost:3001", { transports: ["websocket"] });

//     socket.on("connect_error", (error) => {
//       setError(error.message);
//     });

//     socket.on("kitchenLightStatus", (isOn) => {
//       if (isOn) {
//         dispatch(turnOnKitchenLight());
//       } else {
//         dispatch(turnOffKitchenLight());
//       }
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [dispatch]);

//   const handleTurnOn = () => {
//     dispatch(turnOnKitchenLight());
//   };

//   const handleTurnOff = () => {
//     dispatch(turnOffKitchenLight());
//   };

//   const handleToggleBoth = () => {
//     dispatch(toggleBothKitchenLights());
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Kitchen</h2>
//       <Light isOn={kitchenLight} />
//       <Button label="Turn On" onClick={handleTurnOn} />
//       <Button label="Turn Off" onClick={handleTurnOff} />
//       <Button label="Both On" onClick={handleToggleBoth} />
//     </div>
//   );
// };

// export default Kitchen;

import React from "react";
import { connect } from "react-redux";
import { turnOnLight, turnOffLight, toggleBothLights } from "../actions";

const Kitchen = ({
  light1,
  light2,
  turnOnLight,
  turnOffLight,
  toggleBothLights,
}) => {
  return (
    <div>
      <h2>Kitchen</h2>
      <div>
        <p>Light 1: {light1 ? "On" : "Off"}</p>
        <button onClick={() => turnOnLight("kitchen", "light1")}>
          Turn On
        </button>
        <button onClick={() => turnOffLight("kitchen", "light1")}>
          Turn Off
        </button>
      </div>
      <div>
        <p>Light 2: {light2 ? "On" : "Off"}</p>
        <button onClick={() => turnOnLight("kitchen", "light2")}>
          Turn On
        </button>
        <button onClick={() => turnOffLight("kitchen", "light2")}>
          Turn Off
        </button>
      </div>
      <div>
        <button onClick={() => toggleBothLights("kitchen")}>Both On</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  light1: state.kitchen.light1,
  light2: state.kitchen.light2,
});

const mapDispatchToProps = {
  turnOnLight,
  turnOffLight,
  toggleBothLights,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
