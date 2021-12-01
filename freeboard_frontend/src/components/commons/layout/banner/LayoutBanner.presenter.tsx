import { Wrapper, SliderImage } from "./LayoutBanner.styles";
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <SliderImage src="/Thorong_La.JPG"></SliderImage>
          </div>
          <div>
            <SliderImage src="/Taj_Mahal.JPG"></SliderImage>
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
