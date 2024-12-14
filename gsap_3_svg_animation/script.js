// var initialPath = `M 10 100 Q 250 100 180 80`

// var finalPath = `M 10 100 Q 250 100 180 80`

var path = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector('#string')

string.addEventListener("mousemove", function(dets){
    var path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        // path is an attribute of svg, so to change attribute value use attr property
        attr: {d: path},
        duration: 0.3,
        // animation ki speed kb tez ho rhi hai kab slow ho rhi hai iske liye gsap easing use krte
        // hai jiski alag alag values hum gsap easing website se le skte hai..
        ease: "power3.out",
    })

})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        // mouseleave hone ke baad string apne initial position pe pahuch jaye isiliye hum 
        // d ki back to its final position kr de rhe hai jise ke mouseleave pe string apne initial 
        // position pe phuch jaye..
        attr:{d:finalPath},
        duration:0.3,
        ease:"elastic.out(1,0.3)",
    })
})

// string.addEventListener("mouseenter",function(dets){
//     console.log(dets.x);
// })

// string.addEventListener("mouseleave",function(det){
//   gives the values of axis whereever the cursor of the mouse moves..
//   with the help of this value we will modify the actual path values.
//     console.log(det.x)
// })