import "../style/Editheader.css";
export default function Editheader(){
    return(
        <div className="Editheader">
            <div className="Editheader_raw">
                <div className="Editheader_raw_btn"><button>Profile</button></div>
                <div className="Editheader_raw_btn"><button>Password</button></div>
                <div className="Editheader_raw_btn" id="demo" onClick={(e)=>{document.getElementById("demo").style.backgroundColor = "BLUE"}}><button>Bank</button></div>
            </div>
        </div>
    );
}
