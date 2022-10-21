import { Link } from "react-router-dom";

const Category = () => {
  const names = [
    "개발",
    "경영·비즈니스",
    "마케팅·광고",
    "디자인",
    "영업",
    "고객서비스·리테일",
    "게임 제작",
    "HR",
    "미디어",
    "엔지니어링·설계",
    "금융",
    "제조·생산",
    "물류·무역",
    "의료·제약·바이오",
    "교육",
    "식·음료",
    "법률·법집행기관",
    "건설·시설",
    "공공·복지",
  ];

  const nameList = names.map((name, index) => (
    <li key={index} className="Explore_CategoryItem__46TK9">
      <Link to="/gaebal">
        <em>{name}</em>
      </Link>
    </li>
  ));

  return (
    <ul>
      {nameList}
      <li className="Explore_GigsCategoryItem__l4LhT Explore_hasCurrentCategory__wxhIs">
        <Link
          href="https://www.wanted.co.kr/gigs/projects"
          className="Explore_GigsCategoryItem_link__OlnwE"
          target="_blank"
        >
          <div className="Explore_GigsCategoryItem_banner__eRpF8">
            <span>프리랜서</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Category;
