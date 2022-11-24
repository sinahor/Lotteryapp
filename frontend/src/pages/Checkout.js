import Header from "../components/HeaderUser";
import Footer from '../components/Footer';
import CartHeader from '../components/Cartheader';
import Cartitems from '../components/Cartitems';
import Checkoutbutton from '../components/Checkoutbutton';
import CheckoutTotal from '../components/Checkouttotal';
export default function Checkout() {
  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <CartHeader/>
      <br></br>
      <br></br>
      <br></br>
      <Cartitems/>
      <CheckoutTotal/>
      <Checkoutbutton/>
      
      
      <Footer/>
    </>
  );
}
