import { Link } from "react-router-dom";
import "../../styles/cardTitleText.css";

const CardTitleTag = (props) => {
  return (
    <div className="section4li_ul_list_div">
      <div>
        <li>
          <Link href="#">
            <div className="section4li_ul_list_div_divimg">
              <img src={props.img} alt={props.title} loading="lazy" />
            </div>
            <div>
              <p className="section4li_ul_list_div_divp1">{props.title}</p>
              <p className="section4li_ul_list_div_divp2">{props.tag}</p>
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default CardTitleTag;
