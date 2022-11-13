import GaebalCard from "./GaebalCard";
import { useEffect } from "react";

const CardFilterList = (props) => {
  const cardGaebalD = props.cardGaebalData;

  const filtered = cardGaebalD
    .filter((cardText) =>
      cardText.title.toUpperCase().includes(props.query.toUpperCase())
    )
    .map((cardText) => <GaebalCard cardText={cardText} />);

  const setCount = props.setCount;
  useEffect(() => {
    setCount(filtered.length);
  }, [setCount, filtered]);

  return (
    <div className="List_List_container__JnQMS" style={{ textAlign: "center" }}>
      <ul className="clearfix">{filtered}</ul>
    </div>
  );
};

export default CardFilterList;
