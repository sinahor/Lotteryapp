import shield from './images/lockshield.jpg'
import './Checkoutbutton.css'
export default function Checkoutbutton({Checkout}) {

    return (
        <div className="component3">
            <div className="row">
                <div className="row_back">
                    <button>Back</button>
                </div>
                <div className="row_secured">
                    <div className='row_secured_img'>
                        <img src={shield} />
                    </div>
                    <div className='row_secured_labels'>
                        
                        <label>100% SECURED</label>
                        <label>SSL 256 BIT</label>
                        

                    </div>
                </div>
                <div className='row_secured_button'>
                    <button>{Checkout}</button>
                </div>
            </div>
        </div>




    );

}