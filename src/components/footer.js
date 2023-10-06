function Footer(){
    return(
        <>
            <div className="row see_all">
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Làm Giàu</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Biến Mọi Thứ Thành Tiền</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Người Giàu Có Nhất Thành Babylon</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Thay Đổi Để Thành Công</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Triết Lý Làm Giàu Của Người Do Thái</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Trí Tuệ Do Thái</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Trí Tuệ</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Đắc Nhân Tâm</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Dám Nghĩ Dám Làm</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Trên Đường Băng</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sức Mạnh Của Câu Hỏi</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tư Duy Ngược</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Đời Sống</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Chiến Thắng Con Quỷ Trong Bạn</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Quẳng Gánh Lo Đi Và Vui Sống</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Hạt Giống Tâm Hồn Tập 1</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Thức Tỉnh Mục Đích Sống</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cuộc Sống Không Giới Hạn</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Theo dõi bản tin của chúng tôi</h5>
                            <p>Thông báo hàng tháng về những gì mới và thú vị từ chúng tôi.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email </label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Footer;