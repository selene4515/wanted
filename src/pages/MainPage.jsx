import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import "../styles/banner.css";
import "../styles/main.css";
import Slider from "react-slick";

const MainPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "//code.jquery.com/jquery-1.11.0.min.js";
    script1.src = "//code.jquery.com/jquery-migrate-1.2.1.min.js";
    script2.src =
      "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    script.async = true;
    script1.async = true;
    script2.async = true;
    document.body.appendChild(script, script1, script2);
  }, []);

  const autoplay = {
    infinite: true, //무한 반복 옵션
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    // prevArrow:
    //   "<button type='button' className='TopBanner_arrow__BN_7d TopBanner_prevArrow__B7nqk'><span className='SvgIcon_SvgIcon__root__8vwon'><svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'><path d='m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z'></path></svg></span></button>",
    // nextArrow:
    //   "<button type='button' className='TopBanner_arrow__BN_7d TopBanner_nextArrow__6wqx0'><span className='SvgIcon_SvgIcon__root__8vwon'><svg className='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'><path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'></path></svg></span></button>",
    draggable: true, //드래그 가능 여부
    variableWidth: true,
    centerMode: true,
  };

  return (
    <div>
      <Header />
      <div className="TopBanner_TopBanner__yxapE">
        <Slider {...autoplay}>
          <div className=" ">
            <div>
              <div style={{ width: "100%", display: "inline-block" }}>
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
              <div style={{ width: "100%", display: "inline-block" }}>
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
              <div style={{ width: "100%", display: "inline-block" }}>
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
              <div style={{ width: "100%", display: "inline-block" }}>
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
              <div style={{ width: "100%", display: "inline-block" }}>
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
              <div style={{ width: "100%", display: "inline-block" }}>
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
      <Footer />
    </div>
  );
};

export default MainPage;
