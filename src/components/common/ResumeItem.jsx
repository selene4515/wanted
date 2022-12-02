import React from "react";

const ResumeItem = () => {
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
          <button type="button">
            <i className="icon-more_vert"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
