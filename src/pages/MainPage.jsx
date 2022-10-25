import CardTitleTextName from "../components/common/CardTitleTextName";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ReactSlick from "../components/ReactSlick";
import "../styles/banner.css";
import "../styles/main.css";
import dummy from "../json/cardText.json";
import { ReactComponent as RoundQSvg } from "../svg/roundQ.svg";
import MenuSlider from "../components/common/MenuSlider";
import { ReactComponent as ArrowBottomSvg } from "../svg/arrowBottom.svg";
import { ReactComponent as ArrowRightSvg } from "../svg/arrowRight.svg";
import { ReactComponent as SurchSvg } from "../components/header/surchBtn.svg";
import { ReactComponent as CheckSvg } from "../svg/check.svg";
import { Link } from "react-router-dom";

const MainPage = () => {
  const card = dummy.card;
  const cardList = card.map((cardText, index) => (
    <CardTitleTextName
      key={index}
      img={cardText.img}
      title={cardText.title}
      text={cardText.text}
      icon={cardText.icon}
      name={cardText.name}
    />
  ));

  return (
    <div>
      <Header />
      <main className="main">
        <ReactSlick />
        <section className="career">
          <div className="career_div">
            <div className="career_div_title">
              <h2>나에게 필요한 커리어 인사이트</h2>
              <button>
                <RoundQSvg />
              </button>
            </div>
            <div className="career_div_list">
              <MenuSlider />
            </div>
            <ul className="career_div_ul">{cardList}</ul>
            <div className="career_div_more">
              <button>
                <span className="career_div_more_span">
                  더 많은 콘텐츠 보기
                  <span className="career_div_more_span_1">
                    <span>
                      <ArrowBottomSvg />
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>
        <div className="dirline">
          <hr />
        </div>
        <section className="section4li">카드세션</section>
        <div className="dirline">
          <hr />
        </div>
        <section className="section4li">카드세션</section>
        <div className="blueBanner">
          <Link>
            <div className="blueBanner_line">
              <span>
                직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                <em>👀</em>
                <span className="blueBanner_line_spansvg">
                  <ArrowRightSvg />
                </span>
              </span>
            </div>
          </Link>
        </div>
        <section className="section2li">카드세션</section>
        <section className="subBanner">
          <div>
            <div className="subBanner_div">
              <div className="subBanner_div_div1">
                <div>
                  <span>
                    <svg viewBox="0 0 160 31">
                      <path
                        d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </span>
                  <div>구독해야 하는 이유</div>
                </div>
                <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
                <Link href="#">
                  <span className=" ">
                    <span className="subBanner_div_div1_arrow">
                      <span>
                        <CheckSvg />
                      </span>
                    </span>
                    첫 구독 0원 신청하기
                  </span>
                </Link>
              </div>
              <div className="subBanner_div_div2">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&amp;w=800&amp;q=90"
                  alt="wantedplus"
                  height="158"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="companyinfo">
          <div>
            <div className="companyinfo_title">
              <div>
                <h2>채용 정보를 찾고 계셨나요?</h2>
              </div>
            </div>
            <div className="companyinfo_content">
              <div>
                <Link className="companyinfo_content_icon" href="#">
                  <span>
                    <SurchSvg />
                  </span>
                </Link>
                <Link className="companyinfo_content_text" href="#">
                  <span>
                    채용공고
                    <span className="companyinfo_content_text_span">
                      <span>
                        <ArrowRightSvg />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div>
                <Link className="companyinfo_content_icon" href="#">
                  <span>
                    <svg viewBox="0 0 32 32">
                      <path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path>
                    </svg>
                  </span>
                </Link>
                <Link className="companyinfo_content_text" href="#">
                  <span>
                    내 프로필
                    <span className="companyinfo_content_text_span">
                      <span>
                        <ArrowRightSvg />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div>
                <Link className="companyinfo_content_icon" href="#">
                  <span>
                    <svg viewBox="0 0 32 32">
                      <path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link className="companyinfo_content_text" href="#">
                  <span>
                    매치업
                    <span className="companyinfo_content_text_span">
                      <span>
                        <ArrowRightSvg />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div>
                <Link className="companyinfo_content_icon" href="#">
                  <span>
                    <svg viewBox="0 0 32 32">
                      <path d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"></path>
                    </svg>
                  </span>
                </Link>
                <Link className="companyinfo_content_text" href="#">
                  <span>
                    직군별 연봉
                    <span className="companyinfo_content_text_span">
                      <span>
                        <ArrowRightSvg />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
