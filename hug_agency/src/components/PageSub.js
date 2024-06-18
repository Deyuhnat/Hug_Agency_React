import React from "react";

const PageSub = () => {
  return (
    <div id="page-sub" className="page-sub">
      <div className="subscribe-section">
        <div className="container">
          <div className="logo-bottom">
            <img
              src="/assets/pic/logo_icon.png"
              alt="Hugs Agency Vietnam Logo"
            />
          </div>
          <div className="subscribe-content">
            <h1>Subscribe to our newsletter</h1>
            <p>Hãy để lại email để nhận các thông tin mới nhất từ chúng tôi!</p>
            <div className="bottom-line-2">
              <img src="/assets/pic/bottom-line-2.svg" alt="Res bottom line" />
            </div>
            <div className="subscribe-bar">
              <input type="email" placeholder="Nhập email" />
              <button>SUBSCRIBE</button>
            </div>
            <div className="bottom-line-3">
              <img src="/assets/pic/bottom-line-3.svg" alt="Res bottom line" />
            </div>
            <span>Copyright © 2021 bởi Hugs Agency.</span>
            <div className="protect-icon">
              <img
                src="/assets/pic/protect-icon.svg"
                alt="Protect bottom line"
              />
            </div>
          </div>
          <div className="social-media-icons">
            <span>Theo dõi chúng tôi</span>
            <a href="#">
              <img src="/assets/pic/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/pic/tiktok-icon.svg" alt="TikTok" />
            </a>
            <a href="#">
              <img src="/assets/pic/instra-icono.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/assets/pic/zalo-1-icon.svg" alt="Zalo" />
            </a>
            <a href="#">
              <img src="/assets/pic/sky-icon.svg" alt="Skype" />
            </a>
          </div>
          <div className="background-image">
            <img src="/assets/pic/computer-icon.png" alt="Computer" />
          </div>
        </div>
      </div>
      <div className="last-line">
        <img src="/assets/pic/bottom-line.svg" alt="Bottom line" />
      </div>
    </div>
  );
};

export default PageSub;
