import GaebalCard from "./GaebalCard";
import { useEffect } from "react";

const CardFilterList = (props) => {
  const cardGaebalD = props.cardGaebalData;

  const filtered = cardGaebalD
    .filter((cardText) =>
      cardText.title.toUpperCase().includes(props.keyword.toUpperCase())
    )
    .map((cardText, index) => (
      <GaebalCard
        key={index}
        backImg={cardText.backImg}
        title={cardText.title}
        name={cardText.name}
        olo={cardText.olo}
        city={cardText.city}
        nara={cardText.nara}
        money={cardText.money}
      />
    ));

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
