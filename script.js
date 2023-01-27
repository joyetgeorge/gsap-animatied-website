var titleWrapper = document.querySelector(".title");
titleWrapper.innerHTML =  titleWrapper.textContent.replace(
  /\S/g, "<span class='letter'>$&</span>"
)

var tl = gsap.timeline({defaults: {duration: 1}});

tl
  .from('.letter', { translateY: [-200, 0], stagger: .04 })
  .from('.subtitle', { duration: 0.4, opacity: 0, translateY: [20, 0]})
  .from('.nav-item', { opacity: 0, stagger: .04 })