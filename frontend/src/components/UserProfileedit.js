import "./UserProfileedit.css";
import profilepic from "../images/megan.png";
export default function UserProfileedit() {
  return (
    <div className="UserProfileedit">
      <div className="UserProfileedit_head">
        <div className="UserProfileedit_head_raw1">
          <div className="UserProfileedit_head_raw1_btn">
            <button>Add image</button>
          </div>
          <div className="UserProfileedit_head_raw1_label">
            <label>Recommended size:130x130px</label>
          </div>
        </div>
        <div className="UserProfileedit_head_raw2">
          <div className="UserProfileedit_head_raw2_img">
            <img src={profilepic} alt="profilepic" />
          </div>
          <div className="UserProfileedit_head_raw2_label">
            <label>Remove Image</label>
          </div>
        </div>
      </div>
      <div className="UserProfileedit_body">
        <div className="UserProfileedit_body_raw1">
          <div className="UserProfileedit_body_raw1_clmn1">
              <label>First Name</label>
              <input type="text"></input>
          </div>
          <div className="UserProfileedit_body_raw1_clmn2">
              <label>Last Name</label>
              <input type="text"></input>
          </div>
        </div>
        <div className="UserProfileedit_body_raw2">
            <label>Email</label>
            <input type="text"></input>
        </div>
        <div className="UserProfileedit_body_raw2">
            <label>Contact Number</label>
            <input type="text"></input>
        </div>
        <div className="UserProfileedit_body_raw2">
            <label>Address</label>
            <input type="text"></input>
        </div>
        <div className="UserProfileedit_body_raw1">
          <div className="UserProfileedit_body_raw1_clmn1">
              <label>City</label>
              <input type="text"></input>
          </div>
          <div className="UserProfileedit_body_raw1_clmn2">
              <label>State</label>
              <input type="text"></input>
          </div>
        </div>
        <div className="UserProfileedit_body_raw1">
          <div className="UserProfileedit_body_raw1_clmn1">
              <label>Zip code</label>
              <input type="text"></input>
          </div>
          <div className="UserProfileedit_body_raw1_clmn2">
              <label>Country</label>
              <input type="text"></input>
          </div>
        </div>
        <div className="UserProfileedit_body_raw2">
            <label>Password</label>
            <input type="Password"></input>
        </div>
      </div>
    </div>
  );
}
