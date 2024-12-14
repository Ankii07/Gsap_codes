import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// command to install gsap react npm install @gsap/react
const App = () => {
  // way to use gsap.. without useref
  // useGSAP(() =>{
  //     gsap.to(".box",{
  //       x:1000,
  //       duration:2,
  //       delay:1,
  //     })
  // })

  // useref way to use gsap

  // const gsapRef = useRef()

  // useGSAP(() =>{
  //   gsap.to(gsapRef.current,{
  //     x:1500,
  //     duration: 2,
  //     delay:1,
  //     rotate: 720
  //   })
  // })

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     x:300,
  //     opacity: 0,
  //     rotate: 720,
  //     duration: 1,
  //     delay: 1,
  //     // repeat:-1,
  //   })
  // })

  // const boxRef = useRef();

  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{
  //     x:300,
  //     opacity: 0,
  //     rotate: 720,
  //     duration: 1,
  //     delay: 1,
  //     // repeat:-1,
  //   })
  // })

  // same upr wale cheez ko scope dependency dekr kr skte hai..
  // scope mai css selector denge..

  // bina ref ke bhi use ho jayega..
  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     x:300,
  //     opacity: 0,
  //     rotate: 720,
  //     duration: 1,
  //     delay: 1,
  //     // repeat:-1,
  //   })
  // },{scope:".container"})

  // const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       x: 300,
  //       opacity: 0,
  //       rotate: 720,
  //       duration: 1,
  //       delay: 1,
  //       // repeat:-1,
  //     });
  //   },
  //   { scope: ".container" }
  // );

  // yha pe do classes hai box ke  aur hum jb sirf usegsap ka use krke
  // animate kr rhe hai to dono pe hi chal ja rha hai sirf ek pr hi chalana ho to hum
  // useref ke use krenge aur jispe use krna hoga uspe hi sirf tag ref denge..

  const [circle, setCircle] = useState(10)
  // console.log(circle+"c");
  // random number between -500 and 500 which is multiple of 10
  // const random = gsap.utils.random(-500, 500, 10)
  // console.log(random+"r");

  // const random = gsap.utils.random(-500, 500, 100)
  // // yha pe animate krne ke liye dependency lagani hogi selected element ki..
  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x:circle,
  //     duration: 0.5,
  //   })
  // },[circle])


  const randomX = gsap.utils.random(-500, 500, 100)
  const rotateX = gsap.utils.random(-360, 360, 0)

  const [xValue, setXValue] = useState(0)

  const [roti, setRoti] = useState(0)

  const boxRef = useRef()
  useGSAP(()=>{
    // boxRef.current string mai nhi dena hai..
      gsap.to(boxRef.current,{
        x:xValue,
        duration: 1,
        rotate:roti
      })
    },[xValue, roti])

  return (
    <main>
      {/* <div ref={container} className="container">
        <div className="circle"></div>

        <div className="box"></div>
      </div>

      <div className="khuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      <button onClick={()=>{
        // setCircle(random)
        // use state yhi se circle value nhi update kr degi phle yh pura function run hoga 
        // circle value jo phle set thi whi console hogi jub state function se bahar hoga phir jakr state ki value ko update krega
        //  console.log(circle);

        setXValue(randomX)
        setRoti(rotateX)
      }}
      >Animate</button>
      <div ref={boxRef} className="circle"></div>

    </main>
  );
};

export default App;
