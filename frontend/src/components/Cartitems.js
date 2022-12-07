import "./Cartitems.css";
import editicon from "../images/editicon.png";
import bottle from "../images/bottle.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cartitems() {
  const [array, Setarray] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/unitcheckout";
    let request = {};
    let header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        Setarray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
const handleDeleteClick=(id)=>{
  let url = "http://localhost:8080/unitdelete";
  let request = {id:id};
  let header = {};
  axios
    .post(url, request, header)
    .then((res) => {
      console.log(res.data);
      // Setarray(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });

}

  //   const [pricearray, SetPricearray] = useState([]);
  //   useEffect(() => {
  //     let url = "http://localhost:8080/Price";
  //     let request = {};
  //     let header = {};
  //     axios
  //       .post(url, request, header)
  //       .then((res) => {
  //         console.log(res.data);
  //         SetPricearray(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  //   const [numberarray, SetNumberarray] = useState([]);
  //   useEffect(() => {
  //     let url = "http://localhost:8080/Numbers";
  //     let request = {};
  //     let header = {};
  //     axios
  //       .post(url, request, header)
  //       .then((res) => {
  //         console.log(res.data);
  //         SetNumberarray(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className="Cartitems_component1">
      <div className="Cartitems_row1">
        <div className="Cartitems_row1_col1">
          <label>Ticket Details</label>
        </div>
        <div className="Cartitems_row1_col2">
          <label>Selected Numbers</label>
        </div>
        <div className="Cartitems_row1_col3">
          <label>Remove Selected</label>
        </div>
      </div>

      {array.map((item, index) => {
        return (
          <>
            <div className="Cartitems_row2">
              <div className="Cartitems_row2_col1">
                <label>{item.Lotteryname}</label>
                <label>{item.Drawdate}</label>
              </div>
              <div className="Cartitems_row2_col2">
                <button >{item.Firstnumber}</button>
                <button >{item.Secondnumber}</button>
                <button >{item.Thirdnumber}</button>
                <button >{item.Fourthnumber}</button>
                <button >{item.Fifthnumber}</button>
              </div>
              <div className="Cartitems_row2_col3">
                <button onClick={(e)=>{handleDeleteClick(item.id)}}>X</button>
                {/* <img src={editicon} /> */}
              </div>
            </div>
            {/* <div className="Cartitems_row2_details">
                <label>{item.txtLotteryname}</label>
                <label>Draw Date:</label>
                <label>{item.dtLotterydrawdate}</label>
              </div> */}
          </>
        );
      })}
      {/* {numberarray.map((item, index) => {
          return (
            <>
              <div className="Cartitems_row2_numbers">
                <label className="label1">{item.txtFirstchoicenumber}</label>
                <label className="label2">{item.txtSecondchoicenumber}</label>
                <label className="label3">{item.txtThirdchoicenumber}</label>
                <label className="label4">{item.txtFourthchoicenumber}</label>
                <label className="label5">{item.txtFifthoicenumber}</label>
              </div>
            </>
          );
        })} */}
      {/* {pricearray.map((item, index) => {
          return (
            <>
              <div className="row2_pricebuttons">
                <label>AED {item.txtCost}</label>
                <button>X</button>
                <img src={editicon} />
              </div>
            </>
          );
        })} */}
    </div>
  );
}
