import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import ModalPw from "./ModalPw";
import { useState } from "react";

const ModalBase = ({ modalOff, onModal, setOnModal }) => {
  const userinfo = {
    user: [
      { email: "shining4515@naver.com", pw: "min080525" },
      { email: "wanted@gmail.com", pw: "000000" },
    ],
  };
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="Modal_modalContent__0zuTn style_wrapper__SO1vd border-none">
        {onModal === 0 && (
          <ModalLogin
            modalOff={modalOff}
            setOnModal={setOnModal}
            userinfo={userinfo}
            email={email}
            setEmail={setEmail}
          />
        )}
        {onModal === 1 && (
          <ModalPw modalOff={modalOff} userinfo={userinfo} email={email} />
        )}
        {onModal === 2 && <ModalSign modalOff={modalOff} />}
      </div>
      <div
        role="presentation"
        className="Modal_modalOverlay__1sCXi false"
      ></div>
    </div>
  );
};

export default ModalBase;
