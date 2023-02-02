var titleWrapper = document.querySelector(".title");
titleWrapper.innerHTML =  titleWrapper.textContent.replace(
  /\S/g, "<span class='letter'>$&</span>"
)

gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({defaults: {duration: 1}});

tl
  .from('.letter', { translateY: [-200, 0], stagger: .04 })
  .from('.subtitle', { duration: 0.4, opacity: 0, translateY: [20, 0]})
  .from('.nav-item', { opacity: 0, stagger: .04 })


//---------------------Landing Page ScrollTrigger---------------------
function LandingPageScrollTrigger() {

  gsap.to('body', { // LoadingAnimation---------------------
      opacity: 1, duration: 1.3,
  }) // /LoadingAnimation---------------------

  let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
          trigger: ".hero-section",
          start: "0% 0%",
          end: "100% 0%",
          pin: ".hero-section",
          scrub: 2.2,
      }
  })
  LandingPageScrollTrigger
      .to('.hero-section', { transform: 'translateZ(4500px)', scale: 0.6 }, 0)
}

window.onload = () => {
  LandingPageScrollTrigger()
}