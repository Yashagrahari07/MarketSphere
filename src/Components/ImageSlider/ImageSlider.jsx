import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ImageSliderFooter from './ImageSliderFooter';

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => setCurrentSlide(next),
    ref: sliderRef,
  };

  return (
    <>
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-auto">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
                onClick={() => setCurrentSlide(index)}
              />
            </div>
          ))}
        </Slider>

        <div className="absolute top-1/2 left-4 cursor-pointer text-white transform -translate-y-1/2 bg-black p-2 rounded-full">
          <FaAngleLeft size="1.5rem" onClick={previous} />
        </div>

        <div className="absolute top-1/2 right-4 cursor-pointer text-white transform -translate-y-1/2 bg-black p-2 rounded-full">
          <FaAngleRight size="1.5rem" onClick={next} />
        </div>
      </div>

      <ImageSliderFooter/>
    </>
  );
};

export default ImageSlider;
