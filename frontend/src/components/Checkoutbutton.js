import shield from '../images/lockshield.jpg'
import './Checkoutbutton.css'
export default function Checkoutbutton({Checkout,chkout}) {

    return (
        <div className="Checkoutbutton_component3">
            <div className="Checkoutbutton_component3_row">
                <div className="Checkoutbutton_component3_row_back">
                    <button>Back</button>
                </div>
                <div className="Checkoutbutton_component3_row_secured">
                    <div className='Checkoutbutton_component3_row_secured_img'>
                        <img src={shield} />
                    </div>
                    <div className='Checkoutbutton_component3_row_secured_labels'>
                        
                        <label>100% SECURED</label>
                        <label>SSL 256 BIT</label>
                        

                    </div>
                </div>
                <div className='Checkoutbutton_component3_row_secured_button'>
                    <button onClick={chkout}>{Checkout}</button>
                </div>
            </div>
        </div>




    );

}