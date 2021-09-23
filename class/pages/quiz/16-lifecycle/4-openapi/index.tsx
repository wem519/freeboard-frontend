import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPracticePage() {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatImage(image.data.url);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <img src={catImage} />
    </>
  );
}
