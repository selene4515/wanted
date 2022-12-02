import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import JobList from "../components/common/JobList";
import CardFilterList from "../components/card/CardFilterList";
import "../styles/search.css";
import dummy from "../json/cardCompeny.json";

const SearchPage = (props) => {
  const cardGaebalData = dummy.cardGaebal;
  const [count, setCount] = useState(0);

  const [clickSearchBtn, setClickSearchBtn] = useState(false);
  const SearchBarOn = () => {
    setClickSearchBtn(true);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  return (
    <>
      <Header
        clickSearchBtn={clickSearchBtn}
        setClickSearchBtn={setClickSearchBtn}
      />
      <div>
        <div className="SearchInput_SearchInput__w9KeD">
          <button
            type="button"
            className="SearchInput_SearchKeywordText__ASPNj"
            onClick={SearchBarOn}
          >
            {query ? query : "검색어를 입력하세요"}
          </button>
        </div>
        <div className="Search_Search__PUJPw">
          <div className="Search_sectionContainer__UaVWv">
            <h2 className="Search_searchLabel__fOBpt SearchJobList_jobListLabel__Zn4Bh">
              포지션<span>{count}</span>
            </h2>
            <div className="SearchJobList_jobListContainer__sv6Hw">
              <JobList />
              <CardFilterList
                cardGaebalData={cardGaebalData}
                query={query}
                setCount={setCount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
