import { Link } from "react-router-dom";
import "./Header.css";
import "./DropMenu.css";
import { ReactComponent as NewSvg } from "./new.svg";
import { ReactComponent as BetaSvg } from "./beta.svg";
import { ReactComponent as SurchSvg } from "./surchBtn.svg";
import Category from "./Category";
import CategorySub from "./CategorySub";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <div className="header_div">
          <div className="header_div_logo">
            <button id="hambuger">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                alt="햄버거아이콘"
              ></img>
            </button>
            <Link to="/">
              <i className="icon-logo_new"></i>
            </Link>
          </div>
          <ul className="header_div_menu">
            <li>
              <Link to="/">채용</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <Link to="/">직군별 연봉</Link>
            </li>
            <li>
              <Link to="/">이력서</Link>
            </li>
            <li>
              <Link to="/">
                커뮤니티
                <em>
                  <NewSvg />
                </em>
              </Link>
            </li>
            <li>
              <Link to="/">프리랜서</Link>
            </li>
            <li>
              <Link to="/">
                AI 합격예측
                <em>
                  <BetaSvg />
                </em>
              </Link>
            </li>
          </ul>
          <div className="header_div_join">
            <ul>
              <li>
                <button className="searchBtn">
                  <SurchSvg />
                </button>
              </li>
              <li id="joinBtn">
                <button className="joinBtn" type="button">
                  회원가입/로그인
                </button>
              </li>
              <li className="leftDivision">
                <Link to="/" className="dashboardBtn">
                  기업 서비스
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="OverlayJobCategory_Container__C3ngs" role="presentation">
        <div>
          <nav class="Explore_Container__QaOhW" aria-hidden="true">
            <section class="Explore_MainCategory__rpxri">
              <Link to="/">
                <em>
                  <h2>직군 전체</h2>
                </em>
              </Link>
              <Category />
            </section>
            <section class="Explore_SubCategory__xIcAi">
              <CategorySub />
            </section>
          </nav>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </>
  );
};

export default Header;
