//햄버거 마우스오버,아웃
let gnb = document.querySelector("#hambuger");
let gnbElement = document.querySelector(".OverlayJobCategory_Container__C3ngs");

let gnb1 = document.querySelector("#gaebal");
let gnbElement1 = document.querySelector(".Explore_SubCategory__xIcAi");


gnb.addEventListener("mouseover", () => {
  gnbElement.classList.add("on");

  gnb1.addEventListener("mouseover", () => {
    console.log('hover1');
    gnbElement1.classList.add("on");
  });

  gnbElement1.addEventListener("mouseleave", () =>{
    gnbElement1.classList.remove("on");
    gnbElement.classList.remove("on")
  })
  // gnbElement.addEventListener("mouseleave", () => {
  //   console.log('mouseOut');
  //   gnbElement.classList.remove("on")
  //   gnbElement1.classList.remove("on");
  // });
});


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

let emailBtn = document.querySelector(".email-login-button");
let moh = document.querySelector(".moh");
let loginmo1 = document.querySelector(".TextPanel_className__J3J2W");
let loginmo2 = document.querySelector(".InputPanel_wrapper__RXp1k");
let moh1 = document.querySelector(".moh1");
let joinmo = document.querySelector(".SetPassword_SetPassword_form__WK9NO");
let joinbtn = document.querySelector(".SetPassword_SetPassword_footer_btn__UrVb_");

emailBtn.addEventListener("click",() => {
  moh.classList.add("off");
  loginmo1.classList.add("off");
  loginmo2.classList.add("off");
  moh1.classList.add("on");
  joinmo.classList.add("on");
  joinbtn.classList.add("on");
})

let modalX1 = document.querySelector("#joinXBtn1");

modalX1.addEventListener("click", () => {

  if(confirm("회원가입을 취소하시겠습니까?")){
    modal.classList.remove("on");

    moh.classList.remove("off");
    loginmo1.classList.remove("off");
    loginmo2.classList.remove("off");
    moh1.classList.remove("on");
    joinmo.classList.remove("on");
    joinbtn.classList.remove("on");
  }else{
    
  }

});

// let checkBtn = document.querySelector(".checkBtn1");
// let svgname = "<svg color='#3366ff'><path fill='currentColor' d='M18.75 2.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5zm-2.252 5.719l-5.994 5.968-2.97-3.005a.75.75 0 0 0-1.067 1.055l3.5 3.54a.75.75 0 0 0 1.062.004l6.527-6.5a.75.75 0 0 0-1.058-1.062'></path></svg>";

// checkBtn.addEventListener("click",() => {
//   document.getElementById("style_check_svg").innerHTML = svgname;
// })