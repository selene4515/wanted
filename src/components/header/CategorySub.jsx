import { Link } from "react-router-dom";
import dummy from "../../json/categoryName.json";

const CategorySub = () => {
  const names = dummy.cateSub;

  const nameList = names.map((name, index) => (
    <li key={index} className="Explore_CategoryItem__46TK9">
      <Link to="/gaebal">{name}</Link>
      <i className="icon-arrow_right"></i>
    </li>
  ));

  return <ul style={{ width: "400px" }}>{nameList}</ul>;
};

export default CategorySub;
