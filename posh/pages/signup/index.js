export default function Signup() {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "75px",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "#f1f1f1",
              width: "118px",
              height: "118px",
            }}
          ></div>
        </div>
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingTop: "30px" }}>
            <div>이메일*</div>
            <input
              style={{ width: "358px", height: "52px", marginTop: "9px" }}
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div>아이디*</div>
            <input
              style={{ width: "358px", height: "52px", marginTop: "9px" }}
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div>비밀번호*</div>
            <input
              style={{ width: "358px", height: "52px", marginTop: "9px" }}
            ></input>
            <div></div>
          </div>
          <div style={{ paddingTop: "39px" }}>
            <div>비밀번호 확인*</div>
            <input
              style={{ width: "358px", height: "52px", marginTop: "9px" }}
            ></input>
            <div></div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: "358px", height: "54px" }}>시작하기</button>
        </div>
      </div>
    </div>
  );
}
