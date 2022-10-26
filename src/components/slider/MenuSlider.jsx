import "../../styles/menuSlider.css";

const MenuSlider = () => {
  return (
    <div>
      <div className="career_div_list_list">
        <div className="insite_list">
          <button>
            <span>리더십</span>
          </button>
          <button>
            <span>커리어고민</span>
          </button>
          <button>
            <span>IT/기술</span>
          </button>
          <button>
            <span>인간관계</span>
          </button>
          <button>
            <span>회사생활</span>
          </button>
          <button>
            <span>취업/이직</span>
          </button>
          <button>
            <span>조직문화</span>
          </button>
          <button>
            <span>라이프스타일</span>
          </button>
          <button>
            <span>개발</span>
          </button>
          <button>
            <span>콘텐츠 제작</span>
          </button>
          <button>
            <span>HR</span>
          </button>
          <button>
            <span>서비스기획</span>
          </button>
        </div>
        <div className="insite_left">
          <button className="instite_btn">
            <span>
              <svg viewBox="0 0 18 18">
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="insite_right">
          <button className="instite_btn">
            <span>
              <svg viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <button className="career_div_list_addBtn">
        <svg width="16" height="3" viewBox="0 0 16 3">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
              fill="currentColor"
            ></path>
          </path>
        </svg>
      </button>
    </div>
  );
};

export default MenuSlider;
