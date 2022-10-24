//import { Link } from "react-router-dom";
// import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ReactSlick from "../components/ReactSlick";
import "../styles/banner.css";
import "../styles/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <ReactSlick />
        <section className="career">커리어</section>
        <div className="dirline">
          <hr />
        </div>
        <section className="section4li">카드세션</section>
        <div className="dirline">
          <hr />
        </div>
        <section className="section4li">카드세션</section>
        <div className="blueBanner">블루배너</div>
        <section className="section2li">카드세션</section>
        <section className="subBanner">배너</section>
        <section className="companyinfo">회사정보</section>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
