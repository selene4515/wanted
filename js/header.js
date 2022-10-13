//햄버거 마우스오버,아웃
let gnb = document.querySelector("#hambuger");
let gnbElement = document.querySelector(".OverlayJobCategory_Container__C3ngs");

gnb.addEventListener("mouseover", () => {
  gnbElement.classList.add("on");
});

let gnb1 = document.querySelector("#gaebal");
let gnbElement1 = document.querySelector(".Explore_SubCategory__xIcAi");

gnb1.addEventListener("mouseover", () => {
  gnbElement1.classList.add("on");
});

// gnbElement.addEventListener("mouseout", () => {
//   gnbElement.classList.remove("on")
//   gnbElement1.classList.remove("on");
// });



//회원가입,로그인 모달
let login = document.querySelector("#joinBtn");
let modal = document.querySelector(".Modal_root__aEM8D");

login.addEventListener("click", () => {
  modal.classList.add("on");
});

let modalX = document.querySelector("#joinXBtn");

modalX.addEventListener("click", () => {
  modal.classList.remove("on");
});