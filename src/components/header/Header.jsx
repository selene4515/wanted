import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/header.css";
import "../../styles/dropMenu.css";
import "../../styles/sign.css";
import { ReactComponent as NewSvg } from "./new.svg";
import { ReactComponent as BetaSvg } from "./beta.svg";
import { ReactComponent as SurchSvg } from "./surchBtn.svg";
import Category from "./Category";
import CategorySub from "./CategorySub";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const [hoverMenu, setHoverMenu] = useState(true);
  const [hoverSub, setHoverSub] = useState(true);
  const mouseOverMenu = () => {
    setHoverMenu(false);
  };
  const mouseLeaveMenu = () => {
    setHoverMenu(true);
    setHoverSub(true);
  };
  const mouseOverSub = () => {
    setHoverSub(false);
  };
  const mouseLeaveSub = () => {
    setHoverSub(true);
  };

  const [clickModal, setClickModal] = useState(false);
  const modalOn = () => {
    setClickModal(true);
  };

  const PclickSearchBtn = props.clickSearchBtn;
  const PsetClickSearchBtn = props.setClickSearchBtn;

  const [clickSearchBtn0, setClickSearchBtn0] = useState(false);
  const SearchBarOn0 = () => {
    setClickSearchBtn0(true);
  };

  return (
    <>
      <div className="header_">
        <div className="header_div">
          <div className="header_div_logo">
            <button>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                alt="햄버거아이콘"
                onMouseOver={mouseOverMenu}
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
                <button className="searchBtn" onClick={SearchBarOn0}>
                  <SurchSvg />
                </button>
              </li>
              <li>
                <button className="joinBtn" type="button" onClick={modalOn}>
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
        {PclickSearchBtn && (
          <SearchBar
            clickSearchBtn={PclickSearchBtn}
            setClickSearchBtn={PsetClickSearchBtn}
            onChangeKeyword={props.onChangeKeyword}
            keyword={props.keyword}
            setKeyword={props.setKeyword}
          />
        )}
        {clickSearchBtn0 && (
          <SearchBar
            clickSearchBtn0={clickSearchBtn0}
            setClickSearchBtn0={setClickSearchBtn0}
            onChangeKeyword={props.onChangeKeyword}
            keyword={props.keyword}
            setKeyword={props.setKeyword}
          />
        )}
      </div>
      <div
        className={
          hoverMenu
            ? "OverlayJobCategory_Container__C3ngs"
            : "OverlayJobCategory_Container__C3ngs_on"
        }
      >
        <div>
          <nav className="Explore_Container__QaOhW" aria-hidden="true">
            <section
              className="Explore_MainCategory__rpxri"
              onMouseOver={mouseOverSub}
              onMouseLeave={mouseLeaveSub}
            >
              <Link to="/">
                <em>
                  <h2>직군 전체</h2>
                </em>
              </Link>
              <Category />
            </section>
            <section
              className={
                hoverSub
                  ? "Explore_SubCategory__xIcAi"
                  : "Explore_SubCategory__xIcAi_on"
              }
              onMouseOver={mouseOverSub}
              onMouseLeave={mouseLeaveMenu}
            >
              <CategorySub />
            </section>
          </nav>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div
        className={
          clickModal ? "Modal_root__aEM8D on" : "Modal_root__aEM8D off"
        }
      >
        <LoginModal clickModal={clickModal} setClickModal={setClickModal} />
      </div>
    </>
  );
};

export default Header;
