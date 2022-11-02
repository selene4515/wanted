import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CloseBtnSvg } from "./closeBtn.svg";

const PwModal = ({ modalOff, userinfo, email }) => {
  const pwOff = () => {
    if (window.confirm("로그인을 취소하시겠습니까?")) {
      modalOff();
    }
  };

  const [password, setPassword] = useState("");
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const searchEnter = (e) => {
    if (filtered.length === 1) {
      modalOff();
      alert("로그인되었습니다!");
    } else {
      alert("비밀번호가 틀립니다!");
      setPassword("");
    }
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      password && searchEnter();
    }
  };
  const user = userinfo.user;
  const filtered = user.filter((item) =>
    item.pw.toLowerCase().includes(password.toLowerCase())
  );
  return (
    <div>
      <div className="ModalHeader Header_Header__0d6dF moh">
        이메일로 로그인
        <Link>
          <button type="button" onClick={pwOff}>
            <CloseBtnSvg />
          </button>
        </Link>
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
                onChange={onChangePw}
                value={password}
                onKeyPress={onKeyPress}
                autoFocus
              />
            </div>
          </div>
          <div className="InputPanel_buttons__w391m" style={{ marginTop: 20 }}>
            <button
              type="button"
              className="style_wrapper__IgK7U email-login-button"
              onClick={searchEnter}
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
  );
};

export default PwModal;
