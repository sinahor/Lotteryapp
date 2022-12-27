import "./Userdetails.css"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Unitdetails from "../components/List";
import Providerandprizedetails from "../components/List";
import HeaderUser from "../components/HeaderUser";
import Footer from "../components/Footer";

export default function Userdetails() {

    const [fetchuserdetails, setFetchunitdetails] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/userunitfetch";
        let request = {};
        let header = {};
        axios
            .post(url, request, header)
            .then((res) => {
                console.log(res.data);
                setFetchunitdetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="Userdetails_container">
            <div className="Userdetails_headerUser">
                <HeaderUser
                    label1={""}
                    label2={""}
                    label3={""}
                    label4={""}
                    label5={""}
                />
            </div>

            <div className="Userdetails_unitdetails">
                <Unitdetails
                    label1={"Lotteryname"}
                    label2={"Prize Numbers"}
                    label3={"Prize won"}
                    array={fetchuserdetails}
                    variable1={"txtLotteryname"}
                    variable2={"txtFirstchoicenumber"}
                    variable3={"txtSecondchoicenumber"}
                />
            </div>

            <div className="Userdetails_providerandprizedetails">
                <Providerandprizedetails
                    label1={"Lottery provider"}
                    label2={"Total prizes won until now"} 
                    array={fetchuserdetails}
                    variable1={"txtProvidername"}
                    variable2={"txtFirstchoicenumber"}
                />
            </div>

            <div className="Userdetails_footer">
                <Footer />
            </div>
        </div>


    );
}
