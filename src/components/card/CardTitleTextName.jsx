import { Link } from "react-router-dom";
import "../../styles/cardTtitleTextName.css";

const CardTitleTextName = (props) => {
  return (
    <li>
      <Link href="#">
        <div className="career_div_ul_divImg">
          <img src={props.img} alt={props.title} />
        </div>
        <p className="career_div_ul_pTitle">{props.title}</p>
        <p className="career_div_ul_pText">{props.text}</p>
        <div className="career_div_ul_divName">
          <img src={props.icon} alt="wanted" />
          <p>{props.name}</p>
        </div>
      </Link>
    </li>
  );
};

export default CardTitleTextName;
