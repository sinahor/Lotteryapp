import "./Collapsetab.css";
import { GrAddCircle } from "react-icons/gr";
import Collapsible from "react-collapsible";
import List from './List'
export default function Collapsetab({ heading }) {
  return (
    <div className="collapsibletab">
      <div className="collapsibletab_raw">
        <Collapsible
          trigger={
            <div className="collapsibletab_raw_icon">
              <GrAddCircle />
              <label>{heading}</label>
            </div>
          }
        >
          
          <List />
          
        
          
        </Collapsible>
      </div>
    </div>
  );
}
