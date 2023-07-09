import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import User1 from "./User1";
import User2 from "./User2";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/User-1" element={<User1 />} />
      <Route path="/User-2" element={<User2 />} />
    </Routes>
  );
};

export default AllRoutes;
