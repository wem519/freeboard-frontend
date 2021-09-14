import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal } from "antd";

export default function ModalAddressPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen(false);
  };
  function openZipcode() {
    setIsOpen(true);
  }
  function closeZipcode() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openZipcode}>우편번호 검색</button>
      <div>{myAddress}</div>
      {isOpen && (
        <Modal visible={true} onCancel={closeZipcode}>
          <DaumPostcode onComplete={handleComplete} autoClose />
        </Modal>
      )}
    </>
  );
}
