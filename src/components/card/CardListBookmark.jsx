// import { useSelector } from "react-redux";
import GaebalCard from "./GaebalCard";

const CardListBookmark = ({ cardGaebalData }) => {
  const cardGaebalD = cardGaebalData;
  const cardGaebalList = cardGaebalD.map((cardText) => (
    <GaebalCard cardText={cardText} />
  ));
  return (
    <div className="List_List_container__JnQMS" style={{ textAlign: "center" }}>
      <ul className="clearfix">{cardGaebalList}</ul>
    </div>
  );
};

export default CardListBookmark;
