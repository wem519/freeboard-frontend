import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ComponentLifecyclePage() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    console.log("Rendered");
    return () => {
      console.log("Bye");
    };
  }, []);

  useEffect(() => {
    console.log("Changed");
  }, [isChange]);

  function onClickToMove() {
    router.push("/");
  }
  function onClickChange() {
    setIsChange(true);
  }
  return (
    <>
      <button onClick={onClickToMove}>이동</button>
      <button onClick={onClickChange}>변경</button>
    </>
  );
}
