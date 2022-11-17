import { ReactComponent as ArrowPullBottomSvg } from "../../svg/arrowPullBottom.svg";
import CateSlider from "../slider/CateSlider";
import { useEffect } from "react";
import styled, { css } from "styled-components";

const JobListStyled = styled.div`
  margin-bottom: 1.5625rem;
  padding-top: 0.625rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 0.625rem;
  }

  ${(props) =>
    props.ScrollActive &&
    css`
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      border-bottom: 0.0625rem solid #36f;
      background: #fff;
      z-index: 2;
      padding: 1.25rem 0 1.5625rem !important;

      @media (max-width: 767px) {
        padding: 0.625rem 0 !important;
        border-bottom-color: #36f;
      }
    `}

  top: 3.125rem;
  @media (max-width: 767px) {
    top: 6.875rem;
  }
`;

const JobList = ({ ScrollActive, handleScroll }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <JobListStyled className="jobList_ jobList_t" ScrollActive={ScrollActive}>
      <div className="jobList_cate">
        <div className="jobList_cate_div1">
          <button type="button" className="jobList_cate_div1_btn">
            <span className="jobList_cate_div1_btn_span1">
              지역<span>1</span>
            </span>
            <span className="jobList_cate_div1_btn_span2">한국</span>
          </button>
          <div className="jobList_cate_div1_div1">
            <button type="button" className="jobList_cate_div1_btn">
              <span className="jobList_cate_div1_btn_span1">경력</span>
              <span className="jobList_cate_div1_btn_span2">전체</span>
              <ArrowPullBottomSvg />
            </button>
          </div>
          <div className="jobList_cate_div1_div2">
            <button type="button" className="jobList_cate_div1_btn">
              <span className="jobList_cate_div1_btn_span1">기술스택</span>
              <span className=" "></span>
              <ArrowPullBottomSvg />
            </button>
          </div>
        </div>
        <div className="jobList_cate_div2">
          <div className=" ">
            <div className="jobList_cate_div2_div">
              <button className="" type="button">
                응답률순
                <ArrowPullBottomSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <CateSlider />
    </JobListStyled>
  );
};

export default JobList;
