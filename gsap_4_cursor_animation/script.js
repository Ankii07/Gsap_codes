let main = document.querySelector('#main');

let cursor = document.querySelector('#cursor');

let imageDiv = document.querySelector("#transparent_layer");

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out(1.7)",
    })
})

// sirf yh sare code likhne se zitter effect hoga agr zitter effect ke bare mai
// janana hai to behtar hai ki aap video dekhle 
// basically ho yh rha hai ki mouseenter pe cursor ko bda kr rhe hai aur jb cursor bda ho rha
// hai mousepointer cursor ke upr hai cursor jb bda ho rha hai mousepointer ka contact smjh lo image
// se ht ja rha hai jis se ki mouseleave trigger ho ja rha hai jb mouseleave trigger ho ja rha hai as per the condition
// cursor chota ho ja rha hai aur jb cursor chota ho ja rha hai mousepointer enter ho ja rha hai aur mouseenter ho ja rha hai
// yhi back and forth chal rha hai zisse ki zitter effect ho rha  hai..

// is problem se deal krne ke liye hum krenge kya ki ek transparent part lga denge cursor aur mouse pointer ke bich
// aur uske z-index cursor se bdi kr denge ziise ki cursor bdi hogi aur kyki aur transparent layer ke piche hai isse mouseleave 
// trigger nhi hoga kyuki wh transparent laye ke piche hogi..

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 4
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""

    gsap.to(cursor,{
        scale:1
    })
})