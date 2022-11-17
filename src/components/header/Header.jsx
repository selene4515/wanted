import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/header.css";
import "../../styles/dropMenu.css";
import "../../styles/sign.css";
import { ReactComponent as NewSvg } from "./new.svg";
import { ReactComponent as BetaSvg } from "./beta.svg";
import { ReactComponent as SurchSvg } from "./surchBtn.svg";
import { ReactComponent as BellSvg } from "./bell.svg";
import { ReactComponent as JumSvg } from "./jum3.svg";
import Category from "./Category";
import CategorySub from "./CategorySub";
import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import ModalPw from "./ModalPw";
import SearchBar from "./SearchBar";
import ProfileStyled from "../../styled-components/ProfileStyled";

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
  const [emailValid, setEmailValid] = useState(false);
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

  //로그인 로그아웃
  let sessionStorage = window.localStorage;

  const [savedEmail, setSavedEmail] = useState("");
  const [savedPw, setSavedPw] = useState("");

  useEffect(() => {
    setSavedEmail(sessionStorage.getItem("email"));
    setSavedPw(sessionStorage.getItem("pw"));
  }, [setSavedEmail, setSavedPw, sessionStorage]);

  const LogoutHandler = () => {
    setSavedEmail(sessionStorage.removeItem("email"));
    setSavedPw(sessionStorage.removeItem("pw"));
    window.location.reload();
  };

  //로그인 모달창 on/off
  const [onModal, setOnModal] = useState(0);
  const modalOn = () => {
    setOnModal(1);
  };
  const modalOff = () => {
    setOnModal(0);
  };

  //프로필 버튼 클릭시
  const [profileOn, setProfileOn] = useState(false);
  const ProfileHandler = () => {
    if (profileOn === false) {
      setProfileOn(true);
    } else {
      setProfileOn(false);
    }
  };

  return (
    <>
      <div className="header_">
        <div className="header_d">
          <div className="header_div">
            <div className="header_div_">
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
              <button
                id="gnbSignupBtn"
                className="xsSignUpButton"
                type="button"
              >
                회원가입하기
              </button>
            </div>
            <ul className="header_div_menu">
              <li className="xsHomeButton xsOnly">
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/">채용</Link>
              </li>
              <li>
                <Link to="/">이벤트</Link>
              </li>
              <li className="smMoreVisible">
                <Link to="/">직군별 연봉</Link>
              </li>
              <li className="smMoreVisible">
                <Link to="/">이력서</Link>
              </li>
              <li className="smMoreVisible">
                <Link to="/">
                  커뮤니티
                  <em>
                    <NewSvg />
                  </em>
                </Link>
              </li>
              <li className="smMoreVisible">
                <Link to="/">프리랜서</Link>
              </li>
              <li className="smMoreVisible">
                <Link to="/">
                  AI 합격예측
                  <em>
                    <BetaSvg />
                  </em>
                </Link>
              </li>
            </ul>
            <div className="header_div_join">
              {savedEmail ? (
                <ul>
                  <li>
                    <button className="searchBtn" onClick={SearchBarOn0}>
                      <SurchSvg />
                    </button>
                  </li>
                  <li className="">
                    <button type="button" className="notiButton">
                      <BellSvg />
                    </button>
                  </li>
                  <li className="mdMoreVisible profileBox Aside_hasNewMywantedAlarm__p2Tfv">
                    <button
                      type="button"
                      className="profileButton"
                      onClick={ProfileHandler}
                    >
                      <ProfileStyled profileOn={profileOn} />
                    </button>
                    {profileOn && (
                      <div className="MenuPopover_menuContainer__vUynN">
                        <div className="MenuPopover_menuWrapper__Sju5Y">
                          <ul className="MenuPopover_list__BzAsJ MenuPopover_desktop__QcuKl">
                            <li className="">
                              <Link href="#" className="">
                                <span>MY 원티드</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/profile/matching" className="">
                                <span>프로필</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/status/applications" className="">
                                <span>지원 현황</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/profile/status" className="">
                                <span>제안받기 현황</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/profile/likes" className="">
                                <span>좋아요</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link to="/bookmarks" className="">
                                <span>북마크</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/referral" className="">
                                <span>추천</span>
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/profile/point" className="">
                                <span>포인트</span>
                              </Link>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="is-logout"
                                onClick={LogoutHandler}
                              >
                                <span>로그아웃</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="MenuPopover_bubblePoint__q6Ypq"></div>
                      </div>
                    )}
                  </li>
                  <li className="mdMoreVisible leftDivision">
                    <Link to="/" className="dashboardBtn">
                      기업 서비스
                    </Link>
                  </li>
                  <li className="Aside_visibleMenu__Dki9n">
                    <button className="menuButton" type="button">
                      <JumSvg />
                    </button>
                  </li>
                </ul>
              ) : (
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
                  <li className="mdMoreVisible leftDivision">
                    <Link to="/" className="dashboardBtn">
                      기업 서비스
                    </Link>
                  </li>
                  <li className="Aside_visibleMenu__Dki9n">
                    <button className="menuButton" type="button">
                      <JumSvg />
                    </button>
                  </li>
                </ul>
              )}
            </div>
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
      <div className="Padding_padding___Nyki Padding_padding_isLoggedOut__WyPs1"></div>
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
          emailValid={emailValid}
          User={User}
          notAllow={notAllow}
          setNotAllow={setNotAllow}
        />
      )}
      {onModal === 3 && <ModalSign modalOff={modalOff} />}
    </>
  );
};

export default Header;
