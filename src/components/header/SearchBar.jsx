import { ReactComponent as SearchSvg } from "./surchBtn.svg";
import "../../styles/dropMenu.css";
import { Link } from "react-router-dom";

const SearchBar = ({
  clickSearchBtn,
  setClickSearchBtn,
  clickSearchBtn0,
  setClickSearchBtn0,
}) => {
  const SetClickSearchBtn = setClickSearchBtn;
  const SetClickSearchBtn0 = setClickSearchBtn0;

  const SearchBarOff = () => {
    if (clickSearchBtn === true) {
      SetClickSearchBtn(false);
    }
    if (clickSearchBtn0 === true) {
      SetClickSearchBtn0(false);
    }
  };

  return (
    <div className="SearchBar_SearchBar__JODCp">
      <div className="SearchBar_SearchBar_container__kpoXq">
        <form role="presentation" action=".">
          <input type="search" placeholder="#태그, 회사, 포지션 검색" />
          <SearchSvg className="SearchBar_SearchBar_searchIcon__I9wXL" />
          <button type="button" className="SearchBar_SearchBar_close__SpKxI">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </button>
        </form>
        <div className="Result_className__wK_ah">
          <div className="container" role="presentation">
            <h4 className="RecentSearchResults_searchLabelClass__l5R6_">
              추천태그로 검색해보세요
            </h4>
            <Link
              href="/tag_search"
              className="RecentSearchResults_rightSideButton__6OgA6"
              aria-label=""
              data-attribute-id="search__goCompanyTag"
            >
              기업태그 홈 이동하기
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path
                  fill="currentColor"
                  d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                ></path>
              </svg>
            </Link>
            <ul className="RecentSearchResults_listClass__3KCcZ">
              <li className="tagListItem">
                <button
                  className="Tag_className___lFMK  undefined"
                  type="button"
                >
                  #51~300명
                </button>
              </li>
              <li className="tagListItem">
                <button
                  className="Tag_className___lFMK  undefined"
                  type="button"
                >
                  #연봉상위2~5%
                </button>
              </li>
              <li className="tagListItem">
                <button
                  className="Tag_className___lFMK  undefined"
                  type="button"
                >
                  #퇴사율5%이하
                </button>
              </li>
              <li className="tagListItem">
                <button
                  className="Tag_className___lFMK  undefined"
                  type="button"
                >
                  #인원급성장
                </button>
              </li>
              <li className="tagListItem">
                <button
                  className="Tag_className___lFMK  undefined"
                  type="button"
                >
                  #안마의자
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="Result_searchResultOverlay__p6W1m"
          onClick={SearchBarOff}
        ></div>
      </div>
    </div>
  );
};

export default SearchBar;
