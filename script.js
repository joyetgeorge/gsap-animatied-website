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


gsap.from('.about-title', {
  scrollTrigger: {
    trigger: '.about-title',
    start: '20px 80%',
    end: 'bottom 100px',
    markers: true,
    // scrub: true
  },
  opacity: 0,
  duration: 1
})