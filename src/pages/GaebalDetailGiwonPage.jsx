import React from "react";
import Header from "../components/header/Header";

const GaebalDetailGiwonPage = (props) => {
  return (
    <div>
      <Header
        onChangeKeyword={props.onChangeKeyword}
        keyword={props.keyword}
        setKeyword={props.setKeyword}
      />
      <h3>지원하기 페이지입니다!!!!</h3>
    </div>
  );
};

export default GaebalDetailGiwonPage;
