import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import ResumeItem from "../components/common/ResumeItem";
import "../styles/resume.css";

const CVPage = () => {
  return (
    <div>
      <Header />
      <div className="ResumeList">
        <aside className="CareerConnectBanner">
          <img
            src="https://static.wanted.co.kr/career_connect/banner-back-mobile-common.png"
            alt="career-connect-icon"
          />
          <button type="button" className="CareerConnectBanner_Banner">
            <div className="CareerConnectBanner_Banner_Content">
              <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
              <strong>내 경력 불러오기</strong>
              <img
                src="https://static.wanted.co.kr/career_connect/trio.png"
                alt="career-connect-icon"
              />
            </div>
          </button>
        </aside>
        <div className="ResumeList_header">
          <h4>최근 문서</h4>
          <Link className="ResumeList_header_link">
            <span>원티드 이력서 소개</span>
            <i className="icon-info_icon"></i>
          </Link>
        </div>
        <div className="ResumeList_listWrapper">
          <div className="ResumeItem" role="button">
            <div className="ResumeList_addItem">
              <div className="ResumeList_addItem_icon">
                <i className="icon-new_resume"></i>
              </div>
              <p>새 이력서 작성</p>
            </div>
          </div>
          <div className="ResumeItem" role="button">
            <div className="ResumeList_upload">
              <div className="ResumeList_upload_icon">
                <i className="icon-upload_resume"></i>
              </div>
              <p>파일 업로드</p>
            </div>
          </div>
          <ResumeItem />
        </div>
      </div>
    </div>
  );
};

export default CVPage;
