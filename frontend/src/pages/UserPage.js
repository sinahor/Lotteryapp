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



function UserPage() {
  const navigate= useNavigate();
 
  const mycart=()=>{
    navigate("/Login")
  }
  return (
    <div className="lottery_outer">
      <div className='lottery_headerUser'> <HeaderUser label1={""} label2={""}  label3={"Buy Now"}  label4={"My Cart"} label5={"Amount"} loginclick={""} cartclick={mycart}/></div>
      {/* <div className='lottery_headerOut'> <HeaderLogout /></div> */}
      <div className='lottery_menu'><Menu /></div>
      {/* <div className='lottery_betterwin'><Betterwin /></div> */}
      <div className='lottery_sliderswipe'><Sliderswipe /></div>
      <div className='lottery_lottunits'><LotteryUnits /></div>
      <div className='lottery_animation'><Animation /></div>
      <div className='lottery_option'> <Option /></div>
      <div className='lottery_footer'> <Footer /></div>
    </div>
  );
}

export default UserPage;