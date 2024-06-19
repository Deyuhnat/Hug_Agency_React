import React from "react";

const CustomerPage = () => {
  return (
    <div className="page-customer">
      <div className="customer">
        <h2 className="customer-title">Khách hàng của HUGS AGENCY</h2>
        <p>
          <img
            src="/assets/pic/customer-line.svg"
            alt="customer title line"
            className="cus-line"
          />
        </p>
        <div className="customer-logos">
          <img src="/assets/pic/fpt-icon.svg" alt="FPT Logo" className="logo" />
          <img
            src="/assets/pic/shopee-icon.svg"
            alt="Shopee Logo"
            className="logo"
          />
          <img
            src="/assets/pic/lazada-icon.svg"
            alt="Lazada Logo"
            className="logo"
          />
          <img
            src="/assets/pic/pharmacy-icon.svg"
            alt="Pharmacity Logo"
            className="logo"
          />
          <img
            src="/assets/pic/diemmay-icon.svg"
            alt="Cholon Logo"
            className="logo"
          />
        </div>
        <h2>Đối tác khác</h2>
        <p>
          <img
            src="/assets/pic/customer-line.svg"
            alt="customer title line"
            className="cus-line"
          />
        </p>
        <div className="partner-logos">
          <img
            src="/assets/pic/bytedance-icon.svg"
            alt="ByteDance Logo"
            className="logo"
          />
          <img src="/assets/pic/be-icon.svg" alt="Be Logo" className="logo" />
          <img
            src="/assets/pic/okexe-icon.svg"
            alt="Okxe Logo"
            className="logo"
          />
          <img
            src="/assets/pic/samsung-icon.svg"
            alt="Samsung Logo"
            className="logo"
          />
          <img
            src="/assets/pic/fila-icon.svg"
            alt="Fila Logo"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
