import React from "react";

const Services = () => {
  return (
    <div id="service" className="service">
      <div className="services-section">
        <div>
          <h2 className="services-title">Dịch vụ của HUGS agency chúng tôi</h2>
          <h1 className="service-line">
            <img src="/assets/pic/line.svg" alt="Line Dv Website" />
          </h1>
          <div className="services-container">
            <div className="service-item">
              <img src="/assets/pic/socialmedia.svg" alt="Social Media" />
              <p>SOCIAL MEDIA</p>
            </div>
            <div className="service-item">
              <img
                src="/assets/pic/bookingpr.svg"
                alt="Influencer & KOLS Booking PR"
              />
              <p>INFLUENCER & KOLS BOOKING PR</p>
            </div>
            <div className="service-item">
              <img src="/assets/pic/organize-event.svg" alt="Tổ Chức Sự Kiện" />
              <p>TỔ CHỨC SỰ KIỆN</p>
            </div>
            <div className="service-item">
              <img
                src="/assets/pic/website-service.svg"
                alt="Dịch Vụ Website"
              />
              <p>DỊCH VỤ WEBSITE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
