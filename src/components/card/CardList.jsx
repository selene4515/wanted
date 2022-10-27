import GaebalCard from "./GaebalCard";

const CardList = (props) => {
  const cardGaebalD = props.cardGaebalData;
  const cardGaebalList = cardGaebalD.map((cardText, index) => (
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
  return (
    <div className="List_List_container__JnQMS">
      <ul className="clearfix">{cardGaebalList}</ul>
    </div>
  );
};

export default CardList;
