import { ReactComponent as ArrowPullBottomSvg } from "../../svg/arrowPullBottom.svg";
import CateSlider from "../slider/CateSlider";
import { useEffect } from "react";

const JobList = ({ ScrollActive, handleScroll }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={
        ScrollActive ? "jobList_ jobList_t fixed" : "jobList_ jobList_t"
      }
    >
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
    </div>
  );
};

export default JobList;
