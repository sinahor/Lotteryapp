import Header from "../components/HeaderUser";
import'./Checkout.css';
import Footer from "../components/Footer";
import CartHeader from "../components/Cartheader";
import Cartitems from "../components/Cartitems";
import Checkoutclick from "../components/Checkoutcomponent";
import CheckoutTotal from "../components/Checkouttotal";
export default function Checkout() {
  return (
    <>
      <div className="Checkout_Main">
        <div className="Checkout_header">
          <Header />
        </div>
        <div className="Checkout_cartheader">
          <CartHeader />
        </div>
        <div className="Checkout_cartitems"> 
          <Cartitems />
        </div>
        <div className="Checkout_total">
          <CheckoutTotal />
        </div>
        <div className="Checkout_click">
          <Checkoutclick />
        </div>

        <Footer />
      </div>
    </>
  );
}
