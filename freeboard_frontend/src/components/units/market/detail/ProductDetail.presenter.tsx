import Dompurify from "dompurify";

import {
  Wrapper,
  WrapperHeader,
  UserWrapper,
  UserInfo,
  UserPhoto,
  InfoWrapper,
  IconWrapper,
  Line,
  WrapperBody,
  TitleWrapper,
  Title,
  ProductRemarks,
  ProductName,
  LikeWrapper,
  PriceWrapper,
  PhotoWrapper,
  ContentsWrapper,
  TagWrapper,
  MapWrapper,
  Map,
  ButtonWrapper,
  Button,
} from "./ProductDetail.styles";

export default function ProductDetailUI(props: any) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <UserWrapper>
            <UserInfo>
              <UserPhoto
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`}
              />

              <InfoWrapper>
                <div>{props.data?.fetchUseditem.seller?.name}</div>
                <div>
                  Date: {props.data?.fetchUseditem.createdAt.slice(0, 10)}
                </div>
              </InfoWrapper>
            </UserInfo>
          </UserWrapper>
          <IconWrapper>
            <img />
            링크
            <img />
            주소
          </IconWrapper>
        </WrapperHeader>
        <Line />
        <WrapperBody>
          <TitleWrapper>
            <Title>
              <ProductRemarks>
                {props.data?.fetchUseditem.remarks}
              </ProductRemarks>
              <ProductName>{props.data?.fetchUseditem.name}</ProductName>
            </Title>
            <LikeWrapper>
              <img />
              <div>{props.data?.fetchUseditem.pickedCount}</div>
            </LikeWrapper>
          </TitleWrapper>
          <PriceWrapper>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
          </PriceWrapper>
          <PhotoWrapper>
            {props.data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <img
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                  style={{
                    width: "384px",
                    height: " 384px",
                    marginBottom: "30px",
                  }}
                />
              ))}
          </PhotoWrapper>

          <ContentsWrapper>
            {process.browser && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></div>
            )}
          </ContentsWrapper>
          <TagWrapper>
            <div style={{ color: "gray" }}>
              {props.data?.fetchUseditem.tags}
            </div>
          </TagWrapper>
          <MapWrapper>
            <Map id="map"></Map>
          </MapWrapper>
        </WrapperBody>
        <ButtonWrapper>
          <Button onClick={props.onClickMoveToList}>목록으로</Button>
          <Button onClick={props.onClickBuy}>구매하기</Button>
          <Button onClick={props.onClickDelete}>삭제하기</Button>
          <Button onClick={props.onClickMoveToEdit}>수정하기</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
