import CardMainTitle from "./CardMainTitle";
import CardTitleTag from "./CardTitleTag";
import "../../styles/card4.css";

const Card4TitleTag = (props) => {
  const cardContent = props.cardContent;
  const cardListTag = cardContent.map((cardText, index) => (
    <CardTitleTag
      key={index}
      img={cardText.img}
      title={cardText.title}
      tag={cardText.tag}
    />
  ));

  return (
    <section className="section4li">
      <div>
        <CardMainTitle title={props.title} titleSub={props.titleSub} />
        <ul className="section4li_ul">
          <div>
            <div className="section4li_ul_list">
              <div>{cardListTag}</div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Card4TitleTag;
