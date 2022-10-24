import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_div1">
          <div className="footer_div1_div1">
            <div className="footer_div1_div1_logo">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=100"
                alt="wanted"
              />
            </div>
            <div className="footer_div1_div1_text">
              <Link href="#" target="_blank">
                기업소개
              </Link>
              <Link href="#" target="_blank">
                이용약관
              </Link>
              <Link href="#" target="_blank">
                개인정보 처리방침
              </Link>
              <Link href="#" target="_blank">
                고객센터
              </Link>
            </div>
          </div>
          <div className="footer_div1_div2">
            <Link
              href="https://www.instagram.com/wantedjobs.kr/"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
                alt="instagram"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
                alt="youtube"
              />
            </Link>
            <Link href="https://www.facebook.com/wantedkr" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
                alt="facebook"
              />
            </Link>
            <Link href="https://blog.naver.com/wantedlab" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
                alt="blog"
              />
            </Link>
            <Link href="https://pf.kakao.com/_XqCIxl" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100"
                alt="kakao"
              />
            </Link>
            <Link
              href="https://post.naver.com/my.nhn?memberNo=18284175"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100"
                alt="post"
              />
            </Link>
            <Link
              href="https://apps.apple.com/kr/app/id1074569961"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
                alt="apple"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
                alt="google"
              />
            </Link>
          </div>
        </div>
        <div className="footer_div2">
          <p>
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
          <div className="footer_div2_lan">
            <img
              src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
              alt="country flag KR"
            />
            <select>
              <option value="KR">한국 (한국어)</option>
              <option value="JP">日本 (日本語)</option>
              <option value="WW">Worldwide (English)</option>
              <option value="SG">Singapore (English)</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
