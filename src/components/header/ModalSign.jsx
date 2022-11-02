import { Link } from "react-router-dom";
import { ReactComponent as CloseBtnSvg } from "./closeBtn.svg";

const ModalSign = ({ modalOff }) => {
  const signOff = () => {
    if (window.confirm("회원가입을 취소하시겠습니까?")) {
      modalOff();
    }
  };

  return (
    <div>
      <div className="ModalHeader Header_Header__0d6dF moh1">
        회원가입
        <Link>
          <button type="button" onClick={signOff}>
            <CloseBtnSvg />
          </button>
        </Link>
      </div>
      <div
        id="MODAL_BODY"
        className="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH"
      >
        <form
          id="setpassword-form"
          className="SetPassword_SetPassword_form__WK9NO"
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
            <label htmlFor="userPasswordRepeat" className="style_label__BKYHB">
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
        <div className="SetPassword_SetPassword_footer_btn__UrVb_">
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
  );
};

export default ModalSign;
