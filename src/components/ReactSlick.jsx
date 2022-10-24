import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/reactSlick.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={
        className && "TopBanner_arrow__BN_7d TopBanner_nextArrow__6wqx0"
      }
      onClick={onClick}
    >
      <span className="SvgIcon_SvgIcon__root__8vwon">
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={
        className && "TopBanner_arrow__BN_7d TopBanner_prevArrow__B7nqk"
      }
      onClick={onClick}
    >
      <span className="SvgIcon_SvgIcon__root__8vwon">
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </span>
    </div>
  );
}

class ReactSlick extends Component {
  render() {
    const settings = {
      infinite: true, //무한 반복 옵션
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, // 세로 방향 슬라이드 옵션
      draggable: true, //드래그 가능 여부
      variableWidth: true,
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="TopBanner_TopBanner__yxapE">
        <Slider {...settings}>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&amp;w=1060&amp;q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>마키나락스에 세로들어와!</h2>
                  <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1850%2F43625ed8.jpg&w=1060&q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>10월 원티드살롱</h2>
                  <h3>HR담당자를 위한 네트워킹</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>Startup Lead Group Coaching</h2>
                  <h3>팀장을 위한 그룹코칭</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&amp;w=1060&amp;q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>마키나락스에 세로들어와!</h2>
                  <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1850%2F43625ed8.jpg&w=1060&q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>10월 원티드살롱</h2>
                  <h3>HR담당자를 위한 네트워킹</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div>
              <div style={{ width: 1060, display: "inline-block" }}>
                <div className="Image_Image__T6WBp">
                  <Link href="#" className="">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100"
                      alt="마키나락스에 세로들어와!"
                      className="Image_Image__image__Y2rLN"
                    />
                  </Link>
                </div>
                <div className="Information_Information__SwERN Information_Information__active__5qVDq">
                  <h2>Startup Lead Group Coaching</h2>
                  <h3>팀장을 위한 그룹코칭</h3>
                  <hr className="Divider_Divider__root__f2LD0 Information_Information__divider__Z8vel" />
                  <Link
                    href="#"
                    className="Button_Button__root__V1ie3 Button_Button__text__GCOTx Button_Button__textPrimary__hcFzK Button_Button__sizeMedium__k0A1w Information_Information__directButton__8Kgp3"
                    aria-label=""
                  >
                    <span className="Button_Button__label__1Kk0v">
                      바로가기
                      <span className="Button_Button__endIcon__MpDfc">
                        <span className="SvgIcon_SvgIcon__root__8vwon">
                          <svg
                            className="SvgIcon_SvgIcon__root__svg__DKYBi"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlick;
