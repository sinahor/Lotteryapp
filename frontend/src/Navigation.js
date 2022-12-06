import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";

import Topbar from "./components/Topbar";
import Sucess from "./pages/Sucess";
import Failure from "./pages/Failure";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Checkout from "./pages/Checkout";
import TicketSelector from "./pages/TicketSelector";
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Verifyotp" element={<VerifyOTP />}></Route>
        <Route path="/Topbar" element={<Topbar />}></Route>
        <Route path="/Sucess" element={<Sucess />}></Route>
        <Route path="/Failure" element={<Failure />}></Route>
        <Route path="/UserPage" element={<UserPage />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/TicketSelector" element={<TicketSelector />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
