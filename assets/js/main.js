let mm = gsap.matchMedia();
gsap.set('body', {overflow:'hidden'})

const mainTxt = new SplitType('.main-visual .main-visual-title .main-title-block', { types: 'words, chars', });

const typed = new Typed('#intro-text', {
  strings: ['Hello!',' I have been waiting.', 'Welcome to Portfolio!'],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 1000,
  loop: false,
  showCursor: true,
  cursorChar: '|',
  onComplete: function() {
    // console.log('Typing animation complete!');
    // Typed.js 애니메이션이 완료되면 GSAP 애니메이션 시작
    const visualTl = gsap.timeline();
    visualTl.to('.intro-wrap .inner', {
      opacity:0,
      ease: "none"
    });
    visualTl.to('.intro-wrap', {
      yPercent: -100,
      opacity:0,
      duration:0.7,
      ease: "none"
    });
    visualTl.from('.main-visual .main-visual-title .main-title-block .char', {
      yPercent:110,
      opacity:0,
      stagger:0.005,
    }, 'a');
    visualTl.from('.main-visual .main-visual-bg', {
      yPercent:110,
      opacity:0,
    }, 'a+=0.1');
    visualTl.from('.header .logo', {
      yPercent:110,
      opacity:0,
    }, 'a+=0.2');
    visualTl.from('.header .mobile-open', {
      yPercent:110,
      opacity:0,
    }, 'a+=0.2');
    visualTl.from('.header .gnb-list', {
      yPercent:110,
      opacity:0,
    }, 'a+=0.2');
    visualTl.to('body', {
      overflow:'visible'
    },);
  }
});




const visualTl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".main-visual",
    start:"5% 0%",
    end:"100% 20%",
    // markers:true,
    scrub:0,
    ease:"none"
  }
})

visualTl2.to('.main-visual .main-visual-bg',{
  scaleX:1.3851,
  scaleY:2.505
},'a')
visualTl2.to('.main-visual .main-visual-title h2',{
  filter: "blur(20px)",
  scale:0.95
},'a')
visualTl2.to('.main-visual',{
  autoAlpha:0
})




// project
const projectTxt = new SplitType('.sect-project .project-area .project-title h2', { types: 'words, chars', });

mm.add("(min-width: 1033px)", () => {
  const projectTl = gsap.timeline({
    scrollTrigger:{
      trigger:".project-title",
      start:"30% 50%",
      end:"80% 50%",
      // markers:true,
      scrub:0,
    }
  })
  projectTl.to('.sect-project .project-area .project-title h2 .char',{
    y:0,
    stagger:0.1,
  })
});







const wrapBg = gsap.timeline({
  scrollTrigger:{
    trigger:".project-more",
    start:"-20% 50%",
    end:"-15% 50%",
    // markers:true,
    scrub:0,    
  }
})


const promoreTxt = new SplitType('.sect-project .project-more a .project-more-motion .split', { types: 'chars', });



// const aboutTxt = new SplitType('.sect-about .group-top .about-top-unit .text', { types: 'chars', });

// const aboutTl = gsap.timeline({
//   scrollTrigger:{
//     trigger:".sect-about",
//     start:"10% 50%",
//     end:"110% 100%",
//     // markers:true,
//     scrub:0,    
//   }
// })

// aboutTl.from('.sect-about .group-top .about-top-unit .text-motion',{
//   opacity:0,
//   stagger:0.1,
//   delay:0.2
// })
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(1)',{x:70},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(2)',{x:-120},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(3)',{x:170},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(4)',{x:-260},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(5)',{x:260},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(6)',{x:-170},'a')
// aboutTl.to('.sect-about .group-top .about-top-unit:nth-child(7)',{x:205},'a')




// const aboutTl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger:".sect-about",
//     start:"80% 60%",
//     end:"100% 40%",
//     // markers:true,
//     scrub:0,    
//   }
// })
// aboutTl2.from('.sect-about .group-bottom .about-bottom-text-in',{
//   yPercent:70,
// },'a')



// const abotuType = new Typed('#typing', {
//   strings: ['BEAUTIFUL', 'INTUITIVE', 'ENGAGING', 'DIGITAL'],
//   typeSpeed: 50,
//   backSpeed: 30,
//   startDelay: 0,
//   showCursor: false,
//   // cursorChar: '|',
//   loop: true,  
// });


mm.add("(min-width: 990px)", () => {
  const aboutTxt = new SplitType('.sect-about .group-top .about-top-area .right .about-top-text-unit', { types: 'chars', });
  const aboutTl = gsap.timeline({
    scrollTrigger:{
      trigger:".sect-about",
      start:"10% 50%",
      end:"70% 100%",
      // markers:true,
      scrub:0,    
    }
  })

  aboutTl.from('.sect-about .group-top .about-top-area .left h2',{ opacity:0},'a')
  // aboutTl.from('.sect-about .group-top .about-top-area .left .about-top-img',{ paddingBottom:0},'a+=0.1')
  aboutTl.from('.sect-about .group-top .about-top-area .left .about-top-img img',{ 
    clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
  },'a+=0.1')
  aboutTl.from ('.sect-about .group-top .about-top-area .center .line',{ 
    clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  },'a+=0.2')
  aboutTl.from('.sect-about .group-top .about-top-area .right .about-top-text-unit .char',{
    yPercent:100,
    stagger:0.1,
  })




  const aboutTl2 = gsap.timeline({
    scrollTrigger:{
      trigger:".sect-about",
      start:"80% 60%",
      end:"100% 40%",
      // markers:true,
      scrub:0,    
    }
  })
  aboutTl2.to('.sect-about .group-top .about-top-area .left .about-top-img',{
    y:69,
  },'a')
  aboutTl2.from('.sect-about .group-bottom .about-bottom-text-in',{
    yPercent:70,
  },'a')
  
});






