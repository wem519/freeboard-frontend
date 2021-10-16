import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100, // 금액을 state로 해서 입력값을 저장
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          //   console.log(rsp);
          // ...,
          // mutation() => createPointTransaction)fLoading
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" />
      <br />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}

// 앱으로 구현 시 작은 기기(iphone5/iphone6,7,8)에서 구현 후 큰 기기에서 비율을 키우는 방식으로 구현하는 게 효율적

// 모바일로 결제 구현 시 페이지가 이동하기 때문에 m_redirect_url에 결제 후 이동할 주소를 적어주고
// 결제 성공에 대한 명령어도 사라지기 때문에 web hook(Notification)에 백엔드 주소를 입력해서 받아올 수 있도록 해야 함  모바일 구현 시 백엔드 개발자와 소통 필요

// 날짜에 대한 정보는 프론트에서 백엔드로 보내면 안됨 시간은 항상 백엔드에서 만들어야 함 그리고 db에 저장

// 정기결제에 대해서는 크론탭을 사용
