import { useNavigate } from "react-router-dom";
import { ReactComponent as ShareBtnSvg } from "../../svg/shareBtn.svg";
import { ReactComponent as BookmarkBlueLineSvg } from "../../svg/bookmark_blueLine.svg";

const AsideStiky = () => {
  const nav = useNavigate();

  const GiWon = () => {
    alert("지원하기 페이지로 이동!");
    nav("/gabalDetailGiwon");
  };

  return (
    <aside className="JobProcess_container__1HKdk" style={{ top: 70 }}>
      <div className="BeforeApplication_container__ABvqo">
        <header>
          <div className="Reward_container__cK6W4">
            <h3>채용보상금</h3>
            <ul>
              <li>
                <h4>추천인</h4>
                <p>500,000원</p>
              </li>
              <li>
                <h4>지원자</h4>
                <p>500,000원</p>
              </li>
            </ul>
            <button
              className="BeforeApplication_shareButton__xApHP"
              type="button"
            >
              <ShareBtnSvg />
            </button>
          </div>
          <button
            className="BookmarkBtn_bookmarkBtn__DgWcS BeforeApplication_pcBookmarkBtn__FP_h_"
            type="button"
          >
            <BookmarkBlueLineSvg />
            북마크하기
          </button>
          <div className="ApplyBtn_container__WHJ_D">
            <div className="ApplyBtn_container_item__QPFuo">
              <button className="BookmarkBtn_bookmarkBtn__DgWcS" type="button">
                <BookmarkBlueLineSvg />
                북마크하기
              </button>
            </div>
            <div className="ApplyBtn_container_item__QPFuo">
              <button
                className="ApplyBtn_button__BT821"
                type="button"
                onClick={GiWon}
              >
                지원하기
              </button>
            </div>
          </div>
          <div className="Reactions_reactions__mLZ_X">
            <button className="likes" type="button">
              <i className="icon-ic_favorite_black_24px"></i>
              <span>9</span>
            </button>
            <button type="button" className="Reactions_avatars___pLYy">
              <ul>
                <li
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c'), url('https://static.wanted.co.kr/images/userweb/profile_default.png')",
                  }}
                ></li>
                <li
                  style={{
                    backgroundImage:
                      "url('https://k.kakaocdn.net/dn/chOGWm/btrJ7se3l3K/eeQiZuGgc7rBHKj9RBRFk1/img_110x110.jpg'), url('https://static.wanted.co.kr/images/userweb/profile_default.png')",
                  }}
                ></li>
                <li
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/a/ALm5wu2bYv18aK6_ahAXODnanhRHwCfEqvoUbqKJCBKA=s96-c'), url('https://static.wanted.co.kr/images/userweb/profile_default.png')",
                  }}
                ></li>
              </ul>
            </button>
          </div>
        </header>
        <footer className="JobProcess_footer__TK1Sj"></footer>
      </div>
    </aside>
  );
};

export default AsideStiky;
