// // to use gsap
// //jaise css mai selector likhte hai same usi trah se likhna hai
// // jb hum element ko initial se final position ke traf lekr gya to hum use krte hai gsap.to
// gsap.to("#box1",{
//     //hum yha bol rhe hai ki box id ke element ko pkdo 
//     //usko x-axis pe 1000px move krdo jisko krne mai 2 sec lgne chahiye aur
//     //animation shuru website ke load hone ke 1 sec baad start ho
//     x:1000,
//     duartion: 15,
//     delay:2,
// })

// gsap.to("#box2",{
//     //hum yha bol rhe hai ki box id ke element ko pkdo 
//     //usko x-axis pe 1000px move krdo jisko krne mai 2 sec lgne chahiye aur
//     //animation shuru website ke load hone ke 1 sec baad start ho
//     x:500,
//     y:500,
//     duartion: 15,
//     delay:1
// })

//gsap.from mai final se initial position pe

// gsap.to("#box2",{
//     //hum yha bol rhe hai ki box id ke element ko pkdo 
//     //usko x-axis pe 1000px se usko apne original space pe move krdo jisko krne mai 2 sec lgne chahiye aur
//     //animation shuru website ke load hone ke 1 sec baad start ho
//     x:1200,
//     duartion: 1000,
//     delay:1,
//     rotate: 360,
//     borderRadius: "50%",
//     backgroundColor: "Red",
//     ek animation ko infinite baar chalane ke liye....
//     repeat: -1,
//     just like bounce back....
//     yoyo:true,
// })

// // gsap.to("#box1",{
// //     x:1000,
// //     duartion: 2,
// //     delay:1,
// //     rotate: 360,
// //     // string aur special character ko quotes mai hi likhte hai
// //      backgroundColor: "blue",
// //      borderRadius: "50%",
// //     // scale: 0.5,
// // })

gsap.from("h1",{
    opacity: 0,
    duration: 1,
    y:30,
    delay:1,
    //same tag aur name ke element ko ek ek krke lane ke liye use hota hai stagger
    stagger: 1,

})

// gsap.to("#box1",{
//     x:1200,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     //repeat 1 krne se do bar chalega 2 krne se 3 baar yaani ek bar jada infite bar chalane ke liye use krna hoga -1
//     repeat: -1,
//     //aur aap chahte ho ki initial position se final mai jaye aur phir final se jakr intial pe bhi aa jaye to use krte hai
//     //yoyo property jisko true set krna hota hai
//     backgroundColor: "blue",
//     scale: 0.75,
//     yoyo:true,
//     borderRadius: "50%",
// })

var tl = gsap.timeline()
// timeline mai cheeze automatically sync mai chalti hai phle phla wala chalega aur phir dusra wala..
//delay dalne ki ek ke baad as such juroori nhi hai

// tl.to("#box1",{
//     x:1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1, 
// })

// tl.to("#box2",{
//     x:1500,
//     duration:1.5,

// })
// tl.to("#box3",{
//     x:1500, 
//     duration:1.5,
// })

tl.from("#nav h2",{
    opacity: 0,
    y:-20,
    duration: 1,
})

tl.from("#nav h4",{
    opacity:0,
    y:-20,
    duration: 1,
    stagger:1,
})

tl.to("h1",{
    y:20,
    opacity: 0,
    duration: 1,
    scale: 0.2,
})