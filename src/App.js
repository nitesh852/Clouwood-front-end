// // import React from "react";
// // // import { BrowserRouter as Router, Route } from "react-router-dom";
// // // import { Routes } from "react-router-dom";
// // // import User1 from "./User1";
// // // import User2 from "./User2";
// // import { Link } from "react-router-dom";

// // const App = () => {
// //   return (
// //     // <Router>
// //     <div>
// //       <h1>Welcome to My Home Automation App</h1>
// //       {/* <Routes>
// //         <Route path="/User-1" component={User1} />
// //         <Route path="/User-2" component={User2} />
// //       </Routes> */}
// //       <Link to="/User-1">
// //         <button>Go to User 1</button>
// //       </Link>
// //       <Link to="/User-2">
// //         <button>Go to User 2</button>
// //       </Link>
// //     </div>
// //     // </Router>
// //   );
// // };

// // export default App;

// import "./App.css";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";

// const socket = io.connect("http://localhost:3001");

// function App() {
//   //Room State
//   const [room, setRoom] = useState("");

//   // Messages States
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);
//   return (
//     <div className="App">
//       <input
//         placeholder="Room Number..."
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}> Join Room</button>
//       <input
//         placeholder="Message..."
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       />
//       <button onClick={sendMessage}> Send Message</button>
//       <h1> Message:</h1>
//       {messageReceived}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import lightReducer from "./reducers";
// import { io } from "socket.io-client";
// import User1 from "./User1";
// import User2 from "./User2";

// const socket = io("http://localhost:3001");

// const store = createStore(lightReducer);

// const App = () => {
//   useEffect(() => {
//     socket.on("lightStatus", (data) => {
//       store.dispatch({ type: "TURN_ON_LIGHT", payload: data });
//     });
//   }, []);

//   return (
//     <Provider store={store}>
//       <div>
//         <User1 />
//         <User2 />
//       </div>
//     </Provider>
//   );
// };

// export default App;

// import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import lightReducer from "./reducers";
// import { io } from "socket.io-client";
// import User1 from "./User1";
// import User2 from "./User2";

// const socket = io("http://localhost:3001");

// const store = createStore(lightReducer);

// const App = () => {
//   useEffect(() => {
//     socket.on("lightStatus", (data) => {
//       store.dispatch({ type: "TURN_ON_LIGHT", payload: data });
//     });
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/User-1" component={User1} />
//           <Route path="/User-2" component={User2} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import lightReducer from "./reducers";
import { io } from "socket.io-client";
import User1 from "./User1";
import User2 from "./User2";

const socket = io("http://localhost:3001");

const store = configureStore({
  reducer: lightReducer,
});
const App = () => {
  useEffect(() => {
    socket.on("lightStatus", (data) => {
      store.dispatch({ type: "TURN_ON_LIGHT", payload: data });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/User-1" component={User1} />
          <Route path="/User-2" component={User2} />
        </Routes>
      </Router>
    </Provider>

    // <Provider store={store}>
    //   {/* <Router> */}
    //   <Routes>
    //     <Route path="/User-1" component={User1} />
    //     <Route path="/User-2" component={User2} />
    //     {/* Add a default route or a "not found" page */}
    //     <Route path="*">{/* <div>Page Not Found</div> */}</Route>
    //   </Routes>
    //   {/* </Router> */}
    // </Provider>
  );
};

export default App;
