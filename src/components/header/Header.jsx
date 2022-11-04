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
import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import ModalPw from "./ModalPw";
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

  //서치바 오픈
  const [clickSearchBtn0, setClickSearchBtn0] = useState(false);
  const SearchBarOn0 = () => {
    setClickSearchBtn0(true);
  };

  //로그인 유효성 검사
  const User = { email: "wanted@gmail.com", pw: "min1234!!" };

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // eslint-disable-line
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; // eslint-disable-line
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  //로그인 모달창 on/off
  const [onModal, setOnModal] = useState(0);
  const modalOn = () => {
    setOnModal(1);
  };
  const modalOff = () => {
    setOnModal(0);
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
        {props.clickSearchBtn && (
          <SearchBar
            clickSearchBtn={props.clickSearchBtn}
            setClickSearchBtn={props.setClickSearchBtn}
          />
        )}
        {clickSearchBtn0 && (
          <SearchBar
            clickSearchBtn0={clickSearchBtn0}
            setClickSearchBtn0={setClickSearchBtn0}
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
      {onModal === 1 && (
        <ModalLogin
          modalOff={modalOff}
          setOnModal={setOnModal}
          email={email}
          handleEmail={handleEmail}
          emailValid={emailValid}
          User={User}
          notAllow={notAllow}
          setNotAllow={setNotAllow}
        />
      )}
      {onModal === 2 && (
        <ModalPw
          modalOff={modalOff}
          email={email}
          pw={pw}
          handlePw={handlePw}
          User={User}
          notAllow={notAllow}
          setNotAllow={setNotAllow}
          emailValid={emailValid}
          pwValid={pwValid}
        />
      )}
      {onModal === 3 && <ModalSign modalOff={modalOff} />}
    </>
  );
};

export default Header;
