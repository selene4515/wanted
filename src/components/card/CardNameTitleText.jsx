import { Link } from "react-router-dom";
import "../../styles/cardTitleText.css";

const CatdNameTitleText = (props) => {
  return (
    <div className="section4li_ul_list_div">
      <div>
        <li>
          <Link href="#">
            <div className="section4li_ul_list_div_divimg">
              <img src={props.img} alt={props.title} loading="lazy" />
            </div>
            <div>
              <p className="section4li_ul_list_div_divp0">{props.name}</p>
              <p className="section4li_ul_list_div_divp11">{props.title}</p>
              <p className="section4li_ul_list_div_divp3">{props.text}</p>
            </div>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default CatdNameTitleText;
