import Header from "../components/HeaderUser";
import Footer from '../components/Footer';
import CartHeader from '../components/Cartheader';
import Cartitems from '../components/Cartitems';
import Checkoutbutton from '../components/Checkoutbutton';
import CheckoutTotal from '../components/Checkouttotal';
export default function Checkout() {
  return (
    <>
    <div className="Checkout_Main">
      <div className="Checkout_header"><Header /></div>
            <div></div><CartHeader/>
            <Cartitems/>
      <CheckoutTotal/>
      <Checkoutbutton Checkout={Checkout}/>
      
      
      <Footer/>
      </div>
    </>
  );
}
