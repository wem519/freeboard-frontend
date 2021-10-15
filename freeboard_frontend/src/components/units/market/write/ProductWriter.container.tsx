import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWriter.presenter";
import { CREATE_USEDITEM } from "./ProductWriter.queries";
import { useRouter } from "next/router";

export default function ProductWrite() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  return <ProductWriteUI />;
}
