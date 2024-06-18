import React, { useEffect } from "react";
import useMenuToggle from "../hooks/useMenuToggle";

const Header = () => {
  useMenuToggle();

  return (
    <header id="page-topheader">
      <div className="page-topheader">
        <div className="topheader">
          <div className="logo">
            <img src="/assets/pic/icon.svg" alt="Logo" />
          </div>
          <div className="menu-icon">
            <img src="/assets/pic/menu-icon.svg" alt="Menu Icon" />
          </div>
          <nav className="menu">
            <ul className="menulist">
              <li className="menuitem">
                <a className="menulink" href="#page-topheader">
                  Trang chủ
                </a>
              </li>
              <li className="menuitem">
                <a className="menulink" href="#page-introduction">
                  Giới thiệu
                </a>
              </li>
              <li className="menuitem">
                <a className="menulink" href="#service">
                  Dịch vụ
                </a>
              </li>
              <li className="menuitem">
                <a className="menulink" href="#community">
                  Cộng đồng
                </a>
              </li>
              <li className="menuitem">
                <a className="menulink" href="#page-news-section">
                  Tin tức
                </a>
              </li>
              <li className="menuitem">
                <a className="menulink" href="#contact-section">
                  Khách hàng
                </a>
              </li>
              <li className="contact-link">
                <a className="menulink" href="#page-sub">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="title">
        <h1>HUGS AGENCY</h1>
        <p>KẾT NỐI THƯƠNG HIỆU VỚI NGƯỜI DÙNG MẠNG</p>
      </div>
      <aside className="social">
        <a href="#">
          <img src="/assets/pic/bright_icon.svg" alt="Bright" />
        </a>
        <a href="#">
          <img src="/assets/pic/fb_icon.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/assets/pic/zalo_icon.svg" alt="Zalo" />
        </a>
        <a href="#">
          <img src="/assets/pic/skype_icon.svg" alt="Skype" />
        </a>
        <a href="#">
          <img src="/assets/pic/phone_icon.svg" alt="Phone" />
        </a>
      </aside>
    </header>
  );
};

export default Header;
