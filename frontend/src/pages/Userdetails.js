import "./Userdetails.css"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import Footer from "../components/Footer";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
import {IoIosArrowDropdown } from "react-icons/io"

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

    const [fetchwinningstodate, setFetchwinningstodate] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/userwinningtodatefetch";
        let request = {};
        let header = {};
        axios
            .post(url, request, header)
            .then((res) => {
                console.log(res.data);
                setFetchwinningstodate(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/AdminLotteryManager");
    };

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

                <div className="list_outer">
                    <div className="list_outer_header">
                        <p>{"Lotteryname"}</p>
                        <p>{"Draw Date"}</p>
                        <p>{"Prize won"}</p>
                    </div>
                    {fetchuserdetails.map((item, index) => {
                        return (
                            <>
                                <div className="list_outer_row">
                                    <p>{item.txtLotteryName}</p>
                                    <p>{item.DrawDate}</p>
                                    <p>{item.TotalPrize}</p>
                                    {/* <td><span>{item[value4]}</span></td> */}
                                </div>
                            </>
                        );
                    })}
                    <button
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Proceed to Lottery Manager
                    </button>
                </div>



            </div>

            <div className="Userdetails_providerandprizedetails">

                <div className="list_outer">
                    <div className="list_outer_header">
                        <p>{"Lottery provider"}</p>
                        <p>{"Total prizes won until now"}</p>
                    </div>
                    {fetchwinningstodate.map((item, index) => {
                        return (
                            <>
                                <div className="list_outer_row">
                                    <p>{item.txtProvidername}</p>
                                    {/* <button onClick={() => }></button></p>
                                    <Collapsible 
                                     /> */}
                                    <p>{item.ProviderTotal}</p>
                                    {/* <td><span>{item[value4]}</span></td> */}
                                </div>
                            </>
                        );
                    })}
                    <button
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        Proceed to Lottery Manager
                    </button>
                </div>

            </div>

            <div className="Userdetails_footer">
                <Footer />
            </div>
        </div>


    );
}
