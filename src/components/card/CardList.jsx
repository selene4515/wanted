import GaebalCard from "./GaebalCard";

const CardList = (props) => {
  const cardGaebalD = props.cardGaebalData;
  const cardGaebalList = cardGaebalD.map((cardText) => (
    <GaebalCard cardText={cardText} />
  ));
  return (
    <div className="List_List_container__JnQMS" style={{ textAlign: "center" }}>
      <ul className="clearfix">{cardGaebalList}</ul>
    </div>
  );
};

export default CardList;
