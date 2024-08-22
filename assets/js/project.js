// 메뉴
const projectTxt = new SplitType('.project-content .group-title .sub-txt', { types:'word, chars', });

const projectTit = new SplitType('.project-content .group-title .page-title', { types:'word, chars', });


const projectPage = gsap.timeline()
projectPage.to('.project-content .group-project .project-wrap .pr-line',{
  '--width':"100%",
  duration:3
},'a')
projectPage.from('.project-content .group-title .sub-txt .char',{
  yPercent:110,
  stagger:0.01,
},'a+=1.7')
projectPage.from('.project-content .group-title .page-title .char',{
  yPercent:110,
  stagger:0.02,
},'a+=1.7')
projectPage.from('.project-content .group-project .project-item',{
  opacity:0
})