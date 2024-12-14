// scroll hone pe event ko trigger krna hai isiliye window pe hi addeventlistener lgayenge..

// window.addEventListener("click", function(){
//     console.log("click even");
// })

// window.addEventListener("dblclick", function(){
//     console.log("dblclick even");
// })

// gsap.to(".marque",{
//     transform:'translateX(-100%)',
//     // x:-100%,
//     // delay:0.5,
//     duration:2,
//     // baar baar chalega infinity time tak..
//     repeat:-1,
//     // for smooth movement ease ki value ko none kr do..
//     ease:"none"
// })

window.addEventListener("wheel",function(dets){
    // console.log(dets.deltaY);
    if(dets.deltaY > 0){
        // console.log("seedha scrolling")
        gsap.to(".marque",{
            transform:'translateX(-200%)',
            // x:-100%,
            // delay:0.5,
            duration:4,
            // baar baar chalega infinity time tak..
            repeat:-1,
            // for smooth movement ease ki value ko none kr do..
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate: 0,
         })
     
    }else{
        // console.log("reverse scrolling");
        gsap.to(".marque",{
            transform:'translateX(0%)',
            // x:-100%,
            // delay:0.5,
            duration:4,
            // baar baar chalega infinity time tak..
            repeat:-1,
            // for smooth movement ease ki value ko none kr do..
            ease:"none"
        })

        // gsap.to(".marque img",{
        //     rotate: 0,
        //  })
        gsap.to(".marque img",{
            rotate: 180,
         })
    }
})

