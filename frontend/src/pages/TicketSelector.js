import Header from "../components/HeaderUser";
import Drawinformation from "../components/Drawresult";
import Lineselector from "../components/Lineselector";
import Linemessage from "../components/Linemessage";
import Footer from "../components/Footer";
export default function TicketSelector(){
    return(

        <>
        <Header/>
        <Drawinformation/>
        <Lineselector/>
        <Linemessage/>
        <Footer/>
        </>
    );
}