import React from "react";
import Slider from "react-slick";

const Community = () => {
  const sliderSettings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <img src="/assets/pic/vector-left.svg" alt="Previous" />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <img src="/assets/pic/vector-right.svg" alt="Next" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div id="community" className="community">
      <div className="top-info">
        <div>
          <h2 className="title-commu">
            Cộng đồng và <br />
            Đối tác của HUGS AGENCY
          </h2>
          <h2 className="title-commu2">Cộng đồng và Đối tác của HUGS AGENCY</h2>
          <h1 className="line-title-commu">
            <img src="/assets/pic/line2.svg" alt="Liner2" />
          </h1>
        </div>
        <div className="statistics">
          <div className="stat-item">
            <span style={{ color: "#5cbbe5" }}>100</span>
            <br />
            Group cộng đồng
          </div>
          <div className="stat-item">
            <span style={{ color: "#5cbbe5" }}>20</span>
            <br />
            Đối tác tin cậy
          </div>
          <div className="stat-item">
            <span style={{ color: "#5cbbe5" }}>6.000.000</span>
            <br />
            Người dùng facebook
          </div>
          <div className="stat-item">
            <span style={{ color: "#5cbbe5" }}>1000</span>
            <br />
            Influencer & Kols
          </div>
        </div>
      </div>

      <div className="category-icons">
        <div className="category-item">
          <img src="/assets/pic/pretty-icon.svg" alt="Gái Xinh" />
          <span className="category-name">Gái Xinh</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/soccer-icon.svg" alt="Bóng Đá" />
          <span className="category-name">Bóng Đá</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/yoga-icon.svg" alt="Giải Trí" />
          <span className="category-name">Giải Trí</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/car-icon.svg" alt="Xe Cộ" />
          <span className="category-name">Xe Cộ</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/game-icon.svg" alt="Game" />
          <span className="category-name">Game</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/travel-icon.svg" alt="Du Lịch" />
          <span className="category-name">Du Lịch</span>
        </div>
        <div className="category-item">
          <img src="/assets/pic/family-icon.svg" alt="Gia Đình" />
          <span className="category-name">Gia Đình</span>
        </div>
      </div>

      <Slider {...sliderSettings} className="collab-parter">
        <div className="image-slider">
          <div className="slider-image-container">
            <img
              src="/assets/pic/prettygirl.png"
              alt="Slide Image"
              className="slider-image"
              id="sliderImage"
            />
          </div>
          <div className="bottom-slider">
            <div className="image-text">
              <h2 className="title-slider">GÁI XINH ĐÀ THÀNH</h2>
              <img
                className="decorative-line"
                src="/assets/pic/line3.svg"
                alt="Decorative Line"
              />
              <p className="des-slider">Gái xinh</p>
            </div>
          </div>
        </div>
        <div className="image-slider">
          <div className="slider-image-container">
            <img
              src="/assets/pic/prettygirl.png"
              alt="Slide Image"
              className="slider-image"
              id="sliderImage"
            />
          </div>
          <div className="bottom-slider">
            <div className="image-text">
              <h2 className="title-slider">GÁI XINH ĐÀ THÀNH</h2>
              <img
                className="decorative-line"
                src="/assets/pic/line3.svg"
                alt="Decorative Line"
              />
              <p className="des-slider">Gái xinh</p>
            </div>
          </div>
        </div>
        <div className="image-slider">
          <div className="slider-image-container">
            <img
              src="/assets/pic/prettygirl.png"
              alt="Slide Image"
              className="slider-image"
              id="sliderImage"
            />
          </div>
          <div className="bottom-slider">
            <div className="image-text">
              <h2 className="title-slider">GÁI XINH ĐÀ THÀNH</h2>
              <img
                className="decorative-line"
                src="/assets/pic/line3.svg"
                alt="Decorative Line"
              />
              <p className="des-slider">Gái xinh</p>
            </div>
          </div>
        </div>
        <div className="image-slider">
          <div className="slider-image-container">
            <img
              src="/assets/pic/prettygirl.png"
              alt="Slide Image"
              className="slider-image"
              id="sliderImage"
            />
          </div>
          <div className="bottom-slider">
            <div className="image-text">
              <h2 className="title-slider">GÁI XINH ĐÀ THÀNH</h2>
              <img
                className="decorative-line"
                src="/assets/pic/line3.svg"
                alt="Decorative Line"
              />
              <p className="des-slider">Gái xinh</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Community;
