import CardMainTitle from "./CardMainTitle";
import CardNameTitleText from "./CardNameTitleText";
import "../../styles/card4.css";

const Card4NameTitleText = (props) => {
  const cardVod = props.cardVod;
  const cardListVod = cardVod.map((cardText, index) => (
    <CardNameTitleText
      key={index}
      img={cardText.img}
      name={cardText.name}
      title={cardText.title}
      text={cardText.text}
    />
  ));

  return (
    <section className="section4li">
      <div>
        <CardMainTitle title={props.title} titleSub={props.titleSub} />
        <ul className="section4li_ul">
          <div>
            <div className="section4li_ul_list">
              <div>{cardListVod}</div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Card4NameTitleText;
