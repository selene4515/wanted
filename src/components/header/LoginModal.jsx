import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CloseBtnSvg } from "./closeBtn.svg";
import { ReactComponent as EmailIcon } from "./emailIcon.svg";

const LoginModal = ({ clickModal, setClickModal }) => {
  const [clickModal1, setClickModal1] = useState(true);
  const [clickModal2, setClickModal2] = useState(false);

  const modalOff = () => {
    setClickModal(false);
    setClickModal1(true);
    setClickModal2(false);
  };
  const modal2On = () => {
    setClickModal1(false);
    setClickModal2(true);
  };

  // const [email, setEmail] = useState("");
  // const [emailValid, setEmailValid] = useState(false);
  // const [notAllow, setNotAllow] = useState(false);
  // useEffect(() => {
  //   if (emailValid) {
  //     setNotAllow(false);
  //     return;
  //   }

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   const regex =
  //     /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+))|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i;
  //   if (regex.test(e.target.value)) {
  //     setEmailValid(true);
  //   } else {
  //     setEmailValid(false);
  //   }
  // };

  return (
    <div>
      <div className="Modal_modalContent__0zuTn style_wrapper__SO1vd border-none">
        <div
          className={
            clickModal1
              ? "ModalHeader Header_Header__0d6dF moh"
              : "ModalHeader Header_Header__0d6dF moh off"
          }
        >
          <i className="icon-logo_new"></i>
          <Link>
            <button type="button" onClick={modalOff}>
              <CloseBtnSvg />
            </button>
          </Link>
        </div>
        <div
          className={
            clickModal2
              ? "ModalHeader Header_Header__0d6dF moh1 on"
              : "ModalHeader Header_Header__0d6dF moh1"
          }
        >
          회원가입
          <Link>
            <button type="button" onClick={modalOff}>
              <CloseBtnSvg />
            </button>
          </Link>
        </div>
        <div
          id="MODAL_BODY"
          className="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH"
        >
          <div
            className={
              clickModal1
                ? "TextPanel_className__J3J2W"
                : "TextPanel_className__J3J2W off"
            }
          >
            <h1>
              직장인을 위한
              <br />
              커리어 플랫폼, 원티드!
            </h1>
            <h2>
              커리어 성장과 행복을 위한 여정
              <br />
              지금 원티드에서 시작하세요.
            </h2>
          </div>
          <div
            className={
              clickModal1
                ? "InputPanel_wrapper__RXp1k"
                : "InputPanel_wrapper__RXp1k off"
            }
          >
            <input className="InputPanel_password__my_BO" type="password" />
            <div className="style_wrapper__6RiUK InputPanel_email__aEAmZ">
              <label className="style_label__BKYHB">이메일</label>
              <div className="style_body__A6XnO">
                <input
                  type="email"
                  placeholder="이메일을 입력해 주세요."
                  id="email"
                />
              </div>
              <div className="style_guidance__FT8Qs input-group-guidance"></div>
              <p
                color="var(--theme-palette-colors-red-400)"
                className="css-1u2lazp"
              >
                올바른 이메일을 입력해주세요.
              </p>
            </div>

            <div className="InputPanel_buttons__w391m">
              <button
                type="button"
                className="style_wrapper__IgK7U email-login-button"
                onClick={modal2On}
              >
                <EmailIcon />
                이메일로 계속하기
              </button>
              <div className="InputPanel_divider__WEgZ3"></div>
              <div className="InputPanel_socialLogins__j0wq7">
                다음 계정으로 계속하기
              </div>
              <div className="InputPanel_socialWrapper__Dhaxo isKR">
                <div className="InputPanel_socialButton__Hggw2 isKR">
                  <button
                    type="button"
                    className="style_wrapper__IgK7U social-login-button kakao-login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                    >
                      <path
                        fill="#000"
                        fillRule="nonzero"
                        d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
                      ></path>
                    </svg>
                    <div className="InputPanel_socialTitle__77isU isKR">
                      Kakao
                    </div>
                  </button>
                </div>
                <div className="InputPanel_socialButton__Hggw2 isKR">
                  <button
                    type="button"
                    className="style_wrapper__IgK7U social-login-button facebook-login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="23"
                      viewBox="0 0 12 23"
                    >
                      <path
                        fill="#fff"
                        fillRule="nonzero"
                        d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"
                      ></path>
                    </svg>
                    <div className="InputPanel_socialTitle__77isU isKR">
                      Facebook
                    </div>
                  </button>
                </div>
                <div className="InputPanel_socialButton__Hggw2 isKR">
                  <button
                    type="button"
                    className="style_wrapper__IgK7U social-login-button google-login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g fill="none" fillRule="nonzero">
                        <path
                          fill="#EA4335"
                          d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"
                        ></path>
                        <path d="M0 0L23 0 23 23 0 23z"></path>
                      </g>
                    </svg>
                    <div className="InputPanel_socialTitle__77isU isKR">
                      Google
                    </div>
                  </button>
                </div>
                <div className="InputPanel_socialButton__Hggw2 isKR">
                  <button
                    type="button"
                    className="style_wrapper__IgK7U social-login-button apple-login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="24"
                      viewBox="0 0 19 24"
                    >
                      <path
                        fill="#fff"
                        fillRule="nonzero"
                        d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"
                      ></path>
                    </svg>
                    <div className="InputPanel_socialTitle__77isU isKR">
                      Apple
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <p className="style_wrapper__MbwMv">
              걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
              <br />
              회원가입 시
              <Link className="loginModalAnchor" href="#" target="_blank">
                개인정보 처리방침
              </Link>
              과
              <Link className="loginModalAnchor" href="#" target="_blank">
                이용약관
              </Link>
              을 확인하였으며, 동의합니다.
            </p>
          </div>
          <form
            id="setpassword-form"
            className={
              clickModal2
                ? "SetPassword_SetPassword_form__WK9NO on"
                : "SetPassword_SetPassword_form__WK9NO"
            }
          >
            <div className="style_wrapper__6RiUK">
              <label htmlFor="userName" className="style_label__BKYHB">
                이름
              </label>
              <div className="style_body__A6XnO">
                <input
                  type="text"
                  name="userName"
                  placeholder="이름을 입력해 주세요."
                  id="userName"
                />
              </div>
              <div className="style_guidance__FT8Qs input-group-guidance"></div>
            </div>
            <div className="MobileInput_MobileInput__K9xQB">
              <div className="style_wrapper__6RiUK userPhoneNumber">
                <label htmlFor="userPhoneNumber" className="style_label__BKYHB">
                  휴대폰 번호
                </label>
                <div className="style_body__A6XnO">
                  <div id="userPhoneNumber">
                    <div className="MobileInput_MobileInput_select__61tfM">
                      <span>대한민국 +82</span>
                      <select>
                        <option value="+82">+82 South Korea</option>
                        <option value="+81">+81 Japan</option>
                        <option value="+886">+886 Taiwan</option>
                        <option value="+852">+852 Hong Kong</option>
                        <option value="+65">+65 Singapore</option>
                      </select>
                      <i className="MobileInput_MobileInput_select_arrow__hLBUp icon-arrow_right"></i>
                    </div>
                    <div className="MobileInput_MobileInput_input__5mhzh">
                      <input
                        name="userPhoneNumber"
                        type="text"
                        placeholder="(예시) 01034567890"
                      />
                      <button
                        type="button"
                        className="BtnGetCode_BtnGetCode__wR5FL isKR"
                        disabled=""
                      >
                        인증번호 받기
                      </button>
                    </div>
                    <div className="InputCode_InputCode__CvGhV">
                      <input
                        type="text"
                        name="code"
                        className="InputCode_InputCode_input__X4opi disabled"
                        placeholder="인증번호를 입력해 주세요."
                        disabled=""
                      />
                    </div>
                  </div>
                </div>
                <div className="style_guidance__FT8Qs input-group-guidance"></div>
              </div>
            </div>
            <div className="style_wrapper__6RiUK">
              <label htmlFor="userPassword" className="style_label__BKYHB">
                비밀번호
              </label>
              <div className="style_body__A6XnO">
                <input
                  type="password"
                  name="userPassword"
                  autoComplete="new-password"
                  maxLength="16"
                  placeholder="비밀번호를 입력해 주세요."
                  id="userPassword"
                />
              </div>
              <div className="style_guidance__FT8Qs input-group-guidance">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상
                입력해 주세요.
              </div>
            </div>
            <div className="style_wrapper__6RiUK">
              <label
                htmlFor="userPasswordRepeat"
                className="style_label__BKYHB"
              >
                비밀번호 확인
              </label>
              <div className="style_body__A6XnO">
                <input
                  type="password"
                  name="userPasswordRepeat"
                  autoComplete="new-password"
                  maxLength="16"
                  placeholder="비밀번호를 다시 한번 입력해 주세요."
                  id="userPasswordRepeat"
                />
              </div>
              <div className="style_guidance__FT8Qs input-group-guidance"></div>
            </div>
            <div className="Agreement_wrapper__1RTfh">
              <div className="style_wrapper__TaLWc Agreement_checkboxAll__SkIo_">
                <div className="style_check__svLur">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
                    ></path>
                  </svg>
                </div>
                <div className="style_label__CZv3V">
                  <input type="checkbox" name="allAgreement" />
                  전체 동의
                </div>
              </div>
              <div className="style_wrapper__TaLWc Agreement_checkbox__OGFNT">
                <div className="style_check__svLur">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
                    ></path>
                  </svg>
                </div>
                <div className="style_label__CZv3V">
                  <input type="checkbox" name="acceptPrivacy" />
                  개인정보 수집 및 이용 동의<span>(필수)</span>
                  <Link
                    href="https://help.wanted.co.kr/hc/ko/articles/360040127872"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="Agreement_link__qZ81b"
                  >
                    자세히
                  </Link>
                </div>
              </div>
              <div className="style_wrapper__TaLWc Agreement_checkbox__OGFNT">
                <div className="style_check__svLur">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
                    ></path>
                  </svg>
                </div>
                <div className="style_label__CZv3V">
                  <input type="checkbox" name="acceptEventEmail" />
                  이벤트 소식 등 알림 정보 받기
                  <Link
                    href="https://help.wanted.co.kr/hc/ko/articles/360040540111"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="Agreement_link__qZ81b"
                  >
                    자세히
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div
            className={
              clickModal2
                ? "SetPassword_SetPassword_footer_btn__UrVb_ on"
                : "SetPassword_SetPassword_footer_btn__UrVb_"
            }
          >
            <div className="SetPassword_SetPassword_footer_btn_wrapper__SRH1U">
              <button
                type="submit"
                className="style_wrapper__IgK7U submit is-disabled"
                form="setpassword-form"
                disabled=""
              >
                회원가입하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        role="presentation"
        className="Modal_modalOverlay__1sCXi false"
      ></div>
    </div>
  );
};

export default LoginModal;
