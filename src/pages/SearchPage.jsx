import JobList from "../components/common/JobList";
import Header from "../components/header/Header";
import CardList from "../components/card/CardList";
import dummy from "../json/cardCompeny.json";
import "../styles/search.css";
import { useState } from "react";

const Search = (props) => {
  const cardGaebalData = dummy.cardGaebal;

  const word = props.keyword;

  const [clickSearchBtn, setClickSearchBtn] = useState(false);
  const SearchBarOn = () => {
    setClickSearchBtn(true);
  };
  return (
    <>
      <Header
        clickSearchBtn={clickSearchBtn}
        setClickSearchBtn={setClickSearchBtn}
        SearchBarOn={SearchBarOn}
      />
      <div>
        <div className="SearchInput_SearchInput__w9KeD">
          <button
            type="button"
            className="SearchInput_SearchKeywordText__ASPNj"
            onClick={SearchBarOn}
          >
            {word ? word : "원티드"}
          </button>
        </div>
        <div className="Search_Search__PUJPw">
          <div className="Search_sectionContainer__UaVWv">
            <h2 className="Search_searchLabel__fOBpt SearchJobList_jobListLabel__Zn4Bh">
              포지션<span>19</span>
            </h2>
            <div className="SearchJobList_jobListContainer__sv6Hw">
              <JobList />
              <CardList cardGaebalData={cardGaebalData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
