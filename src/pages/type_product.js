import Header from "../components/header";
import TypeProductContent from "../components/type_product_content";
import Footer from "../components/footer";

function TypeProduct() {
    return (
        <>
             <div className="App">
                <Header/>
                <br/>
                <TypeProductContent/>
                <br/>
                <Footer/>
            </div>
        </>
    );
}

export default TypeProduct;