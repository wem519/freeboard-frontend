export default function Login() {
  return (
    <>
      <div
        style={{
          fontSize: "64px",
          marginTop: "220px",
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
        }}
      >
        <div>POSH</div>
      </div>
      <div
        style={{
          marginTop: "34px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "38px" }}>
          <input
            placeholder="email ID"
            style={{ width: "358px", height: "52px" }}
          />
          <div></div>
        </div>
        <div style={{ marginTop: "38px" }}>
          <input
            placeholder="Password"
            style={{ width: "358px", height: "52px" }}
          />
          <div></div>
        </div>
        <div style={{ marginTop: "81px" }}>
          <button style={{ width: "358px", height: "54px" }}>로그인</button>
        </div>
      </div>
    </>
  );
}
