import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  //async await사용하고  state를 사용하여 저장해야 함

  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
    }
    getImage();
  }, []);
  return (
    <>
      <div>오픈API</div>
      <img src={dogImage} />
    </>
  );
}
