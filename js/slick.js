$('.autoplay').slick({
  infinite: true, //무한 반복 옵션
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  arrows: true, // 옆으로 이동하는 화살표 표시 여부
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
  vertical: false, // 세로 방향 슬라이드 옵션
  prevArrow: 
    "<button type='button' class='TopBanner_arrow__BN_7d TopBanner_prevArrow__B7nqk'><span class='SvgIcon_SvgIcon__root__8vwon'><svg class='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'><path d='m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z'></path></svg></span></button>",
  nextArrow: 
    "<button type='button' class='TopBanner_arrow__BN_7d TopBanner_nextArrow__6wqx0'><span class='SvgIcon_SvgIcon__root__8vwon'><svg class='SvgIcon_SvgIcon__root__svg__DKYBi' viewBox='0 0 18 18'><path d='m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z'></path></svg></span></button>",
  draggable: true, //드래그 가능 여부
  variableWidth: true,
  centerMode:true,
});