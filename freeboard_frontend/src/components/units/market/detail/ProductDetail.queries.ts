import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      pickedCount
      seller {
        name
        picture
      }
      useditemAddress {
        lat
        lng
      }
      images
    }
  }
`;
