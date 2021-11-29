export default function mypage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "46px",
        }}
      >
        <div style={{ fontSize: "30px" }}>POSH</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
          }}
        ></div>
        <div style={{ paddingTop: "15px" }}>뭉치</div>
      </div>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "25px",
            }}
          >
            <span
              style={{
                width: "120px",
                height: "42px",
                backgroundColor: "#f1f1f1",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Pick
            </span>
            <span
              style={{
                width: "120px",
                height: "42px",
                backgroundColor: "#f1f1f1",
                border: "1px solid black",
                margin: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Selling
            </span>
            <span
              style={{
                width: "120px",
                height: "42px",
                backgroundColor: "#f1f1f1",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Sold out
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
          <span
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid black",
              backgroundColor: "#f1f1f1",
              margin: "1px",
            }}
          ></span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#f1f1f1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./home.png"></img>
          <div>홈</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./search.png"></img>
          <div>검색</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="./circle.png"
            style={{ width: "20px", height: "20px" }}
          ></img>
          <div>등록</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./chat.png"></img>
          <div>채팅</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./mypage.png"></img>
          <div>마이마켓</div>
        </div>
      </div>
    </>
  );
}
