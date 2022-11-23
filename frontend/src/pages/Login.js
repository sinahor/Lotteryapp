import "./Login.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate= useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg,setErrmsg]=useState("");
  const login=()=>{
    console.log("hi")
    let url="http://localhost:8080/uservalidate";
    let request={"username":username,"password":password};
    let header={};
    console.log(request)
    axios.post(url,request,header).then((res)=>{
     if(res.data=="User doesn't exist")
     {
       console.log(res.data)
       setErrmsg("Check username or password !!")
       
       // navigate()
     }
     else{
       setErrmsg("")
       console.log(res.data)
       alert("validated")
     }
    }).catch();

}
  const signup=()=>{
    navigate("/Signup")
  }
  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    console.log("usernameis ",e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("passwordis ",e);
  };

  return (
    <div className="login_outer">
      <div className="login_header">
        {/* <h1>linkedin</h1> */}
        <img
        // src={Linkedin_logo}
        // style={{ width: 100, height: 60 }}
        // alt="Linkedin Logo"
        />
      </div>
      <div className="login_container">
        <div className="login_cont_form">
          <div className="login_inner_form">
            <div className="login_form_row1">
              <label onClick={login}>Login</label>
            </div>
            {/* <div className="login_form_row2">
              <label>Stay updated on your profession world</label>
            </div> */}
            <div className="login_form_input">
            
              <input
                type="name"
                placeholder="Email or Phone"
                value={username}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
            </div>
            <div className="login_form_input">
             
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
              {/* <label>Show</label> */}
            </div>
            <div className="login_form_row5">
              <label>Forget password?</label>
            </div>
            <div className="login_errmsg">
            {errmsg}
            </div>
            
            <div className="login_form_row6">
              <button onClick={login}>Sign in</button>
            </div>
            <div className="login_form_row7">
              <div className="login_form_row7_col"></div>
              <div className="login_form_row7_col2">or</div>
              <div className="login_form_row7_col"></div>
            </div>
            <div className="login_form_row8">
              <button>
                <FcGoogle
                  style={{
                    width: 20,
                    height: 20,
                    paddingRight: 10,
                    paddingBottom: 5,
                  }}
                />{" "}
                Sign in with Google
              </button>
            </div>
            <div className="login_form_row8">
              <button>
                <AiFillFacebook
                  style={{
                    color: "blue",
                    width: 20,
                    height: 20,
                    paddingRight: 10,
                    paddingBottom: 5,
                  }}
                />{" "}
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login_row3">
        {/* <div className="login_row3"> */}
        <label className="login_new">New to Lotterydrums?</label>
        <label className="login_join" onClick={signup}>Join Now</label>
        {/* </div> */}
      </div>

      {/* <div className="login_footer">
        <div className="login_footer11">
          Lotterydrums
          <BiCopyright /> 2021
        </div>
        <div className="login_footer11">User Agreement </div>
        <div className="login_footer11">Privacy Policy</div>
        <div className="login_footer11">Community Guidelines </div>
        <div className="login_footer11">Copyright</div>
        <div className="login_footer11">Send Feedback</div>
        <div className="login_footer11">
          <select>
            <option>Language</option>
          </select>
        </div>
      </div> */}
    </div>
  );
}
export default Login;