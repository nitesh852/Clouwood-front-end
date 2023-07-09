import React from "react";
import { connect } from "react-redux";
import {
  toggleKitchenLight1,
  toggleKitchenLight2,
  toggleBothKitchenLights,
} from "./Redux/kitchenActions";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
let socket;
const Kitchen = (props) => {
  const {
    kitchenLight1Status,
    kitchenLight2Status,
    toggleKitchenLight1,
    toggleKitchenLight2,
    toggleBothKitchenLights,
  } = props;

  useEffect(() => {
    socket = socketIOClient("http://localhost:3001");

    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    socket.on("kitchenStatus", (data) => {
      console.log(data);
    });
  });
  //   console.log("hhfdjf");
  const lightOneToggle = () => {
    socket.emit("kitchen", {
      light1: !kitchenLight1Status,
      light2: kitchenLight2Status,
    });
    toggleKitchenLight1();
  };
  const lightTwoToggle = () => {
    socket.emit("kitchen", {
      light1: kitchenLight1Status,
      light2: !kitchenLight2Status,
    });
    toggleKitchenLight2();
  };
  const lightBothToggle = () => {
    socket.emit("kitchen", {
      light1: !kitchenLight1Status,
      light2: !kitchenLight2Status,
    });
    toggleKitchenLight1();
    toggleKitchenLight2();
  };
  return (
    <div>
      <h2>Kitchen</h2>
      <p>Light 1 Status: {kitchenLight1Status ? "On" : "Off"}</p>
      <button onClick={lightOneToggle}>Toggle Light 1</button>

      <p>Light 2 Status: {kitchenLight2Status ? "On" : "Off"}</p>
      <button onClick={lightTwoToggle}>Toggle Light 2</button>

      <button onClick={lightBothToggle}>Toggle Both Lights</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  kitchenLight1Status: state.kitchen.kitchenLight1Status,
  kitchenLight2Status: state.kitchen.kitchenLight2Status,
});

const mapDispatchToProps = {
  toggleKitchenLight1,
  toggleKitchenLight2,
  toggleBothKitchenLights,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
