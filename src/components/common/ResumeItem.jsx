import { useState } from "react";

const ResumeItem = () => {
  const [drop, setDrop] = useState(false);

  const DropDownHander = () => {
    drop ? setDrop(false) : setDrop(true);
  };

  return (
    <div className="ResumeItem" role="button">
      <div className="ResumeItem_badge">
        <div className="MatchupBadge_Badge">
          <p>매치업 이력서</p>
        </div>
      </div>
      <div className="ResumeItem_title">
        <h3 iswriting="1">정민지 1</h3>
        <p>2022.11.02</p>
      </div>
      <div className="ResumeItem_info">
        <div className="ResumeItem_lang" iswriting="1">
          한
        </div>
        <span className="writing" iswriting="1">
          작성 중
        </span>
        <div className="ResumeItem_menu">
          <button type="button" onClick={DropDownHander}>
            <i className="icon-more_vert"></i>
          </button>
          {drop && (
            <div className="DropdownPopover_DropdownPopover_menu__j_mX_">
              <button type="button">이력서 이름 변경</button>
              <button type="button">사본 만들기</button>
              <button type="button">다운로드</button>
              <button type="button">이력서 삭제</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
