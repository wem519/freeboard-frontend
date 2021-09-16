import { Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const SliderStyle = styled(Slider)`
  .slick-slide img {
    width: 500px;
    height: 400px;
    margin: 0 auto;
  }
`;
// 원래 Slider를 SliderStyle로 변경(그냥 하니까 같은 이름이 있어서 오류)
// 이게 아니면 원래 emotion 주던 대로 img클래스를 새로운 값을 주고 설정해도 됨
export default function LayoutBannerUI() {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 100,
    adaptiveHeight: true,
    autoplay: true, // 자동으로 할건지
    autoplaySpeed: 2000, // 넘어가는 속도
    slidesToShow: 1, // 1장씩 보이게
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerMode: true,
    centeredSlides: true,
    centerPadding: 0, // 0px 하면 슬라이드 끝쪽 이미지가 안잘림

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
      <SliderStyle {...settings}>
        <div>
          <img src="/abstract01.jpeg" />
        </div>
        <div>
          <img src="/abstract02.jpeg" />
        </div>
        <div>
          <img src="/abstract03.jpeg" />
        </div>
        <div>
          <img src="/abstract04.jpeg" />
        </div>
      </SliderStyle>
    </Wrapper>
  );
}
