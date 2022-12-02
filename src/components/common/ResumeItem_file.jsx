import { useState } from "react";

const ResumeItem = () => {
  const [drop, setDrop] = useState(false);

  const DropDownHander = () => {
    drop ? setDrop(false) : setDrop(true);
  };
  return (
    <div className="ResumeItem" role="button">
      <div className="ResumeItem_title ResumeItem_title_file">
        <h3 iswriting="">파일명</h3>
        <p>2022.12.02</p>
      </div>
      <div className="ResumeItem_info">
        <div className="ResumeItem_icon" onClick={DropDownHander}>
          <i className="icon-joblist_bottombar_cv"></i>
        </div>
        <span className="writing" iswriting="0">
          첨부 완료
        </span>
        <div className="ResumeItem_menu">
          <button type="button">
            <i className="icon-more_vert"></i>
          </button>
          {drop && (
            <div className="DropdownPopover_DropdownPopover_menu__j_mX_">
              <button type="button">이력서 이름 변경</button>
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
