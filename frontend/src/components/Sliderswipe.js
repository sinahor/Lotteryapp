import './Sliderswipe.css';

import { Carousel } from 'react-carousel-minimal';
import lottery_icons from '../images/lottery_img1.jpg'
import lottery1_icons from '../images/lottery2.jpg'
import lottery2_icons from '../images/lottery3.jpg'
import lottery3_icons from '../images/lottery4.jpg'

 export default function Sliderswipe() {
 const data = [
    {
        image:lottery_icons
    },
    {
        image:lottery1_icons
    },
    {
        image:lottery2_icons
    },
    {
        image:lottery3_icons
    },

    // {
    // //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    // // 
    // caption: "San Francisco",
     
    // },
    // {
    //   image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    // src: lottery_icons,  
    // caption: "Scotland"
    // },
    // {
    //   image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    //   caption: "Darjeeling"
    // },
    // {
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    //   caption: "San Francisco"
    // },
    // {
    //   image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling"
    // },
 
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="slider_outer">
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            // width="850px"
            // height="500px"
            width="200%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
            // maxWidth: "850px",
            // maxHeight: "500px",
            // margin: "40px auto",
            }}
          />
          
        </div>
      </div>
    </div>
  );
};