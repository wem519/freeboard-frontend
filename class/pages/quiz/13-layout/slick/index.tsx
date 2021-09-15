import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div>1</div>
        </div>
        <div>
          <div>2</div>
        </div>
        <div>
          <div>3</div>
        </div>
        <div>
          <div>4</div>
        </div>
        <div>
          <div>5</div>
        </div>
        <div>
          <div>6</div>
        </div>
      </Slider>
    </>
  );
}
