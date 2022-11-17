import styled from "styled-components";

const JobListSection = styled.section`
  max-width: 66.25rem;
  margin: 0 auto;

  & > div {
    width: 100%;
    margin-bottom: 0;
  }
`;

const ColorDiv = styled.div`
  outline: "none";
`;

const ColorButton = styled.button`
  background: ${(props) => props.color || "blue"};

  position: relative;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;
  font-family: Pretendard;

  & > img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;

const CateSlider = () => {
  return (
    <JobListSection className="jobList_section">
      <div className="slick-slider slick-initialized" dir="ltr">
        <div className="slick-list">
          <div
            className="slick-track"
            style={{
              width: 2912,
              opacity: "1",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <ColorDiv className="slick-slide slick-active slick-current">
              <div>
                <ColorButton type="button" color="rgb(242, 251, 245)">
                  연봉이 최고의 복지
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="연봉이 최고의 복지"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(243, 249, 254)">
                  재택근무
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="재택근무"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(243, 242, 251)">
                  퇴사율 10% 이하
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="퇴사율 10% 이하"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(246, 248, 238)">
                  급성장 중
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="급성장 중"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(247, 242, 249)">
                  병역특례
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="병역특례"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(238, 250, 249)">
                  50인 이하️
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="50인 이하️"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(239, 241, 251)">
                  50인 이상️
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="50인 이상️"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(242, 251, 245)">
                  업력 5년 이상
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&amp;w=50&amp;q=75"
                    alt="업력 5년 이상"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            <ColorDiv className="slick-slide slick-active">
              <div>
                <ColorButton type="button" color="rgb(243, 249, 254)">
                  유연근무
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                    alt="유연근무"
                  />
                </ColorButton>
              </div>
            </ColorDiv>
            {/* 
                    <div
                      data-index="9"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none"
                    >
                      <div>
                        <button
                          type="button"
                          className="TagListItem_TagListItem__3aCT9"
                          data-attribute-id="userTag__filter__click"
                          data-kind="add"
                          data-tag="Unlimited PTO"
                          style="background: rgb(243, 242, 251)"
                        >
                          자유로운 휴가
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                            alt="자유로운 휴가"
                          />
                        </button>
                      </div>
                    </div>
                    <div
                      data-index="10"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none"
                    >
                      <div>
                        <button
                          type="button"
                          className="TagListItem_TagListItem__3aCT9"
                          data-attribute-id="userTag__filter__click"
                          data-kind="add"
                          data-tag="Bonuses"
                          style="background: rgb(246, 248, 238)"
                        >
                          일한만큼 받는 보상
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F472333e8-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                            alt="일한만큼 받는 보상"
                          />
                        </button>
                      </div>
                    </div>
                    <div
                      data-index="11"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none"
                    >
                      <div>
                        <button
                          type="button"
                          className="TagListItem_TagListItem__3aCT9"
                          data-attribute-id="userTag__filter__click"
                          data-kind="add"
                          data-tag="Company Culture"
                          style="background: rgb(247, 242, 249)"
                        >
                          수평적 문화
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                            alt="수평적 문화"
                          />
                        </button>
                      </div>
                    </div>
                    <div
                      data-index="12"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none"
                    >
                      <div>
                        <button
                          type="button"
                          className="TagListItem_TagListItem__3aCT9"
                          data-attribute-id="userTag__filter__click"
                          data-kind="add"
                          data-tag="Emerging Industry"
                          style="background: rgb(238, 250, 249)"
                        >
                          요즘 뜨는 산업
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4e1b135a-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                            alt="요즘 뜨는 산업"
                          />
                        </button>
                      </div>
                    </div>
                    <div
                      data-index="13"
                      className="slick-slide"
                      tabindex="-1"
                      aria-hidden="true"
                      style="outline: none"
                    >
                      <div>
                        <button
                          type="button"
                          className="TagListItem_TagListItem__3aCT9"
                          data-attribute-id="userTag__filter__click"
                          data-kind="add"
                          data-tag="Free Meals"
                          style="background: rgb(239, 241, 251)"
                        >
                          식사·간식 제공
                          <img
                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F53ca893e-9f6e-11ec-b909-0242ac120002.png&amp;w=50&amp;q=75"
                            alt="식사·간식 제공"
                          />
                        </button>
                      </div>
                    </div> */}
          </div>
        </div>
        <button
          type="button"
          className="NavButton_NavButton__j73pc NavButton_isNext__m3fGk"
        >
          <span className="SvgIcon_SvgIcon__root__8vwon">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </JobListSection>
  );
};

export default CateSlider;
