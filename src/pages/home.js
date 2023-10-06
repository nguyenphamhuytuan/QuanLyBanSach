import Header from "../components/header";
import Content from "../components/home_content";
import Footer from "../components/footer";
import Banner from "../components/banner";

function Home(){
    return(
        <>
            <div className="App">
                <Header/>
                <br/>
                <Banner/>
                <br/>
                <Content/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}
export default Home;