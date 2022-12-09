import "./AdminDashboard.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";

import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [unitdetails, setUnitdetails] = useState([]);
  useEffect(() => {
    console.log("hi");
    let url = "http://localhost:8080/Unitlist";
    let request = {};
    let header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("unitlist", res.data);
        setUnitdetails(res.data);
      })
      .catch();
  }, []);
  const LogIn = () => {
    navigate("/Login");
  };

  return (
    <div className="AdminDashboard_outer">
      <div className="AdminDashboard_headerUser">
        {" "}
        <HeaderUser
          label1={"Dashboard"}
          label2={"Unit Summary"}
          label3={""}
          label4={""}
          label5={""}
          Loginclick={LogIn}
        />
      </div>
     
      

      <div className="AdminDashboard_footer">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
