import "./Signup.css";
import { RiEyeCloseFill, RiLinkedinBoxFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import VerifyOTP from "./VerifyOTP";
import axios from "axios";
// import logo from "./image/Linkedin_logo.png";
import Sucess from "./Sucess";
function Signup() {
  const [show, setShow] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [newid, setNewid] = useState("");
  const [errmsg, setErr] = useState("");
  const [errpmsg, setPErr] = useState("");

 
  const verifyotp = () => {
    console.log("before", show);
    setShow(true);
    console.log(show);
    // navigate("/Verifyotp")
  };
  const signup = () => {
    let url = "http://localhost:8080/insertuser";
    let request = {
      fname: fname,
      lname: lname,
      uname: uname,
      password: password,
    };
    console.log("passwd and repw", password, repassword);
    let header = {};
    if (fname && lname && uname && password && repassword != "") {
      if (password != repassword) {
        console.log("repassword", repassword);
        setPErr("Password not same");
      } else
        axios
          .post(url, request, header)
          .then((res) => {
            setNewid(res.data.insertId);
            var newid = res.data.insertId;
            let url_otp = "http://localhost:8080/otpgenerate";
            let request_otp = { newid: newid };
            let header_otp = {};
            axios
              .post(url_otp, request_otp, header_otp)
              .then((res) => {
                console.log("response", res.data);
                var email = res.data[0].txtUemail;
                var otp = res.data[0].txtOtp;
                console.log("email is", email);
                let url_email = "http://localhost:8080/sendmail";
                let request_email = { email: email, otp: otp };
                let header_email = {};
                console.log(request_email);
                axios
                  .post(url_email, request_email, header_email)
                  .then((res) => {
                    console.log("response", res.data);
                  })
                  .catch();
                setShow(true);
                console.log(res.data.insertId);
              })
              .catch();
          })
          .catch();
    } else {
      setErr("Mandatory fileds cannot be empty");
    }
  };

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
    // console.log("usernameis ", e);
  };
  const handleFirstnameChange = (e) => {
    setFname(e.target.value);
    // console.log("firstname ", e);
  };
  const handleLastnameChange = (e) => {
    setLname(e.target.value);
    // console.log("lastname ", e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("passwordis ", password);
  };
  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
    console.log("repasswordis ", repassword);
  };
  return (
    <>
      {show ? (
        <>
          <VerifyOTP show={show} setShow={setShow} newid={newid} />
        </>
      ) : (
        <></>
      )}

      <div className="signup_outer">
        <div className="signup_header">
          <img />
        </div>
        <div className="signup_container">
          <div className="signup_cont_form">
            <div className="signup_inner_form">
              <div className="signup_form_row1">
                <label>Signup</label>
              </div>
              <div className="signup_form_row2">
                <div className="signup_form_input">
                  <input
                    type="name"
                    placeholder="FirstName"
                    value={fname}
                    onChange={(e) => {
                      handleFirstnameChange(e);
                    }}
                  />
                </div>
                <div className="signup_form_input">
                  <input
                    type="text"
                    placeholder="LastName"
                    value={lname}
                    onChange={(e) => {
                      handleLastnameChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="signup_form_row3">
                <input
                  type="text"
                  placeholder="Email address"
                  value={uname}
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                />
              </div>
              <div className="signup_form_row3">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    handlePasswordChange(e);
                  }}
                />
              </div>
              <div className="signup_form_row3">
                <input
                  type="text"
                  placeholder="Re-Password"
                  value={repassword}
                  onChange={(e) => {
                    handleRePasswordChange(e);
                  }}
                />
              </div>
              <div className="ermsg">
                {errmsg}
                {errpmsg}
              </div>
              <div className="signup_form_row6">
                <button onClick={signup}>Create your account</button>
              </div>
              <div className="signup_form_row7">
                <div className="signup_form_row7_col"></div>
                <div className="signup_form_row7_col2">or</div>
                <div className="signup_form_row7_col"></div>
              </div>

              <div className="signup_form_row8">
                <label>Sign up with</label>
              </div>
              <div className="signup_form_row9">
                <button>
                  <FcGoogle
                    style={{
                      width: 20,
                      height: 20,
                      paddingRight: 10,
                      paddingBottom: 5,
                    }}
                  />{" "}
                  Google
                </button>

                <button>
                  <AiFillFacebook
                    style={{
                      color: "blue",
                      width: 20,
                      height: 20,
                      paddingRight: 10,
                      paddingBottom: 5,
                    }}
                  />
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="signup_row3">
          {/* <div className="signup_row3"> */}
          <label className="signup_new">By Signing up you agree to our </label>
          <label className="signup_join">Terms of service</label>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
export default Signup;
