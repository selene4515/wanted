import { useEffect, useState } from "react";
import { ReactComponent as CloseBtnSvg } from "./closeBtn.svg";

const PwModal = (props) => {
  const pwOff = () => {
    props.modalOff();
  };

  let sessionStorage = window.localStorage;

  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);

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

  const setNotAllow = props.setNotAllow;
  useEffect(() => {
    if (props.emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [props.emailValid, pwValid, setNotAllow]);

  const onClickConfirmButton = () => {
    if (props.email === props.User.email && pw === props.User.pw) {
      sessionStorage.setItem("email", props.email);
      sessionStorage.setItem("pw", pw);
      alert("로그인에 성공했습니다.");
      window.location.reload();
      props.modalOff();
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      pw && onClickConfirmButton();
    }
  };

  return (
    <div className="Modal_root__aEM8D">
      <div className="Modal_modalContent__0zuTn style_wrapper__SO1vd border-none">
        <div className="ModalHeader Header_Header__0d6dF moh">
          이메일로 로그인
          <button type="button" onClick={pwOff}>
            <CloseBtnSvg />
          </button>
        </div>
        <div
          id="MODAL_BODY"
          className="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH"
        >
          <div className="InputPanel_wrapper__RXp1k">
            <input className="InputPanel_password__my_BO" type="password" />
            <div className="style_wrapper__6RiUK InputPanel_email__aEAmZ">
              <label className="style_label__BKYHB">비밀번호</label>
              <div className="style_body__A6XnO">
                <input
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  id="password"
                  onChange={handlePw}
                  value={pw}
                  onKeyPress={onKeyPress}
                  autoFocus
                />
              </div>
            </div>
            <div
              className="InputPanel_buttons__w391m"
              style={{ marginTop: 20 }}
            >
              <button
                type="button"
                className="style_wrapper__IgK7U email-login-button"
                onClick={onClickConfirmButton}
                disabled={props.notAllow}
              >
                다음
              </button>
              <button type="button" className="css-1k928vt">
                <span className="css-1ll2w7l">비밀번호 초기화/변경</span>
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

export default PwModal;
