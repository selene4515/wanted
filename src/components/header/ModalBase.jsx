import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import ModalPw from "./ModalPw";
import { useState } from "react";

const ModalBase = ({ setClickModal }) => {
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

  const [onModal, setOnModal] = useState(0);
  const modalOff = () => {
    setClickModal(false);
    setOnModal(0);
  };
  console.log("modalbase");
  return (
    <div className="Modal_root__aEM8D">
      <div className="Modal_modalContent__0zuTn style_wrapper__SO1vd border-none">
        {onModal === 0 && (
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
        {onModal === 1 && (
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
