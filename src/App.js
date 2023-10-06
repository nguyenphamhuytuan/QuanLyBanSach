import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import ThanhToan from './pages/thanhtoan';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/san_pham" element={<Product/>}></Route>
          <Route path="/gio_hang" element={<Cart/>}></Route>
          <Route path="/thanh_toan" element={<ThanhToan/>}></Route>
        </Routes>
      </>
    );
}

export default App;