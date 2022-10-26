import { ReactComponent as BookmarkNoneSvg } from "../../svg/bookmark_none.svg";
import { Link } from "react-router-dom";

const GaebalCard = (props) => {
  const backImg = props.backImg;

  return (
    <li>
      <div className="Card_className__u5rsb">
        <Link href="./second_detail.html" className="">
          <header
            style={{
              backgroundImage: `url(${backImg})`,
            }}
          >
            <button className="bookmarkBtn" type="button">
              <BookmarkNoneSvg />
            </button>
          </header>
          <div className="body">
            <div className="job-card-position">{props.title}</div>
            <div className="job-card-company-name">{props.name}</div>
            <div className="Tooltip_container__AvBvM">
              <button className="Tooltip_label__P9FMp" type="button">
                <div className="ResponseLevelLabel_container__dJphx ResponseLevelLabel_veryHigh__3ArDP">
                  <span>{props.olo}</span>
                </div>
              </button>
            </div>
            <div className="job-card-company-location">
              {props.city}
              <span className="addressDot">.</span>
              <span>{props.nara}</span>
            </div>
            <div className="reward">채용보상금 {props.money}원</div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default GaebalCard;
