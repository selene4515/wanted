import Header from "../components/header/Header";
import Footer from "../components/Footer";
import AsideStiky from "../components/common/AsideStiky";
import "../styles/second_detail_0.css";
import "../styles/second_detail.css";
import { Link } from "react-router-dom";
import CardList from "../components/card/CardList";
import dummy from "../json/cardCompeny.json";
import { ReactComponent as RoundExSvg } from "../svg/roundEx.svg";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { useState } from "react";

const GaebalDetailPage = (props) => {
  const cardGaebalData = dummy.cardGaebal;

  const navermaps = window.naver.maps;

  const [isHovering, setIsHovering] = useState(false);

  const [acod, setAcod] = useState(false);

  return (
    <div>
      <Header />
      <div className="JobDetail_cn__WezJh">
        <div className="JobDetail_contentWrapper__DQDB6">
          <div className="JobDetail_relativeWrapper__F9DT5">
            <div className="JobContent_className___ca57">
              <section className="JobImage_JobImage__OFUyr">
                <button
                  type="button"
                  className="JobImage_JobImage__arrow__M7BTO JobImage_JobImage__arrow__left__5s5t6"
                >
                  <i className="icon-arrow_down"></i>
                </button>
                <button
                  type="button"
                  className="JobImage_JobImage__arrow__M7BTO JobImage_JobImage__arrow__right___T3CK"
                >
                  <i className="icon-arrow_down"></i>
                </button>
                <div className="JobImage_JobImage__slides__q8GaJ">
                  <div className="JobImage_JobImage__slide__w4mSW">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Feh1mycy7nnltf5ah__1080_790.jpg&amp;w=1000&amp;q=75"
                      alt="블루비커 - 웹 프론트엔드 개발자(React)"
                    />
                  </div>
                  <div className="JobImage_JobImage__slide__w4mSW">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&amp;w=1000&amp;q=75"
                      alt="블루비커 - 웹 프론트엔드 개발자(React)"
                    />
                  </div>
                  <div className="JobImage_JobImage__slide__w4mSW">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&amp;w=1000&amp;q=75"
                      alt="블루비커 - 웹 프론트엔드 개발자(React)"
                    />
                  </div>
                  <div className="JobImage_JobImage__slide__w4mSW">
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&amp;w=1000&amp;q=75"
                      alt="블루비커 - 웹 프론트엔드 개발자(React)"
                    />
                  </div>
                </div>
              </section>
              <section className="JobHeader_className__HttDA">
                <h2>웹 프론트엔드 개발자(React)</h2>
                <div>
                  <h6 style={{ maxWidth: "calc(100% - 69px)" }}>
                    <Link href="/company/22333" className="">
                      블루비커
                    </Link>
                  </h6>
                  <div className="JobHeader_responseLevelStyle__jAEGk">
                    <div className="Tooltip_container__AvBvM">
                      <button
                        className="Tooltip_label__P9FMp not-clickable"
                        type="button"
                      >
                        <div
                          className="ResponseLevelLabel_container__dJphx ResponseLevelLabel_high__tXvE8"
                          onMouseOver={() => setIsHovering(true)}
                          onMouseOut={() => setIsHovering(false)}
                        >
                          <span>응답률 높음</span>
                        </div>
                        {isHovering && (
                          <div className="Tooltip_tooltipContent__6exdr">
                            지원 후 응답받을 확률이 90% 이상입니다.
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                  <span className="JobHeader_pcLocationContainer__xRwIv">
                    서울<span className="JobHeader_dot__aiQxn">.</span>한국
                  </span>
                </div>
                <div className="JobHeader_mobileLocationContainer__DyxUQ">
                  서울<span className="JobHeader_dot__aiQxn">.</span>한국
                </div>
                <div className="Tags_tagsClass__mvehZ">
                  <ul>
                    <li>
                      <Link
                        href="/tag_search?tag=%EC%9D%B8%EC%9B%90%EA%B8%89%EC%84%B1%EC%9E%A5"
                        className=""
                        aria-label=""
                      >
                        #인원급성장
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=50%EB%AA%85%EC%9D%B4%ED%95%98"
                        className=""
                        aria-label=""
                      >
                        #50명이하
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EC%84%A4%EB%A6%BD3%EB%85%84%EC%9D%B4%ED%95%98"
                        className=""
                        aria-label=""
                      >
                        #설립3년이하
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EC%8A%A4%ED%86%A1%EC%98%B5%EC%85%98"
                        className=""
                        aria-label=""
                      >
                        #스톡옵션
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85"
                        className=""
                        aria-label=""
                      >
                        #스타트업
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EC%9B%8C%ED%81%AC%EC%83%B5"
                        className=""
                        aria-label=""
                      >
                        #워크샵
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EA%B0%84%EC%8B%9D"
                        className=""
                        aria-label=""
                      >
                        #간식
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=%EA%B1%B4%EA%B0%95%EA%B2%80%EC%A7%84"
                        className=""
                        aria-label=""
                      >
                        #건강검진
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tag_search?tag=IT%2C%20%EC%BB%A8%ED%85%90%EC%B8%A0"
                        className=""
                        aria-label=""
                      >
                        #IT, 컨텐츠
                      </Link>
                    </li>
                  </ul>
                  <div className="item-gradient end"></div>
                </div>
              </section>
              <div className="JobContent_descriptionWrapper__SM4UD">
                <section className="JobDescription_JobDescription__VWfcb">
                  <div>
                    <span>
                      ＜서비스 소개＞
                      <br />
                      <br />
                      ✓ Medmap - 메디컬 지도를 펼치세요!
                      <br />
                      메드맵은 의료진과 환자간 커뮤니케이션을 도와주는
                      솔루션입니다.
                      <br />
                      <br />
                      【블루비커는】
                      <br />
                      블루비커는 3D 메디컬 콘텐츠 플랫폼 ‘Medmap’을 운영하고
                      있는 스타트업입니다.
                      <br />
                      환자와 의료진의 효과적인 커뮤니케이션의 새 기준을 제시하며
                      메디컬 커뮤니케이션 솔루션을 발전시켜 나가고 있습니다.
                      <br />
                      Medmap은 정확하고 다양한 3D 메디컬 콘텐츠를 제공하여 시술
                      원리와 과정을 쉽게 설명할 수 있도록 도와줍니다. 또한
                      환자의 이해를 돕고 신뢰도를 향상 시키며 재방문율을 높일 수
                      있습니다.
                      <br />
                      블루비커는 자유롭고 수평적인 분위기에서 각 분야 전문가인
                      동료들과 최대한의 능력을 발휘하며 함께하고 있습니다.
                      원하는 시간과 장소, 언제 어디서나, 블루비커와 함께 할 수
                      있습니다.
                      <br />
                      <br />
                      블루비커는 의료 분야 커뮤니케이션 서비스의 신규 개발과
                      고도화를 진행하고 있습니다. 다양한 최신 기술을 시도하고
                      접하실 수 있습니다. 저희 회사에 관심이 있다면 언제든지
                      귀한 능력을 받아들일 준비가 되어있습니다. 많은 지원
                      부탁드립니다.
                      <br />
                      <br />
                      【빠르게 성장하고 있습니다】
                      <br />• 보건산업진흥원 혁신창업 멤버 선정 - 2019
                      <br />• 디캠프 - 디데이 출전 - 2019
                      <br />• 정주영 창업 경진 대회 우수상 - 2020
                      <br />• 마이크로소프트 스타트업 프로그램 선발 -2020
                      <br />• 소풍벤처스, 블루포인트 파트너스 시드 투자유치 -
                      2019/2020
                      <br />• 청년창업사관학교 선발 서울 - 2021
                      <br />• TIPS 프로그램 선정 - 2021
                      <br />• 고려대학교구로병원 개방형 실험실 실증사업 선정 -
                      2022
                      <br />• 리벤처스 Pre-A 투자유치 - 2022
                      <br />
                      <br />
                      【언론에서 소개된 블루비커】
                      <br />• 블루비커, '세계보건의 날' 맞아 메디컬 일러스트
                      플랫폼 공식 론칭(2020.04.16)
                      <br />
                    </span>
                    <Link
                      href="http://kr.aving.net/news/articleView.html?idxno=1564478"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      http://kr.aving.net/news/articleView.html?idxno=1564478
                    </Link>
                    <span>
                      <br />• 아이쿱-블루비커, 3D 환자 교육 콘텐츠 제휴
                      (2020.08.25)
                      <br />
                    </span>
                    <Link
                      href="https://www.khanews.com/news/articleView.html?idxno=204038"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://www.khanews.com/news/articleView.html?idxno=204038
                    </Link>
                    <span>
                      <br />• 메디컬 커뮤니케이션 스타트업 ‘블루비커’,
                      마이크로소프트 애드인 공식 출시(2021.02.25)
                      <br />
                    </span>
                    <Link
                      href="https://platum.kr/archives/158548"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://platum.kr/archives/158548
                    </Link>
                    <span></span>
                  </div>
                  <h6>주요업무</h6>
                  <div>
                    <span>
                      ✓ 블루비커와 함께 한국을 넘어 글로벌 무대에서도 메디컬
                      커뮤니케이션을 혁신 할 "웹 프론트 개발자"를 모십니다!
                      <br />
                      <br />
                      【주요업무】
                      <br />• React 기반 웹 프론트엔드 개발
                      <br />• 서비스 코드 최적화 및 성능 개선
                      <br />• 운영 서비스의 유지보수 및 신규 서비스 론칭
                      <br />• 주니어 개발자와 협업
                      <br />
                      <br />
                      [개발환경]
                      <br />• 사용언어: React.js, Next.js, Redux
                      <br />• 개발환경 및 도구: Github, Postman, Azure Cloud
                    </span>
                  </div>
                  <h6>자격요건</h6>
                  <div>
                    <span>
                      【자격요건】
                      <br />• 웹 개발경력이 4년 이상이신 분<br />• React
                      전문성을 보유하신 분<br />• Modern Web, JavaScript,
                      Typescript에 대한 깊은 이해가 있으신 분<br />• Github을
                      이용한 협업이 가능하신 분<br />• 다른 팀과 협업 및
                      커뮤니케이션에 능숙하신 분<br />• 성장하는 스타트업에서
                      함께 의미 있는 결과를 만들어 나가고 싶으신 분
                    </span>
                  </div>
                  <h6>우대사항</h6>
                  <div>
                    <span>
                      【우대사항】
                      <br />• 요구사항을 파악하여 데이터 모델과 설계가 가능하신
                      분<br />• 기획, 디자인, 백엔드와 능동적인 협업 및
                      커뮤니케이션이 가능하신 분<br />• 주니어 개발자를 리딩하고
                      멘토링 가능하신 분
                    </span>
                  </div>
                  <h6>혜택 및 복지</h6>
                  <div>
                    <span>
                      【복지 및 혜택】
                      <br />
                      <br />• 여름 방학, 겨울 방학
                      <br />
                      ▶여름방학 3일, 겨울방학 3일 연차에 따른 휴가비를 추가
                      지원합니다.
                      <br />
                      <br />• 자율출퇴근제
                      <br />
                      ▶자율적인 출퇴근 시간 및 원격근무가 가능 합니다.
                      <br />
                      <br />• 자기계발비 지원
                      <br />
                      ▶세미나, 워크샵, 컨퍼런스, 업무 관련 도서구입비 등 팀원의
                      성장을 응원합니다.
                      <br />
                      <br />• 건강검진비 지원
                      <br />▶ 연 1회 종합건강검진 비용을 지원해 드립니다.
                      <br />
                      <br />• 최고 사양의 개인장비 지원
                      <br />▶ iMac, Macbook Pro, 데스크탑, 노트북 등 원하는
                      개인별 맞춤 디바이스 제공하여 최고의 업무환경을 제공해
                      드립니다.
                      <br />
                      <br />
                      •편리한 교통
                      <br />▶ 1,4호선 서울역과 연결된 오피스 빌딩
                      <br />
                      <br />
                      •공유오피스
                      <br />
                      ▶커뮤니티 매니저가 상시 관리하는 최신 시설의 오피스에서
                      근무합니다.
                      <br />
                      (에스프레소 머신, Tea, 간식 무제한 제공)
                      <br />
                      <br />
                      •청년내일채움공제
                      <br />▶ 지원 대상인 모든 분들께 청년내일채움공제 가입
                      <br />
                      <br />• 경조사비 지원
                      <br />▶ 구성원 경조사 발생 시 근조화 및 경조비 지원해
                      드립니다.
                      <br />
                      <br />• 자유로운 연차/반차 사용
                      <br />▶ 업무 스케쥴만 괜찮다면 언제든지 사용 가능합니다.
                      <br />
                      <br />• 스톡옵션 부여
                      <br />▶ 기여한 만큼 인정받아요. 성과에 따라 스톡옵션
                      부여해 드립니다.
                      <br />
                      <br />• 리프레쉬 휴가
                      <br />
                      ▶3년, 5년, 7년 근속 시 리프레쉬 휴가를 제공합니다. <br />
                      <br />
                      <br />
                      ＜블루비커 개발팀 소개＞
                      <br />
                      <br />✓ 저희 개발팀은 팀원 모두 새로운 기술과 방법을
                      도입하는데 주저하지 않고, 신기술에 대한 스터디와 공유를
                      즐기며 일하고 있습니다. 합류하시면 자율성과 소통을
                      바탕으로 좋은 동료들과 함께 일하는 기쁨을 느끼실 수 있을
                      것이라 확신합니다.
                      <br />
                      현재 개발팀은 백엔드, 프론트엔드, 그래픽스, Hololens 2,
                      네이티브 앱, 클라우드, 데이터베이스 파트로 구성되어
                      있습니다. 개발 팀은 내부 기획 파트, 디자인 파트, 그래픽스,
                      아티스트 파트와 협업 하여 바이오 메디컬 분야의 서비스
                      개발을 끊임없이 진행하고 있습니다.
                      <br />
                      <br />
                      【블루비커 기술 스택】
                      <br />• React, WebGL, Unity, Spring Boot, .Net Core,
                      Kotlin, Swift, Stored Procedure : 개발팀에서 서비스에
                      적용하고 있는 기술 스택입니다.
                      <br />
                      <br />• MS Azure Cloud, Netlify : 우리는 마이크로소프트의
                      Azure Cloud 의 기술들을 서비스에 활용하고 있습니다. PaaS
                      App 및 Serverless Functions 와 Static Web App 을 이용한
                      웹앱, Blob Storage 및 CDN 을 이용한 대용량 스토리지,
                      Traffic Manager 와 FrontDoor를 이용한 분산처리,
                      Notification Hub 와 PubSub 을 이용한 소켓통신 등을
                      사용합니다. 부하분산 처리가 필요하지 않은 단순한 웹 앱들은
                      Netlify 클라우드 서비스를 사용합니다.
                      <br />
                      <br />• 그래픽스 : 자체적으로 개발한 국내 최고 수준의
                      WebGL 뷰어와, 마이크로소프트 Hololens2 의 서비스들을
                      개발합니다. Blender를 이용해서 모델링한 3D 에셋들을
                      활용하여 웹과 Hololens2에서 사용하기 위한 최적화를
                      진행하여 개발하고 있습니다.
                      <br />
                      <br />
                      【블루비커 개발 문화】
                      <br />• CI/CD 파이프라인을 이용하며, 중요 서비스는 모두
                      스테이징 서버와 프로덕션 서버가 분리되어 있습니다.
                      <br />• 초기 스타트업 특성상 다양한 아이디어를 빠르고
                      린하게 적용해야 하기 때문에 효율적인 개발 문화를
                      추구합니다.
                      <br />• 개발 스택의 결정과 프로젝트의 설계는 모든 개발
                      팀원들의 토론을 통해 결정합니다.
                      <br />• 코드 리뷰는 모든 개발 팀원들이 참가하여 본인이
                      개발하는 분야가 아닐지라도 함께 논의하고 분석합니다.
                      <br />• 우리는 최신 기술 스택의 도입에 두려움을 가지지
                      않습니다. 새로운 기술에 대해 조사하고, 비교하고, 적용하는
                      과정을 통해 개발자는 한 단계 더 성장할 수 있다고
                      생각합니다.
                      <br />• 주기적으로 일정 시간을 할애하여 외부 온/오프라인
                      교육을 받을 수 있도록 회사 차원에서 지원합니다. 교육을
                      통해서 서비스에 접목하고자 하는 아이디어가 떠오른다면
                      토론을 통해서 결정하고 진행합니다.
                      <br />• 명확한 Task를 설정한 뒤 업무를 진행합니다. 상황에
                      따른 우선순위를 정하고 Teams Planner를 기반으로 1주 혹은
                      2주 단위의 느슨한 스프린트 방식으로 개발하고 있습니다.
                      <br />• 개발자들은 중요한 기획안에 자신들의 아이디어를
                      제안하고, 기술적인 의견을 공유합니다.
                      <br />
                      <br />
                      【주요 협업 툴】
                      <br />• 모든 소스코드들은 깃허브를 통해 관리되고, 통신
                      협업을 위해서 Postman 을 사용하고 있으며, 모든 기술 문서는
                      Notion으로 정리합니다.
                      <br />• 전사적으로 마이크로소프트 Teams, Notion, Microsoft
                      365 서비스와 같은 SaaS 서비스를 적극 사용해서 구성원 개인
                      분들의 업무 효율을 높이는데 도움 드리고 있습니다.
                      <br />• 모든 팀들은 Teams Planner를 통해 업무 및 일정
                      관리를 하고 있습니다.
                      <br />• 프로덕트팀, 서비스개발팀, 마케팅팀과의 디자인 관련
                      업무는 Figma를 통해 협업하고 있습니다.
                      <br />
                      <br />
                      <br />
                      ＜채용절차 및 유의사항＞
                      <br />
                      <br />✓ 채용절차는 이렇게 진행됩니다.
                      <br />
                      <br />
                      1. 서류전형
                      <br />• 블루비커는 자유양식의 지원서를 받고 있습니다.
                      본인의 강점이 잘 드러나는 다양한 정보를 알려주세요.
                      <br />• 지원 시 본인의 이력서 또는 포트폴리오와 함께,
                      포지션과 유관하며 직접 작성한 “깃허브 주소” 혹은
                      “소스코드”를 첨부 및 제출해 주시기 바랍니다.
                      <br />• 직접 운영 중인 개발 블로그나 서비스가 있다면 함께
                      보내주시면 적극 검토하겠습니다!
                      <br />• 만약 제출이 어려운 경우, 개발팀에서 전달해드리는
                      과제를 수행해주시면 됩니다.
                      <br />
                      <br />
                      2. 1차 기술 인터뷰(온라인)
                      <br />• 개발팀과 진행하는 직무 관련 인터뷰로, 지원서 상의
                      경력과 소스코드 및 과제 내용을 중심으로 진행됩니다.
                      <br />• 1시간 가량 온라인 면접으로 진행됩니다.
                      <br />
                      <br />
                      3. 2차 임원 인터뷰(오프라인)
                      <br />• 다른 직군의 팀원 및 경영진과 서로에 대해 조금 더
                      알아가는 시간입니다.
                      <br />• 서로 추구하는 가치관과 생각 등에 대해 이야기하는
                      시간으로 약 1시간 가량 진행됩니다.
                      <br />
                      <br />
                      4. 최종합격
                      <br />• 처우에 대해 최종적으로 협의 후, 입사 일자를
                      결정합니다.
                      <br />
                      <br />✓ 블루비커에 관심을 갖고 지원해 주신 모든 분들의
                      서류를 정말 감사한 마음으로 읽어 보고 있습니다. 채용의
                      모든 전형에서 가능한 빠른 피드백을 드리고자
                      노력하겠습니다.
                    </span>
                  </div>
                  <h6>기술스택 ・ 툴</h6>
                  <div>
                    <div className="JobDescription_JobDescription_skill_wrapper__9EdFE">
                      <div className="SkillItem_SkillItem__E2WtM">Git</div>
                      <div className="SkillItem_SkillItem__E2WtM">Azure</div>
                      <div className="SkillItem_SkillItem__E2WtM">React</div>
                      <div className="SkillItem_SkillItem__E2WtM">
                        JavaScript
                      </div>
                      <div className="SkillItem_SkillItem__E2WtM">
                        TypeScript
                      </div>
                      <div className="SkillItem_SkillItem__E2WtM">Redux</div>
                      <div className="SkillItem_SkillItem__E2WtM">Next.js</div>
                    </div>
                  </div>
                </section>
                <hr className="JobContent_divider__Nwppc" />
                <section className="JobWorkPlace_className__ra6rp">
                  <div>
                    <span className="header">마감일</span>
                    <span className="body">상시</span>
                  </div>
                  <div>
                    <span className="header">근무지역</span>
                    <span className="body">
                      서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
                    </span>
                  </div>
                  <Link
                    className="NaverMap_NaverMap__6TuZG"
                    href="https://map.naver.com/?dlevel=13&amp;pinTitle=서울특별시 용산구 한강대로 366 트윈시티 남산&amp;lat=37.5511247&amp;lng=126.9729133"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <RenderAfterNavermapsLoaded ncpClientId={"ss4pkyxi3m"}>
                      <NaverMap
                        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
                        style={{
                          width: "100%",
                          height: "254px",
                        }}
                        defaultCenter={{ lat: 37.5508, lng: 126.9727 }}
                        defaultZoom={17}
                      >
                        <Marker
                          position={new navermaps.LatLng(37.5508, 126.9727)}
                          animation={2}
                        />
                      </NaverMap>
                    </RenderAfterNavermapsLoaded>
                  </Link>
                </section>
              </div>
              <section className="CompanyInfo_className__VNf10">
                <button type="button" className="left">
                  <div
                    className="logo"
                    style={{
                      backgroundImage:
                        "url(https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg",
                    }}
                  ></div>
                  <div>
                    <h5>블루비커</h5>
                    <h6>IT, 컨텐츠</h6>
                  </div>
                </button>
                <button className="Button_Button__root__V1ie3 Button_Button__outlined__H2mkd undefined Button_Button__sizeMedium__k0A1w followButton">
                  <span className="Button_Button__label__1Kk0v">팔로우</span>
                </button>
              </section>
              <section>
                <div className="StealingWarning_StealingWarning_content__Ik3sn">
                  <div className="WarningHeader_WarningHeader__F1ikW">
                    <RoundExSvg />
                    <div className="WarningHeader_WarningHeader_content__Yb7yY">
                      <h5 className="WarningHeader_WarningHeader_content_h5__QbAwc">
                        본 채용정보는 원티드랩의 동의없이 무단전재, 재배포,
                        재가공할 수&nbsp;
                        <br className="break-xs" />
                        없으며, 구직활동 이외의&nbsp;
                        <br className="break-lg" />
                        용도로 사용할 수 없습니다.
                      </h5>
                      <button
                        type="button"
                        className={acod ? "btn-open" : ""}
                        onClick={() => {
                          acod ? setAcod(false) : setAcod(true);
                        }}
                      >
                        <i className="icon-arrow_down"></i>
                      </button>
                    </div>
                  </div>
                  {acod && (
                    <div class="WarningBody_WarningBody__Ha5lJ">
                      <p class="WarningBody_WarningBody_p__a_vz5">
                        본 채용 정보는&nbsp;<strong>블루비커</strong>에서 제공한
                        자료를 바탕으로 원티드랩에서 표현을 수정하고 이의 배열
                        및 구성을 편집하여 완성한 원티드랩의 저작자산이자
                        영업자산입니다. 본 정보 및 데이터베이스의 일부 내지는
                        전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포,
                        재가공 및 크롤링할 수 없으며, 게재된 채용기업의 정보는
                        구직자의 구직활동 이외의 용도로 사용될 수 없습니다.
                        원티드랩은 <strong>블루비커</strong>에서 게재한 자료에
                        대한 오류나 그 밖에 원티드랩이 가공하지 않은 정보의
                        내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가
                        이를 신뢰하여 취한 조치에 대해 책임을 지지
                        않습니다.&nbsp;
                        <strong>
                          &lt;저작권자 (주)원티드랩. 무단전재-재배포금지&gt;
                        </strong>
                      </p>
                    </div>
                  )}
                </div>

                <div className="StealingWarning_StealingWarning_space__O_Fvk"></div>
              </section>
            </div>
            <AsideStiky />
          </div>
          <div className="JobAssociated_className__g4Pv9 JobAssociated_detectBottomMargin__9ZYVx">
            <div className="JobAssociated_className__g4Pv9 JobAssociated_detectBottomMargin__9ZYVx">
              <h5 className="JobAssociated_title__TW7G7">
                이 포지션을 찾고 계셨나요?
              </h5>
              <CardList cardGaebalData={cardGaebalData} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GaebalDetailPage;
