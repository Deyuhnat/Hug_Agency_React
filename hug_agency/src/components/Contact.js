import React from "react";

const Contact = () => {
  return (
    <div id="contact-section" className="contact-section">
      <h2 className="main-title">Liên hệ với chúng tôi</h2>
      <div className="contact-lines">
        <img src="/assets/pic/contact-line.svg" alt="Contact line" />
      </div>
      <div className="contact-page">
        <div className="contact-info">
          <div className="info-item">
            <img src="/assets/pic/address-icon.svg" alt="Address Icon" />
            <div>
              <strong>Địa chỉ</strong>
              <p>55 Lý Thường Kiệt, Hải Châu, TP Đà Nẵng</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/assets/pic/email-icon.svg" alt="Email Icon" />
            <div>
              <strong>Email</strong>
              <p>lienhe@hugs.agency</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/assets/pic/phone-icon.svg" alt="Phone Icon" />
            <div>
              <strong>Số điện thoại</strong>
              <p>0924.392.222</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/assets/pic/fb-icon.svg" alt="Facebook Icon" />
            <div>
              <strong>Fanpage</strong>
              <p>www.fb.com/hugs.agency</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Họ tên</label>
            <input type="text" placeholder="Nhập họ tên" />
            <label htmlFor="phone">Số điện thoại</label>
            <input type="text" placeholder="Nhập số điện thoại" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Nhập địa chỉ email" />
            <label htmlFor="message">Nội dung</label>
            <textarea placeholder="Nhập nội dung"></textarea>
            <button type="submit">NHẬN TƯ VẤN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
