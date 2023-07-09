import React from "react";
import { connect } from "react-redux";
import {
  toggleLight1,
  toggleLight2,
  toggleBothLights,
} from "./Redux/bedroomActions";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
let socket;

const Bedroom = (props) => {
  const {
    light1Status,
    light2Status,
    toggleLight1,
    toggleLight2,
    toggleBothLights,
  } = props;

  useEffect(() => {
    socket = socketIOClient("http://localhost:3001");

    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    socket.on("bedroomStatus", (data) => {
      console.log(data);
    });
  });
  //   console.log("hhfdjf");
  const lightOneToggle = () => {
    socket.emit("bedroom", {
      light1: !light1Status,
      light2: light2Status,
    });
    toggleLight1();
  };
  const lightTwoToggle = () => {
    socket.emit("bedroom", {
      light1: light1Status,
      light2: !light2Status,
    });
    toggleLight2();
  };
  const lightBothToggle = () => {
    socket.emit("bedroom", {
      light1: !light1Status,
      light2: !light1Status,
    });
    toggleLight1();
    toggleLight2();
  };

  return (
    <div>
      <h2>Bedroom</h2>
      <p>Light 1 Status: {light1Status ? "On" : "Off"}</p>
      <button onClick={lightOneToggle}>Toggle Light 1</button>

      <p>Light 2 Status: {light2Status ? "On" : "Off"}</p>
      <button onClick={lightTwoToggle}>Toggle Light 2</button>

      <button onClick={lightBothToggle}>Toggle Both Lights</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  light1Status: state.bedroom.light1Status,
  light2Status: state.bedroom.light2Status,
});

const mapDispatchToProps = {
  toggleLight1,
  toggleLight2,
  toggleBothLights,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);
