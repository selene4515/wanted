import React from "react";
import JobList from "../components/common/JobList";
import Header from "../components/header/Header";

const Search = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#fff" }}>
        <div className="SearchInput_SearchInput__w9KeD">
          <button
            type="button"
            className="SearchInput_SearchKeywordText__ASPNj"
          >
            원티드
          </button>
        </div>
        <div className="Search_Search__PUJPw">
          <div className="Search_sectionContainer__UaVWv">
            <h2 class="Search_searchLabel__fOBpt SearchJobList_jobListLabel__Zn4Bh">
              포지션<span>19</span>
            </h2>
            <div className="SearchJobList_jobListContainer__sv6Hw">
              <JobList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
