var express = require("express");
var app = express();
var mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());
const otpGenerator = require("otp-generator");
var nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "lotterydrums",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

app.post("/uservalidate", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  console.log(req.body);
  let sql =
    "select id from tblusers where txtUemail='" +
    username +
    "' and txtUpassword='" +
    password +
    "';";
  console.log("sql", sql);
  con.query(sql, (err, result) => {
    if (result != "") {
      console.log(result);
      res.send(result);
    } else {
      console.log(result);

      res.send("User doesn't exist");
    }
  });
});

app.post("/insertuser", (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let uname = req.body.uname;
  let password = req.body.password;

  let sql =
    "insert into tblusers (txtFname,txtLname,txtUpassword,txtUemail) values('" +
    fname +
    "','" +
    lname +
    "','" +
    password +
    "','" +
    uname +
    "')";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/otpgenerate", async (req, res) => {
  let id = req.body.newid;
  let email = "";
  console.log(id);
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
  let sql = await ("update tblusers set txtOtp='" +
    otp +
    "' where id ='" +
    id +
    "';");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("sql", sql);
  });
  let sql1 = await ("select txtUemail,txtOtp from tblusers where id='" +
    id +
    "';");
  con.query(sql1, (err, result) => {
    res.send(result);
  });
});
app.post("/sendmail", (req, res) => {
  let otp = req.body.otp;
  let email = req.body.email;
  console.log("email ois", req.body);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "archanacs154@gmail.com",
      pass: "ixeebzxtnirvxogh",
    },
  });

  var mailOptions = {
    from: "archanacs154@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: "Your OTP is " + otp,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send(otp);
  });
});

app.post("/verify", (req, res) => {
  let otp = req.body.otp;
  let id = req.body.id;
  let sql = "select txtOtp from tblusers where id='" + id + "'; ";
  con.query(sql, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/confirmuser", (req, res) => {
  let id = req.body.id;
  let sql = "update tblusers set txtDeleteflag=1 where id='" + id + "';";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/drawticket", (req, res) => {
  let sql =
    "SELECT txtLotteryname,dtLotterydrawdate FROM tbllotterymaster WHERE dtLotterydrawdate > NOW()  ORDER BY dtLotterydrawdate LIMIT 1; ";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.post("/lotterydetails", (req, res) => {
  let sql =
    "SELECT tblunit.id as id ,tbllotterymaster.txtLotteryname as Lotteryname,DATE_FORMAT(tbllotterymaster.dtLotterydrawdate,'%M- %d-%Y')as Drawdate,tblunit.txtFirstchoicenumber as Firstnumber,tblunit.txtSecondchoicenumber as Secondnumber,tblunit.txtThirdchoicenumber as Thirdnumber,tblunit.txtFourthchoicenumber as Fourthnumber,tblunit.txtFifthoicenumber as Fifthnumber,tbllotterymaster.txtCost as Price FROM tbllotterymaster JOIN tblunit on tbllotterymaster.id=tblunit.refLotterymaster JOIN tblusers on tblusers.id=tblunit.refUser where tblusers.id=1 and tblunit.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/Delete", (req, res) => {
  let sql = "UPDATE tblunit SET txtDeleteflag=1 where id=" + req.body.id + ";";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// app.post("/Numbers", (req, res) => {
//   let sql =
//     "select id, txtFirstchoicenumber, txtSecondchoicenumber, txtThirdchoicenumber, txtFourthchoicenumber, txtFifthoicenumber from tblresultmaster;";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send(result);
//   });
// });

app.post("/Lotterylist", (req, res) => {
  // let id=req.body.id;
  // let sql="SELECT lm.txtLotteryname , count(ut.id) as units  FROM tblunit ut JOIN tbllotterymaster lm ON ut.refLotterymaster = lm.id WHERE lm.id ='"+ id + "'";
  let sql =
    "SELECT lm.txtLotteryname AS Lotterymaster, COUNT(ut.id)  AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id GROUP BY lm.txtLotteryname HAVING Unitsold > 1";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server running in port 8080");
});
