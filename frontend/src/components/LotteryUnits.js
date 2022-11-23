import "./LotteryUnits.css";
import MyTimer from "./Timer";

export default function LotteryUnits({time,lotterydetails }) {
  console.log("in units",lotterydetails)
  return (
    <>
      <div className="LotteryUnits_outer">
        <div className="LotteryUnits_col">
          {lotterydetails.map((itm,index)=>{ 
            return<>
            <div className="LotteryUnits_col_row">
            <button className="LotteryUnits_sell">
                     
                      {itm.txtLotteryname}
            </button>
          </div>
          <div className="LotteryUnits_col_row">
            <button className="LotteryUnits_date">{itm.dtLotterydrawdate}</button>
          </div>
          </>
          })}
         
        
          
         
          <div className="LotteryUnits_col_rowleft">
            <button className="LotteryUnits_buy">Buy</button>
          </div>
        </div>
        <div className="LotteryUnits_col">
          <MyTimer />
        </div>
      </div>
    </>
  );
}
