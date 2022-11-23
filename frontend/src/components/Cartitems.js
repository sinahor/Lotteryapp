import './Cartitems.css'
import editicon from './images/editicon.png'
import bottle from './images/bottle.jpg'
import axios from "axios"
import { useEffect, useState } from 'react'

export default function Cartitems() {
    const [lotterynamearray, SetLotterynamearray] = useState([]);
    
    useEffect(() => {
        let url = "http://localhost:5000/lotterydetails";
        let request = {};
        let header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log(res.data)
                SetLotterynamearray(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    const [pricearray, SetPricearray] = useState([]);
    useEffect(() => {
        let url = "http://localhost:5000/Price";
        let request = {};
        let header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log(res.data);
                SetPricearray(res.data);
            })
            .catch((err) => {
                console.log(err)
        })
    }, [])

    const [numberarray, SetNumberarray] = useState([]);
    useEffect(() => {
        let url = "http://localhost:5000/Numbers";
        let request = {};
        let header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log(res.data);
                SetNumberarray(res.data);
            })
            .catch((err) => {
                console.log(err)
        })
    },[])

    return (
        <div className="component1">
            <div className="row1">
                <label className="label1">Ticket Details</label>
                <label className="label2">Selected Numbers</label>
                <label className="label3">Edit Ticket</label>
            </div>
            <div className='row2'>
                <div className='row2_img'>
                    <img src={bottle} />
                </div>
            {lotterynamearray.map((item,index) => {
                return <>
                    <div className='row2_details'>
                    <label>{item.txtLotteryname}</label>
                    <label>Draw Date:</label>
                    <label>{item.dtLotterydrawdate}</label>
                    </div>
                </>
            })}
            {numberarray.map((item,index) => {
                return <>
                <div className='row2_numbers'>
                    <label className='label1'>{item.txtFirstchoicenumber}</label>
                    <label className='label2'>{item.txtSecondchoicenumber}</label>
                    <label className='label3'>{item.txtThirdchoicenumber}</label>
                    <label className='label4'>{item.txtFourthchoicenumber}</label>
                    <label className='label5'>{item.txtFifthoicenumber}</label>
                </div>
                </>
            })}
            {pricearray.map((item,index) => {
                return <>
                <div className='row2_pricebuttons'>
                    <label>AED {item.txtCost}</label>
                    <button>X</button>
                    <img src={editicon} />
                </div>
                </>
            })}
                
            </div>
            <div className='row3'>
            {lotterynamearray.map((item,index) => {
                return <>
                    <div className='row3_details'>
                        <label>{item.txtLotteryname}</label>
                        <label>Draw Date:</label>
                        <label>{item.dtLotterydrawdate}</label>
                    </div>

                    </>
                })}

                {numberarray.map((item,index) => {
                return <>
                    <div className='row3_numbers'>
                        <label>{item.txtFirstchoicenumber}</label>
                        <label>{item.txtSecondchoicenumber}</label>
                        <label>{item.txtThirdchoicenumber}</label>
                        <label>{item.txtFourthchoicenumber}</label>
                        <label>{item.txtFifthoicenumber}</label>
                        
                    </div>

                    </>
                })}

                {pricearray.map((item,index) => {
                return <>
                    <div className='row3_pricebuttons'>
                        <label>AED {item.txtCost}</label>
                        
                        <img src={editicon} />
                    </div>
                    </>
            })}
            </div>


        </div>
    );
}