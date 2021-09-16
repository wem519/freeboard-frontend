import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.div`
  margin: 20px;
`;
const Row = styled.div`
  display: flex;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickRow(event) {
    alert("클릭");
    alert(event.currentTarget.id);
  }

  return (
    <>
      <div>이벤트버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
//지금 전파된 이벤트에 의해서 실행된 이벤트 타겟 =>이벤트커런트 타겟
