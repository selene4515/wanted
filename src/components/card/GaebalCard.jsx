import { ReactComponent as BookmarkNoneSvg } from "../../svg/bookmark_none.svg";
import { ReactComponent as BookmarkBlueSvg } from "../../svg/bookmark_blue_whiteLine.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, deleteBookmark } from "../../reducers/bookmark";

const GaebalCard = ({ cardText }) => {
  const myId = cardText.id;
  const backImg = cardText.backImg;
  const url = cardText.name;
  const moneyc = cardText.money
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const [isHovering, setIsHovering] = useState(false);

  //로그인여부체크
  let sessionStorage = window.localStorage;
  const [savedEmail, setSavedEmail] = useState("");
  useEffect(() => {
    setSavedEmail(sessionStorage.getItem("email"));
  }, [setSavedEmail, sessionStorage]);

  const [bookmark, setBookmark] = useState(false);
  const dispatch = useDispatch();
  const onClickBookmark = (e) => {
    e.preventDefault();
    if (savedEmail === null) {
      alert("로그인해주세요!");
    } else {
      if (bookmark === false) {
        setBookmark(true);
        dispatch(addBookmark(cardText));
      } else {
        setBookmark(false);
        dispatch(deleteBookmark(cardText));
      }
    }
  };

  const mark = useSelector((store) => store.bookmark);
  useEffect(() => {
    const isBookmark = mark.find((item) => item.id === myId);
    if (isBookmark) setBookmark(true);
  }, [myId, mark, setBookmark]);

  return (
    <li>
      <div className="Card_className__u5rsb">
        <Link to={{ pathname: `/gaebal/${url}` }} className="">
          <header
            style={{
              backgroundImage: `url(${backImg})`,
            }}
          >
            <button
              className="bookmarkBtn"
              type="button"
              onClick={onClickBookmark}
            >
              {bookmark ? <BookmarkBlueSvg /> : <BookmarkNoneSvg />}
            </button>
          </header>
          <div className="body">
            <div className="job-card-position">{cardText.title}</div>
            <div className="job-card-company-name">{cardText.name}</div>
            <div className="Tooltip_container__AvBvM">
              <button className="Tooltip_label__P9FMp" type="button">
                <div
                  className="ResponseLevelLabel_container__dJphx ResponseLevelLabel_veryHigh__3ArDP"
                  onMouseOver={() => setIsHovering(true)}
                  onMouseOut={() => setIsHovering(false)}
                >
                  <span>{cardText.olo}</span>
                </div>
                {isHovering && (
                  <div className="Tooltip_tooltipContent__6exdr">
                    {cardText.tip}
                  </div>
                )}
              </button>
            </div>
            <div className="job-card-company-location">
              {cardText.city}
              <span className="addressDot">.</span>
              <span>{cardText.nara}</span>
            </div>
            <div className="reward">채용보상금 {moneyc}원</div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default GaebalCard;
