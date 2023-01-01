var express = require("express");
var app = express();
var mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());
const otpGenerator = require("otp-generator");
var nodemailer = require("nodemailer");
const { response } = require("express");
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
    "SELECT txtLotteryname, date_format( dtLotterydrawdate,'%y-%m-%d') as drawdate FROM tbllotterymaster WHERE dtLotterydrawdate > NOW()ORDER BY dtLotterydrawdate LIMIT 1; ";
  con.query(sql, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.post("/unitcheckout", (req, res) => {
  let sql =
    "SELECT tblunit.id as id ,tbllotterymaster.txtLotteryname as Lotteryname,DATE_FORMAT(tbllotterymaster.dtLotterydrawdate,'%M- %d-%Y')as Drawdate,tblunit.txtFirstchoicenumber as Firstnumber,tblunit.txtSecondchoicenumber as Secondnumber,tblunit.txtThirdchoicenumber as Thirdnumber,tblunit.txtFourthchoicenumber as Fourthnumber,tblunit.txtFifthoicenumber as Fifthnumber,tbllotterymaster.txtCost as Price FROM tbllotterymaster JOIN tblunit on tbllotterymaster.id=tblunit.refLotterymaster JOIN tblusers on tblusers.id=tblunit.refUser where tblusers.id=1 and tblunit.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/unitdelete", (req, res) => {
  let sql = "UPDATE tblunit SET txtDeleteflag=1 where id=" + req.body.id + ";";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/checkouttotal", (req, res) => {
  let sql =
    "SELECT tblunit.id as id,sum(tbllotterymaster.txtCost) as Totalcost FROM tbllotterymaster JOIN tblunit on tbllotterymaster.id=tblunit.refLotterymaster JOIN tblusers on tblusers.id=tblunit.refUser where tblusers.id=1 and tblunit.txtDeleteflag=0";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/Unitsold", (req, res) => {
  let sql =
    "SELECT lm.txtLotteryname AS Lotterymaster,DATE_FORMAT(lm.dtLotterydrawdate,'%M-%d-%Y') AS DrawDate,COUNT(ut.id) AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id where  ut.txtDeleteflag = 0 GROUP BY lm.txtLotteryname having Unitsold>1";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/Unitlist", (req, res) => {
  let sql =
    "SELECT tblunit.id AS Unitid,CONCAT(tblusers.txtFname ,' ',tblusers.txtLname) AS Name,tblusers.txtUemail as Email,tblunit.txtFirstchoicenumber AS Firstnumber,tblunit.txtSecondchoicenumber AS Secondnumber,tblunit.txtThirdchoicenumber AS Thirdnumber,tblunit.txtFourthchoicenumber AS Fourthnumber,tblunit.txtFifthoicenumber AS Fifthnumber,tbllotterymaster.txtLotteryname as Lotteryname,DATE_FORMAT(tblunit.txtPurchaseddate, '%M %d %Y') as datepurchased,tblunit.txtDeleteflag as unconfirmedunits,tblunit.dtUpdatedOn FROM tbllotterymaster JOIN tblunit ON tbllotterymaster.id = tblunit.refLotterymaster JOIN tblusers ON tblunit.refUser = tblusers.id where tblunit.dtUpdatedOn=0 order by datepurchased desc";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/Unitpasstolottery", (req, res) => {
  let sql = "UPDATE tblunit SET dtUpdatedOn = 1 WHERE tblunit.id=1";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/addlottery", (req, res) => {
  let lotteryname = req.body.lotteryname;
  let drawdate = req.body.drawdate;
  let lotteryprize = req.body.lotteryprize;
  let ticketcost = req.body.ticketcost;
  let userid = req.body.userid;

  console.log(req.body);
  let sql =
    "insert into tbllotterymaster (txtLotteryname,dtLotterydrawdate,txtLotteryprize,txtCost,txtCreatedBy,txtCreatedOn) values('" +
    lotteryname +
    "','" +
    drawdate +
    "'," +
    lotteryprize +
    "," +
    ticketcost +
    ",'admin',curdate())";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/lotteryfetch", (req, res) => {
  console.log(req.body);
  let sql =
    "select id, txtLotteryname as lotteryname ,date_format(dtLotterydrawdate,'%y-%m-%d') as drawdate,txtLotteryprize as Prizemoney ,txtUpdatedBy,dtUpdatedOn,txtDeleteflag  from tbllotterymaster where txtDeleteflag =0";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/lotterydelete", (req, res) => {
  let id = req.body.id;
  // let userid = req.body.userid;
  console.log(req.body);
  let sql =
    "UPDATE tbllotterymaster SET txtDeleteflag = 1,txtUpdatedBy = 'admin',dtUpdatedOn = CURDATE() WHERE tbllotterymaster.id = '" +
    id +
    "'";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/addnewbank", (req, res) => {
  let acctowner = req.body.acctowner;
  let accno = req.body.accno;
  let bankname = req.body.bankname;
  let branch = req.body.branch;
  let ifsc = req.body.ifsc;
  let buserid = req.body.buserid;
  var sql =
    "insert into tblbankdetails (txtAccountowner, txtAccountnumber,txtBankname, txtBranch, txtIfsc, refUser) values ('" +
    acctowner +
    "', '" +
    accno +
    "', '" +
    bankname +
    "', '" +
    branch +
    "', '" +
    ifsc +
    "', '" +
    buserid +
    "');";
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/viewbank", (req, res) => {
  var sql =
    "SELECT txtBankname FROM lotterydrums.tblbankdetails where refUser=1;";
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/Lotterylist", (req, res) => {
  let sql =
    "SELECT lm.txtLotteryname AS Lotterymaster, COUNT(ut.id)  AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id GROUP BY lm.txtLotteryname HAVING Unitsold > 1";

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//--------------winner------------------//

app.post("/winners", (req, res) => {
  var sql ="select count(id) as winnners from tblunit;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//---------------linemessageapi---------------//

app.post("/tickets", (req, res) => {
    var iduser=req.body.userid;
    var sql ="select count(id) as number from tblunit where txtPurchaseddate=curdate() && refUser='"+iduser+"';"
    console.log(sql)
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });

//------------------userprofileedit---------------//

app.post("/profile", (req, res) => {
  let userid = req.body.userid;
  var sql ="select TU.id,TU.txtFname,TU.txtLname,TU.txtUemail,TU.txtUphoneno,TU.txtaddress,TS.txtStatename,TD.txtDistrict,TC.txtCountryname from tblusers TU join tbldistrict TD on TU.refDistrict=TD.id join tblstate TS on TU.refState=TS.id join tblcountry TC on TS.refCountryid=TC.id where tu.id='"+userid+"';"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/fetchcity",(req,res)=>{
  var sql="SELECT TD.id,TD.txtDistrict FROM tbldistrict TD;"
  con.query(sql,function(err,result){
    if(err) throw err;
    res.send(result);
  });
});



//-----------------userpasswordedit--------------//

app.post("/updatepassword",(req,res)=>{
  let userid=req.body.userid;
  let newpassword=req.body.password;
  var sql="update tblusers set txtUpassword='"+newpassword+"' where tblusers.id='"+userid+"';"
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});
app.post("/showpassword",(req,res)=>{
  let userid=req.body.userid;
  var sql="select TU.id,TU.txtUpassword from tblusers TU where  TU.id='"+userid+"';"
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/userunitfetch",(req,res)=>{
  let fetchid=req.body.fetchid;
  var sql="select tblresultmap.id as resultid, tbllotterymaster.txtLotteryName, date_format(tbllotterymaster.dtLotterydrawdate, '%Y-%m-%d') as DrawDate, tblusers.id as userid, sum(tblresultmap.txtPrizemoney) as TotalPrize, tblprovider.txtProvidername from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tblusers on tblunit.refUser = tblusers.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id where tblusers.id='3' group by tbllotterymaster.txtLotteryname; ";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.post("/userwinningtodatefetch", (req,res) => {
  var sql = "select tblresultmap.id, tblprovider.txtProvidername, tblusers.id as userid, sum(tblresultmap.txtPrizemoney) as ProviderTotal from tblresultmap join tblunit on tblresultmap.refUnitid = tblunit.id join tbllotterymaster on tblunit.refLotterymaster = tbllotterymaster.id join tblusers on tblunit.refUser = tblusers.id join tblprovider on tbllotterymaster.refProvider = tblprovider.id where tblusers.id='3' group by tblprovider.txtProvidername";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server running in port 8080");
});
