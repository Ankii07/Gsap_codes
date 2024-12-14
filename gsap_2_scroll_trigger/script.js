// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate: 360
// })

// // scroll trigger use krne ka main motive yh hota hai ki jb user us jgh pe scroll krke
// // aaye tabhi animation trigger ho agr sirf delay lgayenge to yh to confirm nhi hai ki user
// // kitne der baad us jgh pe wh to user to user depend krta hai isiliye scroll trigger ka use krna bhut shi hai..

// // gsap.from("#page2 #box",{
// //     scale:0,
// //     delay:1,
// //     duration:1,
// //     rotate: 360,
// //     // sirf itna likhne se animation trigger tabhi hoga jb hum wha tak scroll krenge.
// //     // aur agr alg alg property ke sath deal krna hai to ek object ke form mai dalna hoga..
// //     // scrollTrigger: "#page2 #box",

// //     scrollTrigger:{
// //         // trigger jisko karna hai 
// //         trigger:"#page2 #box",
// //         // jadatr cases mai scroller body hi hota hai..
// //         scroller: "body",
// //         // marker true krne se wh markers visible ho jate hai jiske starting aur ending position ke 
// //         // help se hum apne animation ko easily kr skte hai..
// //         markers:true,
// //         // markers ke position ko hum adjust bhi kr skte hai..
// //         start: "top 60%",

// //     }
// // })

// gsap.from('#page2 h1',{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller: "body",
//         markers:true,
//         start: "top 50%",
//         end:"top 30%",
//         scrub:2,
//     }
// })
// gsap.from('#page2 h2',{
//     opacity:0,
//     duration:2,
//     x: 500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller: "body",
//         markers:true,
//         start: "top 50%",
//         end: "top 30%",
//         // scrub property dekr yh bol rhe hai ki start se end kee duration tk mai animation ko compolete kre..
//         // scrub property denge to hi baar bar jb bhi scroller wha jayega to animation trigger hoga..
//         scrub:2,

//     }
// })

gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -250%",
        // jb bhi hum pin naam ki property use krenge to hum trigger kreneg parent ko..
        scrub:3,
        // pin property dene se animation jb tak sroll end se nhi milega tb tak niche scroll nhi hoga..
        pin:true
    }
})
