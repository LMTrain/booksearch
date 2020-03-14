import React, {useState} from "react";
import "./style.css";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

const items = [
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/books9.webp",
                  altText: 'LM Books Search',
                  caption: 'A Place To Find All Your Books'

                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/books3.jpg",
                  altText: 'LM Books Search',
                  caption: 'A Place To Find All Your Books'
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/books2.jpg",
                  altText: 'LM Books Search',
                  caption: 'A Place To Find All Your Books'
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/books4.jpg",
                  altText: 'LM Books Search',
                  caption: 'A Place To Find All Your Books'
                },
                {
                  src: "https://lmtrain.github.io/lm-images/assets/images/books1.jpg",
                  altText: 'LM Books Search',
                  caption: 'A Place To Find All Your Books'
                }
            ];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carousel-img">
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-img" >
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      {/* {props.children} */}
    </div>
  );
}

// function Hero(props) {
//   console.log("THIS IS PROPS FROM HERO", props)
//   return (
//     <div className="hero text-center" style={{ items: `url(${props.items})` }}>      
//       {props.children}
//     </div>
//   );
// }

export default Hero;
