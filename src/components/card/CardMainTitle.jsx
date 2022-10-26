import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightSvg } from "../../svg/arrowRight.svg";
import { ReactComponent as ArrowLeftSvg } from "../../svg/arrowLeft.svg";
import "../../styles/cardMainTitle.css";

const CardMainTitle = (props) => {
  return (
    <div className="section4li_title">
      <button className="section4li_title_leftBtn section4li_title_btn">
        <span>
          <ArrowLeftSvg />
        </span>
      </button>
      <div>
        <div className="section4li_title_text">
          <h2>{props.title}</h2>
        </div>
        <Link className="section4li_title_textSub">
          {props.titleSub} 전체보기
          <span>
            <ArrowRightSvg />
          </span>
        </Link>
      </div>
      <button className="section4li_title_rightBtn section4li_title_btn">
        <span>
          <ArrowRightSvg />
        </span>
      </button>
    </div>
  );
};

export default CardMainTitle;
