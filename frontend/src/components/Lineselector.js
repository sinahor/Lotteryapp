import "../styles/Lineselector.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
export default function Lineselector() {
    const[count,setCount]=useState(0);
 
    const [arr, setArr] = useState(

        [{ value: 1, selected: false }, { value: 2, selected: false }, { value: 3, selected: false }, { value: 4, selected: false },
        { value: 5, selected: false }, { value: 6, selected: false }, { value: 7, selected: false }, { value: 8, selected: false },
        { value: 9, selected: false }, { value: 10, selected: false }, { value: 11, selected: false }, { value: 12, selected: false },
        { value: 13, selected: false }, { value: 14, selected: false }, { value: 15, selected: false }, { value: 16, selected: false },
        { value: 17, selected: false }, { value: 18, selected: false }, { value: 19, selected: false }, { value: 20, selected: false },
        { value: 21, selected: false }, { value: 22, selected: false }, { value: 23, selected: false }, { value: 24, selected: false },
        { value: 25, selected: false }, { value: 26, selected: false }, { value: 27, selected: false }, { value: 28, selected: false },
        { value: 29, selected: false }, { value: 30, selected: false }, { value: 31, selected: false }, { value: 32, selected: false },
        { value: 33, selected: false }, { value: 34, selected: false }, { value: 35, selected: false }, { value: 36, selected: false },
        { value: 37, selected: false }, { value: 38, selected: false }, { value: 39, selected: false }, { value: 40, selected: false },
        { value: 41, selected: false }, { value: 42, selected: false }, { value: 43, selected: false }, { value: 44, selected: false },
        { value: 45, selected: false }, { value: 46, selected: false }, { value: 47, selected: false }, { value: 48, selected: false },
        { value: 49, selected: false }]);


    const handleClick = (itm, indx) => {
        let temp = [...arr];
        // var count;
        temp[indx].selected = temp[indx].selected ? false : true; 
        
        setArr(temp)

       
        console.log(temp)
        // console.log(count)
    }
   for(var i=0;i<=49;i++)
   {
   
    if(arr.selected==true)
    // alert("hi")
    setCount(count+1)
    // console.log(c)
   }
    

    return (
        <div className="Lineselector">
            <div className="Header">LINE 1</div>
            <div className="Middle">

                <>

                    {
                        arr.map((itm, indx) => {
                            return (
                                <>
                                    <button key={itm} onClick={() => {
                                        handleClick(itm, indx)
                                    }} style={{ backgroundColor: itm.selected === true ? "#3ea6d6" : "white" }}>{indx + 1}
                                    </button>


                                </>
                            )

                        })
                    }
{/* {count} */}
                </>



            </div>
            <div className="Footer">
                <button> <TbArrowsShuffle /></button>
                <button> <AiOutlineClose /></button>


            </div>

        </div>
    )
}
;
