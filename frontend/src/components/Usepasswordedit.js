import "../style/Usepasswordedit.css";
import {BiHide} from "react-icons/bi";
export default function Usepasswordedit() {
  return (
    <div className="Useprofileedit">
      <div className="Useprofileedit_colm">
        <div className="Useprofileedit_colm_raw1">
          <div className="Useprofileedit_colm_raw1_label">
            <label>Old Password</label>
          </div>
          <div className="Useprofileedit_colm_raw1_icon"><BiHide/></div>
          <div className="Useprofileedit_colm_raw1_input">
            <input type={"text"} placeholder="Old Password"></input>
          </div>
        </div>
        <div className="Useprofileedit_colm_raw1">
          <div className="Useprofileedit_colm_raw1_label">
            <label>New Password</label>
          </div>
          <div className="Useprofileedit_colm_raw1_icon"><BiHide/></div>
          <div className="Useprofileedit_colm_raw1_input">
            <input type={"text"} placeholder="New Password"></input>
          </div>
        </div>
        <div className="Useprofileedit_colm_raw1">
          <div className="Useprofileedit_colm_raw1_label">
            <label>Confirm Password</label>
          </div>
          <div className="Useprofileedit_colm_raw1_icon"><BiHide/></div>
          <div className="Useprofileedit_colm_raw1_input">
            <input type={"text"} placeholder="Confirm Password"></input>
          </div>
        </div>
        <div className="Useprofileedit_colm_raw2">
          <button>Update Password</button>
        </div>
      </div>
    </div>
  );
}
