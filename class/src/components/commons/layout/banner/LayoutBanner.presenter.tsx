import { Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 500px;
  height: 400px;
  margin: 0 auto;
`;
export default function LayoutBannerUI() {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 100,
    adaptiveHeight: true,
    autoplay: true, //자동으로 할건지
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToShow: 1, // 1장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centeredSlides: true,
    centerPadding: 0, // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    swipeToSlide: true,
    variableWidth: false,

    // responsive: [
    //   {
    //     breakpoint: 1401,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Image src="abstract01.jpeg" />
        </div>
        <div>
          <Image src="abstract02.jpeg" />
        </div>
        <div>
          <Image src="abstract03.jpeg" />
        </div>
        <div>
          <Image src="abstract04.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
