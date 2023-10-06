import Header from "../components/header";
import Thanh_Toan from "../components/Thanh_Toan";
import Footer from "../components/footer";

function ThanhToan() {
    return (
        <>
           <div className="App">
                <Header/>
                <br/>
                <Thanh_Toan/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}

export default ThanhToan;