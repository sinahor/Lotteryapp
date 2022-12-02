import Header from "../components/HeaderUser";
import Drawinformation from "../components/Drawresult";
import Lineselector from "../components/Lineselector";
import Linemessage from "../components/Linemessage";
import Footer from "../components/Footer";
import "./TicketSelector.css"
import Checkoutbutton from "../components/Checkoutbutton";
import { useNavigate } from "react-router-dom";
export default function TicketSelector(){
    const navigate= useNavigate();
    const home=()=>{
        navigate("/")
    }
  const chkout=()=>{
    navigate("/Checkout")
  }
    return(

        <>
        <div className="ticketselector_outer">
        <Header label3={"Home"} label4={"My Cart"} headerclick={home}/>
        {/* <Drawinformation/> */}
        <div className="ticketselector_line">
        <Lineselector label1={"Unit 1"}/>
        <Lineselector label1={"Unit 2"}/>
        <Lineselector label1={"Unit 3"}/>
        <Lineselector label1={"Unit 4"}/>
        <Lineselector label1={"Unit 5"}/>
        </div>
        <Linemessage/>
        <div className="ticketselector_chkoutbtn">
        <Checkoutbutton Checkout={"Proceed to checkout"} chkout={chkout}/>
        </div>
        
        {/* <Footer/> */}
        </div>
        </>
    );
}