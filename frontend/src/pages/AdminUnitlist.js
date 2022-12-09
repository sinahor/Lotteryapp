import "./AdminUnitlist.css";
import HeaderUser from "../components/HeaderUser";
import Filterbar from "../components/Filterbar";
import Unitlist from "../components/Unitlist";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


function AdminUnitlist() {
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
    <div className="AdminUnitlist_outer">
      <div className="AdminUnitlist_headerUser">
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
      <div className="AdminUnitlist_filterbar">
        <Filterbar />
      </div>
      <div className="AdminUnitlist_unitlist">
        <Unitlist />
      </div>

      <div className="AdminUnitlist_footer">
        <Footer />
      </div>
    </div>
  );
}

export default AdminUnitlist;
