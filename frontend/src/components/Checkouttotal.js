import { useEffect } from 'react';
import './Checkouttotal.css'
import axios from 'axios';
import { useState } from 'react';
export default function Checkouttotal(){
    const [totalarray, SetTotalarray] = useState([]);
    useEffect(() => {
        let url = "http://localhost:8080/Price";
        let request = {};
        let header = {};
        axios.post(url, request, header)
            .then((res) => {
                console.log(res.data);
                SetTotalarray(res.data);
            })
            .catch((err) => {
                console.log(err)
        })
    }, [])

    return(
        <div className="component2">
            <div className="row">
                <div className="row_col1">
                    <div className='col1_line'><label className="label1">By clicking on the "Checkout" Button, you agre to our</label> <label className="label2"> Rules</label> <label className="label1">and</label> <label className="label2"> Terms and Conditions.</label> <br></br> </div>
                    <div className='col1_line'><label className="label1">All transactions are charged in AED and are inclusive of VAT. Prices displayed in other</label><br></br> </div>
                    <div className='col1_line'><label className="label1">currencies are for informative purposes only and converted according to actual</label><br></br> </div>
                    <div className='col1_line'><label className="label1">exchange rates. </label> </div>
                </div> 
                <div className="row_col2">
                    {totalarray.map((item,index) => {
                        return<>
                            <div className='col2_line'><label className='label1'>Price: </label><label className='label2'>AED {item.txtCost}</label></div>
                    </>
                    })}
                    <div className='col2_line'><label className='label3'>Credit Requred: </label><label className='label2'>AED 35.00</label></div>
                    <div className='col2_line1'><button>Login to apply voucher code</button></div>
                </div>
            </div>
        </div>




    );
}