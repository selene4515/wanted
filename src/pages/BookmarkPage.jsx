import Header from "../components/header/Header";
import "../styles/profile.css";
import dummy from "../json/cardCompeny.json";
import CardList from "../components/card/CardList";

const BookmarkPage = (props) => {
  const cardGaebalData = dummy.cardGaebal;
  return (
    <div>
      <Header />
      <div className="Container_Profile___7hTY">
        <nav role="presentation" class="Nav_Nav__mBpI5">
          <h2 class="Nav_Nav_title__4b9t6">
            <p>북마크</p>
          </h2>
        </nav>
        <div className="Bookmark_container__3HsyN">
          <CardList cardGaebalData={cardGaebalData} />
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
