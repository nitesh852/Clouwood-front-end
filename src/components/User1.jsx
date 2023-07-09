// import React from "react";
// import { Link } from "react-router-dom";
// import Bedroom from "./Bedroom";
// import Kitchen from "./Kitchen";

// const User1 = () => {
//   console.log("sss");
//   return (
//     <div>
//       <h1>User 1</h1>
//       <Link to="/User-2">Go to User 2</Link>
//       <Bedroom />
//       <Kitchen />
//     </div>
//   );
// };

// export default User1;

// import React from "react";
// // import { connect } from "react-redux";
// import Bedroom from "./components/Bedroom";
// import Kitchen from "./components/Kitchen";

// const User1 = () => {
//   return (
//     <div>
//       <h1>User 1</h1>
//       <Bedroom />
//       <Kitchen />
//     </div>
//   );
// };

// export default User1;
//
// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Bedroom from "./components/Bedroom";
// import Kitchen from "./components/Kitchen";

// const User1 = () => {
//   console.log("hhh");
//   return (
//     // <Router>
//     <div>
//       <h1>User 1</h1>
//       <Bedroom />
//       <Kitchen />
//     </div>
//     // {/* </Router> */}
//   );
// };

// export default User1;

import React from "react";
import Kitchen from "./Kitchen";
import Bedroom from "./Bedroom";

const User1 = () => {
  return (
    <div>
      <h1>User 1</h1>
      <Bedroom />
      <Kitchen />
    </div>
  );
};

export default User1;
