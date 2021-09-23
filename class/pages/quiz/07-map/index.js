import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Column = styled.div`
  width: 20%;
`;

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      number
    }
  }
`;

export default function MapProductPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);

  async function onClickDelete(event) {
    // Number(event.target.id)

    await deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  }
  return (
    <div>
      {data?.fetchProducts.map((el, index) => (
        <Row key={el._id}>
          {" "}
          {/*fetchProduct에서 데이터를 받아올 때 productId값을 가지고 받아오기 때문에 하위의 엘리먼트가 아니라 상위의 엘리멘트에 지정해줘야 한다. */}
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{index}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
