history.scrollRestoration = "manual"

// 스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// 메뉴
const menuTxt = new SplitType('.header .gnb-item a .menu-text', { types: 'words, chars', });


//메뉴스크롤
const  munuTl = gsap.timeline({
  scrollTrigger:{
    trigger:".wrap",
    start:"4% 10%",
    end:"4% 10%",
    // markers:true,
    scrub:0
  }
})

munuTl.to('.header .gnb',{
  y:-11.4,
  scale:0.8
})


// 마우스 커서
const mouseMotion = document.querySelector(".cursor-wrap");

document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

// 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
// pageX, pageY와는 다름.

const mouseX = e.clientX;
const mouseY = e.clientY;

mouseMotion.style.left = mouseX + 'px';
mouseMotion.style.top = mouseY + 'px';

});


$('.wrap').on('mousemove', function () {
  if ($(".cursor-wrap").hasClass('cursor-init')) {
  } else {
      $(".cursor-wrap").addClass('cursor-init');
  }
});

$(document).mouseleave(function () {
  $(".cursor-wrap").removeClass('cursor-init');
});



// 메인에서 프로젝트 마우스 on
$('.sect-project .project-area .project-item .project-img').on('mouseover', function () {
  let titleText = $(this).closest('.project-item').find('.name').text();
  
  $(".cursor-text").text(titleText);
  $('.cursor-wrap').find('.cursor-text').css("--cursor-speed", " " + titleText.length/4 + "s");

  
  if ($(".cursor-wrap").hasClass('cursor-hover')) {
    // hover한 자신의 형제의 자식에 title을 찾아야해. 
  } else {
      $(".cursor-wrap").addClass('cursor-hover');
  }
});

$('.sect-project .project-area .project-item .project-img').mouseleave(function () {
  $(".cursor-wrap").removeClass('cursor-hover');
});





//scroll 버튼
$(document).ready(function() {
  var progress = 0;
  var pageHeight = ($(document).height() - $(window).height());
  

  ScrollTrigger.create({
    trigger: document.documentElement,
    start: "top top",
    end: pageHeight,
    // markers:true,
    onUpdate: function(self) {

      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      
      progress = (winScroll / height) * 100;
      progress = ( progress * .7 ) + 40;
      

      $(".scroll-circle-wrap .scroll-circle-inner .scroll-circle-content .circle-progress").css("background-color", "#d9ff06").css("clip", "rect(0px, " + progress + "px, 150px, 0px)");

      $(".scroll-circle-wrap .scroll-circle-text").css("transform", "translate(-50%,-50%) rotate(" + progress / 10 + "turn)");
    }
  });

  // $(".a-scrollIndicator__container").on("click", function() {
  //     var scrolled = "+=1000";
  //     gsap.to(window, {duration: 1, scrollTo: scrolled, ease: "power2.out"});
  // });
});


$(document).ready(function() {
  if (window.innerWidth > 990) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var footerOffset = $('footer').offset().top;
        var threshold = footerOffset - windowHeight; // 푸터를 기준으로한 값에서 200을 뺀 값

        // 스크롤이 특정 위치 이상으로 내려갔을 때
        if (scroll >= threshold) {
            // 요소의 position 값을 변경합니다.
            $('.scroll-circle-wrap').css('bottom', '140px'); // 필요에 따라 bottom 값도 조정할 수 있습니다.
        } else {
            // 스크롤 위치가 일정 위치 이하일 때 요소의 position 값을 변경합니다.
            $('.scroll-circle-wrap').css('bottom', '30px'); // 필요에 따라 초기 bottom 값으로 설정해주어야 합니다.
        }
    });
  }
}).resize();


/* 모바일 메뉴 옾흔 */
$('.mobile-open').click(function(e){
  // addClass() 함수 호출
  $('.mobile-gnb').addClass("open");

  // GSAP 애니메이션 실행
  const menuOpen = gsap.timeline();    
  menuOpen.from('.mobile-gnb-list .mobile-gnb-item span' , {
    yPercent:110,
    // opacity:0,
    stagger:0.07,
    delay: 0.1 // 1초의 딜레이 추가
  },'a');  
  menuOpen.to('.mobile-gnb-list .mobile-gnb-item a' , {
    opacity:1,
  },'a');
     
  menuOpen.to('.mobile-contact' , {
    opacity:1,
  },'a+=0.6');
});

/* 모바일 메뉴 닫기 */
$('.mobile-close').click(function(e){  

  // GSAP 애니메이션 실행
  const menuClose = gsap.timeline({
    onComplete: function() {
      // 애니메이션이 완료된 후에 removeClass 실행
      $('.mobile-gnb').removeClass("open");      
      $(".mobile-gnb-list .mobile-gnb-item a").css({"opacity":"0", "transform":"translateY(0%)","transition":"0.7s ease transform"});
      // $("html, body").css({"overflow":"auto"});
    }
  });       
  menuClose.to('.mobile-gnb-list .mobile-gnb-item a' , {
    yPercent:-110,
    // opacity:0,
    stagger:0.07,
    delay: 0.1 // 1초의 딜레이 추가
  },'a');
     
  menuClose.to('.mobile-contact' , {
    opacity:0,
  },'a+=0.3');

  // $('.mobile-gnb').removeClass("open");
  // $("html, body").css({"overflow":"auto"});
});

