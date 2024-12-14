var tl = gsap.timeline()

tl.from(".navigation", {
  opacity: 0,
  y: -20,
  duration: 0.4,
  delay: 0.5,
});

tl.from(".navigation_logo", {
  opacity: 0,
  x: 20,
  duration: 0.5,
});

tl.from(".navigation_logo h1", {
  opacity: 0,
  x: 40,
  duration: 0.5,
});

tl.from(".navigation_links h1", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  stagger: 0.3,
});

tl.from(".navigation_links button", {
  opacity: 0,
  y: -40,
  duration: 0.5,
});

tl.from(
  ".navigating-bar",
  {
    opacity: 0,
    x: 20,
    duration: 0.5,
  },
  "-=1"
);

tl.from(".navigating-para", {
  opacity: 0,
  x: 40,
  duration: 0.5,
});

tl.from(".navigating-button", {
  opacity: 0,
  y: -20,
  duration: 0.5,
});

tl.from(
  ".center-part2 img",
  {
    opacity: 0,
    x: -20,
    duration: 0.5,
    // "-=1 dene se wh apne timeline se 1 second phle hi chalne lagega.."
  },
  "-=1"
);

tl.from(".logos img", {
  opacity: 0,
  y: 20,
  duration: 0.3,
  stagger: 0.3,
});

// scroll trigger hr baar likhne se bdhiya hai ki ek jgh define kr do to sare jgh defined ho jayega..
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top -20%",
    scrub:2,
  }
})

tl2.from(".services",{
    opacity:0,
    x:-50,
    duaration:0.3,
},)

// agr dono elements ko ek hi sath trigger krna hai to same string pass kr do dono ko..

tl2.from(".image-cards-1",{
    opacity:0,
    x:-70,
    duaration:0.6,
},"anki")

tl2.from(".image-cards-2",{
    opacity:0,
    x:70,
    duaration:0.6,
},"anki")

tl2.from(".image-cards-3",{
    opacity:0,
    x:-70,
    duaration:0.6,
},"ankit")

tl2.from(".image-cards-4",{
    opacity:0,
    x:70,
    duaration:0.6,
},"ankit")