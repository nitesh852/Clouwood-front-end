// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducer from "./reducers";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import User1 from "./User1";
// import User2 from "./User2";
// import App from "./App";

// const store = createStore(reducer);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/User-1" element={<User1 />} />
//         <Route path="/User-2" element={<User2 />} />
//       </Routes>
//     </Router>
//   </Provider>
// );
// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  // <Router>
  <App />
  // {/* </Router> */}
);
