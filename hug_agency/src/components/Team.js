import React from "react";
import Slider from "react-slick";

const TeamSection = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <div id="page-team-section" className="page-team-section">
      <div className="team-section">
        <div className="teamCEO-title">
          <h1>Team HUGS</h1>
          <p className="tagline">
            Chúng tôi là những người đồng đội luôn cùng nhìn về một hướng!
          </p>
        </div>

        <div className="team-images">
          <div className="ceo-column1">
            <div className="teamCEO-title-column">
              <h1 className="team-heading">Team HUGS</h1>
              <p className="tagline-column">
                Chúng tôi là những người đồng đội luôn cùng nhìn về một hướng!
              </p>
            </div>
            <div className="image-column-1">
              <img
                src="/assets/pic/teamwork.png"
                alt="Team Image 5"
                className="team-image"
              />
              <img
                src="/assets/pic/CEO-3.png"
                alt="Team Image 3"
                className="team-image"
              />
            </div>
          </div>

          <div className="ceo-column2">
            <img
              src="/assets/pic/CEO-hung.png"
              alt="Team Image 1"
              className="team-image"
            />
            <img
              src="/assets/pic/teamwork2.png"
              alt="Team Image 6"
              className="team-image"
            />
          </div>

          <div className="ceo-column3">
            <img
              src="/assets/pic/CEO-2.png"
              alt="Team Image 2"
              className="team-image left"
            />
            <img
              src="/assets/pic/CEO-4.png"
              alt="Team Image 4"
              className="team-image right"
            />
          </div>
        </div>
        <div className="team-slider">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="/assets/pic/CEO-hung.png"
                alt="Team Image 1"
                className="team-image"
              />
              <p className="team-name">Lê Việt Hưng</p>
              <p className="team-role">CEO - Nhà sáng lập</p>
            </div>
            <div>
              <img
                src="/assets/pic/CEO-2.png"
                alt="Team Image 2"
                className="team-image"
              />
              <p className="team-name">Lê Việt Hưng</p>
              <p className="team-role">CEO - Nhà sáng lập</p>
            </div>
            <div>
              <img
                src="/assets/pic/CEO-3.png"
                alt="Team Image 3"
                className="team-image"
              />
              <p className="team-name">Lê Việt Hưng</p>
              <p className="team-role">CEO - Nhà sáng lập</p>
            </div>
            <div>
              <img
                src="/assets/pic/CEO-4.png"
                alt="Team Image 4"
                className="team-image"
              />
              <p className="team-name">Lê Việt Hưng</p>
              <p className="team-role">CEO - Nhà sáng lập</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
