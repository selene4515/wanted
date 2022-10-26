import Header from "../components/header/Header";
import "../styles/main.css";
import { ReactComponent as ArrowRighBluetSvg } from "../svg/arrowRight_blue.svg";
import { ReactComponent as ArrowBottomGraySvg } from "../svg/arrowBottom_gray.svg";
import { ReactComponent as ArrowPullBottomSvg } from "../svg/arrowPullBottom.svg";
import { ReactComponent as BookmarkBlueSvg } from "../svg/bookmark_blue.svg";
import CateSlider from "../components/slider/CateSlider";
import { Link } from "react-router-dom";
import dummy from "../json/cardCompeny.json";
import GaebalCard from "../components/card/GaebalCard";
import BannerBottom from "../components/common/BannerBottom";
import { useState, useEffect } from "react";

const GaebalPage = () => {
  const cardCompanyData = dummy.cardCompeny;
  const cardCompanyList = cardCompanyData.map((cardText, index) => (
    <div
      key={index}
      className="slick-slide slick-active slick-current"
      style={{ outline: "none", width: 215 }}
    >
      <div>
        <Link className="Featured_sliderItem__FY8yb">
          <header>
            <div
              className="companyBg undefined"
              style={{
                backgroundImage: `url(${cardText.backImg})`,
              }}
            />
          </header>
          <footer>
            <div
              className="logoCircle undefined"
              style={{
                backgroundImage: `url(${cardText.img})`,
                backgroundSize: "contain",
                backgroundColor: "rgb(255, 255, 255)",
              }}
            />
            <h4>{cardText.name}</h4>
            <h5>{cardText.position}</h5>
          </footer>
        </Link>
      </div>
    </div>
  ));

  const cardGaebalData = dummy.cardGaebal;
  const cardGaebalList = cardGaebalData.map((cardText, index) => (
    <GaebalCard
      key={index}
      backImg={cardText.backImg}
      title={cardText.title}
      name={cardText.name}
      olo={cardText.olo}
      city={cardText.city}
      nara={cardText.nara}
      money={cardText.money}
    />
  ));

  // const content = document.querySelector(".fixedhr");
  // const contentTop = content.getBoundingClientRect().top + window.scrollY;

  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 255) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <Header />
      <div style={{ background: "#fff" }}>
        <article style={{ paddingTop: 40 }} role="navigation">
          <div className="jobTitle">
            <div className="jobTitle_div1">
              <button type="button">
                <span className="jobTitle_div1_span1">개발</span>
                <span className="jobTitle_div1_span2" role="button">
                  <ArrowBottomGraySvg />
                </span>
              </button>
            </div>
            <div className="jobTitle_div2">
              <button type="button">
                <span className="jobTitle_div2_span1">개발 전체</span>
                <span className="jobTitle_div2_span2" role="button">
                  <ArrowBottomGraySvg />
                </span>
              </button>
            </div>
          </div>
        </article>
        <div className="jobList">
          <div>
            <div
              className={
                ScrollActive ? "jobList_ jobList_t fixed" : "jobList_ jobList_t"
              }
            >
              <div className="jobList_cate">
                <div className="jobList_cate_div1">
                  <button type="button" className="jobList_cate_div1_btn">
                    <span className="jobList_cate_div1_btn_span1">
                      지역<span>1</span>
                    </span>
                    <span className="jobList_cate_div1_btn_span2">한국</span>
                  </button>
                  <div className="jobList_cate_div1_div1">
                    <button type="button" className="jobList_cate_div1_btn">
                      <span className="jobList_cate_div1_btn_span1">경력</span>
                      <span className="jobList_cate_div1_btn_span2">전체</span>
                      <ArrowPullBottomSvg />
                    </button>
                  </div>
                  <div className="jobList_cate_div1_div2">
                    <button type="button" className="jobList_cate_div1_btn">
                      <span className="jobList_cate_div1_btn_span1">
                        기술스택
                      </span>
                      <span className=" "></span>
                      <ArrowPullBottomSvg />
                    </button>
                  </div>
                </div>
                <div className="jobList_cate_div2">
                  <div className=" ">
                    <div className="jobList_cate_div2_div">
                      <button className="" type="button">
                        응답률순
                        <ArrowPullBottomSvg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <CateSlider />
            </div>
            <hr className="fixedhr" />
            <div className="jobList_bookm">
              <button type="button">
                <BookmarkBlueSvg />
                <span>북마크 모아보기</span>
                <ArrowRighBluetSvg />
              </button>
            </div>
            <h3>적극 채용 중인 회사</h3>
            <div className="Featured_sliderWrapper__nHmfc nextDisabled prevDisabled lessThanFive">
              <div className="slick-slider Featured_slider__Bnaji lessThanFive nextDisabled slick-initialized">
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: 1075,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    {cardCompanyList}
                  </div>
                </div>
              </div>
            </div>
            <div className="List_List_container__JnQMS">
              <ul className="clearfix">{cardGaebalList}</ul>
            </div>
          </div>
        </div>
        <BannerBottom />
      </div>
    </div>
  );
};

export default GaebalPage;
