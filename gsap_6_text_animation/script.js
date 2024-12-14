
function breakTheText(){
    // var h1 = document.querySelector("h1");

// var h1Text = h1.textContent;
// simply
let h1 = document.querySelector("h1");
let h1Text = document.querySelector("h1").textContent;
// console.log(h1Text);

// split ke braces mai jo likhenge uske base pe split krega
// agr space diya to space ke base pe aur agr khuch bhi nhi diya aur ek simply
// empty string pass kiya to share characters ek ek mai split hokr ek array mai aa 
// jayega..
// var splittedText = h1Text.split(" ")

var splittedText = h1Text.split("")
// console.log(splittedText);

var clutter = "";
var halfValue = Math.floor(splittedText.length/2)
splittedText.forEach(function(elem,idx){
    // clutter += elem
    // clutter += `<span>${elem}</span>`

    if(idx < halfValue){
        // console.log(elem+'a');
        clutter += `<span class="a">${elem}</span>`
    }
    else{
        // console.log(elem+'b');
        clutter += `<span class="b">${elem}</span>`
    }
})

h1.innerHTML = clutter;
}

breakTheText();

// gsap.from("h1 span",{
//     opacity: 0,
//     // hum yha pe y:100 lgaye hai wh directly nhi chlega yha pe ek important baat gaur krne wali yh hai ki
//     // hum animation lagr ek span tag pe jo ki ek inline element hai y: 100 simply kr rha hai ki transform translate lga rha
//     // aur kyki transform translate inline element pe nhi chalta isiliye ise phle inline block mai convert krenge css mai tbhi chalega..
//     y:100,
//     duration:1,
//     delay: 0.5,
//     // stagger: 0.3,
//     // agr stagger ki value - mai de diya to one by one aayega reverse direction se..
//     stagger: -0.3,
// })

gsap.from("h1 .a",{
    x:100,
    duration: 0.6,
    delay: 0.5,
    stagger:0.15,
    opacity: 0,
})

gsap.from("h1 .b",{
    x:-100,
    duration: 0.6,
    delay: 0.5,
    stagger:0.15,
    opacity: 0,
})