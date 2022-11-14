import Header from "../components/header/Header";
import "../styles/profile.css";
import { useSelector } from "react-redux";
import GaebalCard from "../components/card/GaebalCard";

const BookmarkPage = () => {
  const mark = useSelector((store) => store.bookmark);
  const marklist = mark.map((cardText) => <GaebalCard cardText={cardText} />);

  return (
    <div>
      <Header />
      <div className="Container_Profile___7hTY">
        <nav role="presentation" className="Nav_Nav__mBpI5">
          <h2 className="Nav_Nav_title__4b9t6">
            <p>북마크</p>
          </h2>
        </nav>
        <div className="Bookmark_container__3HsyN">
          <div className="List_List_container__JnQMS">
            <ul className="clearfix">{marklist}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
