import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWriter.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ProductWriter.queries";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [myLat, setMyLat] = useState("");
  const [myLng, setMyLng] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  async function onClickSubmit(data) {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
          },
          useditemAddress: {
            address: myAddress,
            myAddressDetail: myAddressDetail,
            lat: myLat,
            lng: myLng,
          },
        },
      });

      alert("ok");
      router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log(error);
    }
  }
  function onChangeMyEditor(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    trigger("contents");
  }
  function onChangeAddressDetail(event) {
    setMyAddressDetail(event.target.value);
  }
  function onClickMoveToList() {
    router.push("/markets");
  }

  async function onClickUpdate(data) {
    const result = await updateUseditem({
      variables: {
        useditemId: router.query.read,
        updateUseditemInput: {
          ...data,
          useditemAddress: {
            lat: myLat,
            lng: myLng,
          },
        },
      },
    });
    console.log(data);
    alert("상품을 수정합니다");
    router.push(`/markets/${result.data?.updateUseditem._id}`);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.485148, 126.895113), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        const geocoder = new window.kakao.maps.services.Geocoder();
        // console.log(geocoder);
        const coord = new window.kakao.maps.LatLng(myLat, myLng);
        const test = function (coords, callback) {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        };
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            test(mouseEvent.latLng, function (result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                setMyAddress(result[0].address.address_name);
              }
            });

            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            setMyLat(latlng.getLat());
            setMyLng(latlng.getLng());
            setMyAddress(geocoder.coord2Address);
            // console.log(myAddress);
          }
        );
      });
    };
  }, []);

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      onChangeMyEditor={onChangeMyEditor}
      aaa={props.aaa}
      myLat={myLat}
      myLng={myLng}
      myAddress={myAddress}
      myAddressDetail={myAddressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickMoveToList={onClickMoveToList}
      onClickUpdate={onClickUpdate}
    />
  );
}
