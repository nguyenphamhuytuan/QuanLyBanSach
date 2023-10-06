import { NavLink } from "react-router-dom";
import fatimes from "react-icons/fa"
import { IconName } from "react-icons/bs";
function Header() {
    return (
        <>
            <header>
                
                    <div className="topnav">
                        
                    <NavLink to="/gio_hang" href="#contact">Giỏ Hàng</NavLink>

                    <NavLink to="/thanh_toan" href="#contact">Thanh Toán</NavLink>
                
                
                    
                    </div>

                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        <NavLink to="/" className="navbar-brand">Trang Chủ</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <NavLink to="/ve_chung_toi" className="nav-link active" aria-current="page">Về Chúng Tôi</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/san_pham" className="nav-link active">Sản Phẩm</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/tin_tuc" className="nav-link active">Tin Tức</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/lien_he" className="nav-link active">Liên Hệ</NavLink>
                                </li>
                                
                            </ul>
                            
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;