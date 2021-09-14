import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function AddressPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
  };

  return <DaumPostcode onComplete={handleComplete} autoClose />;
}
