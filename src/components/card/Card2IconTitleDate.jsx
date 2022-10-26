import CardMainTitle from "./CardMainTitle";
import "../../styles/card2.css";
import CardIconTitleDate from "./CardIconTitleDate";

const Card2IconTitleDate = (props) => {
  const cardEvent = props.cardEvent;
  const cardListEvent = cardEvent.map((cardText, index) => (
    <CardIconTitleDate
      key={index}
      img={cardText.img}
      title={cardText.title}
      icon1={cardText.icon1}
      icon2={cardText.icon2}
      date={cardText.date}
    />
  ));

  return (
    <section className="section2li">
      <div>
        <CardMainTitle title={props.title} titleSub={props.titleSub} />
        <div className="section2li_content">
          <div className="EventBanner_EventBanner__slideContainer__udqTU">
            <div className="slick-slider EventBanner_EventBanner__slider__Nkuo2 slick-initialized">
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    width: 3560,
                    opacity: "1",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  {cardListEvent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2IconTitleDate;
