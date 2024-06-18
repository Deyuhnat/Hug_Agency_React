import React from "react";

const News = () => {
  return (
    <div id="page-news-section" className="page-news-section">
      <div className="news-section">
        <div className="news-topheader">
          <h2 className="news-header">Tin tức HUGS AGENCY</h2>
          <h2 className="news-line">
            <img src="/assets/pic/line.svg" alt="News Line" />
          </h2>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/hotgirl-pic.png"
              alt="Description 1"
            />
            <div className="news-content">
              <h3 className="news-title">
                Hot girl Đà Thành dịu dàng trong bộ váy màu trắng
              </h3>
            </div>
          </div>
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/football-pic.png"
              alt="Description 2"
            />
            <div className="news-content">
              <h3 className="news-title">
                Trò cưng của Lampard bất ngờ được Messi khen ngợi hết lời
              </h3>
            </div>
          </div>
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/disney-pic.png"
              alt="Description 3"
            />
            <div className="news-content">
              <h3 className="news-title">
                Du lịch Bà Nà để trở về tuổi thơ với những nhân vật hoạt hình
                Disney
              </h3>
            </div>
          </div>
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/bugati-pic.png"
              alt="Description 4"
            />
            <div className="news-content">
              <h3 className="news-title">
                Ra mắt xe Bugati Chiron hơn 40 tỷ với 300 mã lực
              </h3>
            </div>
          </div>
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/lol-pic.png"
              alt="Description 5"
            />
            <div className="news-content">
              <h3 className="news-title">
                Giải đấu Liên Minh Huyền Thoại được tổ chức tại Đà Nẵng
              </h3>
            </div>
          </div>
          <div className="news-item">
            <img
              className="news-image"
              src="/assets/pic/travel-danang-pic.png"
              alt="Description 6"
            />
            <div className="news-content">
              <h3 className="news-title">Du lịch Đà Nẵng mùa nắng này</h3>
            </div>
          </div>
        </div>
        <a href="#" className="news-button">
          XEM THÊM
        </a>
      </div>
    </div>
  );
};

export default News;
