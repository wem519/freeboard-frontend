import Input01 from "../../../commons/input/01/input01";
import Context from "../../../commons/context";
import {
  Wrapper,
  Title,
  Location,
  MapWrapper,
  Label,
  Location2,
  Gps,
  GpsWrapper,
  GpsInput,
  Address,
  AddressInput,
  ImgWrapper,
  Image,
  RadioWrapper,
  RadioLabel,
  RadioButton,
  Submit,
} from "./ProductWriter.styles";

export default function ProductWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Wrapper>
        <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
        <Input01
          type="text"
          name="상품명"
          register={props.register("name")}
          defaultValue={props.data?.fetchUseditem.name}
          value={props.data?.fetchUseditem.name}
        />
        <Input01
          type="text"
          name="한줄요약"
          register={props.register("remarks")}
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        <Context onChange={props.onchangeMyEditor} name="상품설명" />
        <Input01
          type="text"
          name="판매가격"
          register={props.register("price")}
          defaultValue={props.data?.fetchUseditem.price}
        />
        <Input01
          type="text"
          name="태그입력"
          register={props.register("tags")}
          defaultValue={props.data?.fetchUseditem.tags}
        />
        <Location>
          <MapWrapper>
            <Label>거래위치</Label>
            <div
              id="map"
              style={{ width: "384px", height: "252px", marginTop: "16px" }}
            />
          </MapWrapper>
          <Location2>
            <Gps>
              <Label>gps</Label>
              <GpsWrapper>
                <GpsInput type="text" value={props.myLat} readOnly></GpsInput>
                <img />
                <GpsInput type="text" value={props.myLng} readOnly></GpsInput>
              </GpsWrapper>
            </Gps>
            <Address>
              <Label>주소</Label>
              <AddressInput value={props.myAddress} readOnly></AddressInput>
              <AddressInput></AddressInput>
            </Address>
          </Location2>
        </Location>
        <ImgWrapper>
          <Label>사진 첨부</Label>
          <Image>
            <div>+</div>
            <div>Upload</div>
          </Image>
          <Image>
            <div>+</div>
            <div>Upload</div>
          </Image>
        </ImgWrapper>
        <RadioWrapper>
          <Label>메인 사진 설정</Label>
          <RadioButton type="radio" name="image"></RadioButton>
          <RadioLabel>사진1</RadioLabel>

          <RadioButton type="radio" name="image"></RadioButton>
          <RadioLabel>사진2</RadioLabel>
        </RadioWrapper>
        <Submit type="submit">등록하기</Submit>
      </Wrapper>
    </form>
  );
}
