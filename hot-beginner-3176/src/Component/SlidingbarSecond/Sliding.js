
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Center, Square, Circle } from '@chakra-ui/react'
import styles from './Sliding.module.css';
const Sliding = () => {


  return (
    <div>
      <div className={styles.whitespacing}>
        {/* <span  ></span> */}
      </div>
      <Slide>
        <div className="second-image-slider-child">
          <div className='second-image-slider-child' >
            {/* <span>FREE SHIPPING ON ORDERS OF $40 OR MORE</span> */}
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/11/25642_Quote_A3_Kerri-Maniscalco_01-11.jpg" />
          </div>
        </div>
        <div className="second-image-slider-child">
          <div className='second-image-slider-child'>
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25641_Quote_A3_Haunted_House_01-10.jpg" />
          </div>
        </div >
        <div className="second-image-slider-child">
          <div className='second-image-slider-child' >
            <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25641_Quote_A3_Haunted_House_01-10.jpg" />
          </div>
        </div>
      </Slide>

      <Center className={styles.paragphFind} bg='white' h='70px' color='black'>
        FIND YOUR PLACE AT B&N'S ONLINE BOOKSTORE
        Over 5 million books ready to ship, 3.6 million eBooks and 300,000 audiobooks to download right now! Curbside pickup available in most stores!
      </Center>
      <div className={styles.line}>

      </div>
      {/* <hr /> */}

    </div>




  );
};

export default Sliding;
// import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
// import { Box } from '@chakra-ui/react';
// import styles from './Sliding.module.css';
// const images = [
//   { url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/11/25642_Quote_A3_Kerri-Maniscalco_01-11.jpg" },
//   { url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25641_Quote_A3_Haunted_House_01-10.jpg" },
//   { url: "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25641_Quote_A3_Haunted_House_01-10.jpg" },
// ];

// const Sliding = () => {
//   return (
//     <>
//       <div>
//         <div className={styles.whitespacing}>
//         </div>
//         {/* <SimpleImageSlider

//           width={1530}
//           height={504}
//           images={images}
//           showBullets={true}
//           showNavs={true}
//         /> */}
//       </div>

//       <div>
//         <Box bg='tomato' w='100%' p={4} color='white'>
//           This is the Box
//         </Box>
//       </div>
//     </>

//   );
// }

// export default Sliding;