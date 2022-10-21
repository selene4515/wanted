import { Link } from "react-router-dom";

const CategorySub = () => {
  const names = [
    "개발 전체",
    "서버 개발자",
    "웹 개발자",
    "소프트웨어 엔지니어",
    "프론트엔드 개발자",
    "자바 개발자",
    "안드로이드 개발자",
    "파이썬 개발자",
    "서버 개발자",
    "웹 개발자",
    "소프트웨어 엔지니어",
    "프론트엔드 개발자",
    "자바 개발자",
    "안드로이드 개발자",
    "파이썬 개발자",
    "서버 개발자",
    "웹 개발자",
    "소프트웨어 엔지니어",
    "프론트엔드 개발자",
    "자바 개발자",
    "안드로이드 개발자",
    "파이썬 개발자",
    "서버 개발자",
    "웹 개발자",
    "소프트웨어 엔지니어",
    "프론트엔드 개발자",
    "자바 개발자",
    "안드로이드 개발자",
    "파이썬 개발자",
  ];
  const nameList = names.map((name, index) => (
    <li key={index} className="Explore_CategoryItem__46TK9">
      <Link to="/gaebal">{name}</Link>
      <i className="icon-arrow_right"></i>
    </li>
  ));

  return <ul style={{ width: "400px" }}>{nameList}</ul>;
};

export default CategorySub;
