import "../Styles/Cartheader.css"
import visalogo from '../Images/ch-Visa-Logo.png'
import mastercardlogo from '../Images/ch-Mastercard-Logo.png'
import americanexpresslogo from '../Images/ch-American-Express-Logo.png'
export default function Cartheader(){
    return(
        <>
        <div className="cartheader_container">
            <div className="cartheader_label_sec">
                <label><h2>Shopping Cart</h2></label>
            </div>
            <div className="cartheader_img_sec">
<div className="cartheaderimg1"><img src={visalogo}/> </div>
<div className="cartheaderimg2"><img src={mastercardlogo}/> </div>
<div className="cartheaderimg3"><img src={americanexpresslogo}/></div>
            </div>
            
            
        </div>
        
        </>
    )
}