// import React from "react";
// import { Link } from "react-router-dom";
// import Bedroom from "./components/Bedroom";
// import Kitchen from "./components/Kitchen";

// const User2 = () => {
//   return (
//     <div>
//       <h1>User 2</h1>
//       <Link to="/User-1">Go to User 1</Link>
//       <Bedroom />
//       <Kitchen />
//     </div>
//   );
// };

// export default User2;

// import React from "react";
// // import { connect } from "react-redux";
// import Bedroom from "./components/Bedroom";
// import Kitchen from "./components/Kitchen";

// const User2 = () => {
//   return (
//     <div>
//       <h1>User 2</h1>
//       <Bedroom />
//       <Kitchen />
//     </div>
//   );
// };

// export default User2;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Bedroom from "./components/Bedroom";
import Kitchen from "./components/Kitchen";

const User2 = () => {
  console.log("user-2");
  return (
    // <Router>
    <div>
      <h1>User 2</h1>
      <Bedroom />
      <Kitchen />
    </div>
    // </Router>
  );
};

export default User2;
