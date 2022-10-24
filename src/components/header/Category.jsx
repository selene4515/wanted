import { Link } from "react-router-dom";
import dummy from "../../json/categoryName.json";

const Category = () => {
  const names = dummy.cateMain;

  const nameList = names.map((name) => (
    <li key={name} className="Explore_CategoryItem__46TK9">
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
