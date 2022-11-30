import "./Userprofile.css";
import Header from "../components/HeaderUser";
import Footer from "../components/Footer";
import List from "../components/List"
import Useredit from "../components/UserProfileedit";
import Collapsible from "react-collapsible";
import { GrAddCircle } from "react-icons/gr";
import Bankedits from "../components/Bankedit";
export default function Userprofile() {
  return (
    <div className="userprofile_container">
      <div className="userprofile_header"><Header /></div>
      

      <div className="userprofile_col_tab">
        <Collapsible
          trigger={
            <div className="userprofile_col_tab_icon">
              <GrAddCircle />
              <label>Lottery info</label>
            </div>
          }
        >
          <List/>
        </Collapsible>
      </div>

      <div className="userprofile_col_tab">
        <Collapsible
          trigger={
            <div className="userprofile_col_tab_icon">
              <GrAddCircle />
              <label>Personal info</label>
            </div>
          }
        >
          <Useredit/>
        </Collapsible>
      </div>

      <div className="userprofile_col_tab">
        <Collapsible
          trigger={
            <div className="userprofile_col_tab_icon">
              <GrAddCircle />
              <label>Bank info</label>
            </div>
          }
        >
          <div className="userprofile_col_tab_content3"><Bankedits /></div>
        </Collapsible>
      </div>

      <div className="userprofile_footer"><Footer /></div>
    </div>
  );
}
