let nav_icons = document.querySelectorAll('.nav-icons');
let right_box = document.querySelector('#right-box');

let menu_icon = document.querySelector('#menu_icon');

let closing_icon = document.querySelector('.closing_icon')

console.log(nav_icons);

nav_icons.forEach((el)=> {
    console.log(el);
})

var tl = gsap.timeline()

tl.from(right_box,{
    opacity:0,
    translateX: '100%',
    duration:0.5,
})

tl.from(nav_icons,{
    opacity:0,
    x:100,
    duration:0.5,
    stagger:1,
})


//timeline animation is paused until menu-icon is clicked..
let tl1 = tl.pause();

menu_icon.addEventListener('click',function(){
    // timeline animation will be played 
    tl.play();
})

// tl.reverse to reverse the timeline animations.
closing_icon.addEventListener('click',function(){
    tl.reverse();
})


