// import React from 'react'
// import HeroSlider, { Slide } from "hero-slider";

// const firstImage = "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/11/25642_Quote_A3_Kerri-Maniscalco_01-11.jpg"
// const secondImage = "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/12/26/25533_Quote_A3_Spare_12-26.jpg"
// const thirdImage = "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/17/25643_Quote_A3_Chain-of-Thorns_01-17.jpg"

// const Banner = () => {
//   return (
//     <HeroSlider
//       slidingAnimation="left_to_right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
//       onChange={nextSlide => console.log("onChange", nextSlide)}
//       onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
//       style={{
//         // backgroundColor: rgba(0, 0, 0, 0.33)
//       }}
//       settings={{
//         slidingDuration:250,
//         slidingDelay:100,
//         shouldAutoplay:true,
//         shouldDisplayButtons:true,
//         autoplayDuration:5000,
//         height:"100vh"
//       }}
//     >
//       <Slide
//         background={{
//           backgroundImage: firstImage,
//           backgroundAttachment: "fixed"
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImage: secondImage,
//           backgroundAttachment: "fixed"
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImage: thirdImage,
//           backgroundAttachment: "fixed"
//         }}
//       />

//     </HeroSlider>
//     // <>
//     // <h1>Banner</h1>
//     // </>

//   )
// }

// export default Banner


import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Banner = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];

  return (
    <Slide>
      <div className="first-image-slider-parent">
        <div  className='first-image-slider-child' >
          <span>FREE SHIPPING ON ORDERS OF $40 OR MORE</span>
          
        </div>
      </div>
      <div className="first-image-slider-parent">
        <div  className='first-image-slider-child'>
          <span>$20 OFF NOOK GLOWLIGHT 4E</span>
        </div>
      </div >
      <div  className="first-image-slider-parent">
        <div className='first-image-slider-child' >
          <span>BUY ONE, GET ONE 50% OFF JIGSAW PUZZLES</span>
        </div>
      </div>

    </Slide>

  );
};

export default Banner;