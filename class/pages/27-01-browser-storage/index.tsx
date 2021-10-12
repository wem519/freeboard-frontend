export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수";
  }
  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "영희");
  }
  function onClickSaveSessionStorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  function onClickGetCookie() {
    console.log("Cookie", document.cookie);

    const temp = document.cookie // temp ="aaa=철수"
      .split(";")
      .filter((el) => el.startsWith("aaa="))[0];
    console.log(temp.split("=")[1]);
  }
  function onClickGetLocalStorage() {
    const asdf = localStorage.getItem("bbb");
    console.log("Local:", asdf);
  }

  function onClickGetSessionStorage() {
    const asdf2 = sessionStorage.getItem("ccc");
    console.log("Session:", asdf2);
  }

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSaveSessionStorage}>
        세션스토리지에 저장하기
      </button>
      =================================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션 스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
