import ProductWrite from "../../../../src/components/units/market/write/ProductWriter.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      seller {
        name
      }
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.read,
    },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
