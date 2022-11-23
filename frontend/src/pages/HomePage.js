import './HomePage.css';

import HeaderUser from '../components/HeaderUser';
// import HeaderLogout from './components/HeaderOut';
// import Betterwin from './components/Betterwin';
import Sliderswipe from '../components/Sliderswipe';
import Menu from '../components/Menu';
import LotteryUnits from '../components/LotteryUnits';
import Animation from '../components/Animation';
import Option from '../components/Option';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



function HomePage() {
  const navigate= useNavigate();
  const [lotterydetails,setLotterdetails]=useState([]);
  useEffect(()=>{
    let url="http://localhost:8080/drawticket";
    let request={};
    let header={};
    axios.post(url,request,header).then((res)=>{
      console.log(res.data)
      setLotterdetails(res.data);
    }).catch()
  },[])
  const LogIn=()=>{
    navigate("/Login")
  }
  const signup=()=>{
    navigate("/Signup")
  }
  return (
    <div className="lottery_outer">
      <div className='lottery_headerUser'> <HeaderUser label1={"BuyNow"} label2={"Log In"}  label3={"Register"}  label4={"My Cart"} label5={"Amount"} Loginclick={LogIn} cartclick={""} headerclick={signup}/></div>
      {/* <div className='lottery_headerOut'> <HeaderLogout /></div> */}
      <div className='lottery_menu'><Menu /></div>
      {/* <div className='lottery_betterwin'><Betterwin /></div> */}
      <div className='lottery_sliderswipe'><Sliderswipe /></div>
      <div className='lottery_lottunits'><LotteryUnits lotterydetails={lotterydetails}/></div>
      <div className='lottery_animation'><Animation /></div>
      <div className='lottery_option'> <Option  /></div>
      <div className='lottery_footer'> <Footer /></div>
    </div>
  );
}

export default HomePage;