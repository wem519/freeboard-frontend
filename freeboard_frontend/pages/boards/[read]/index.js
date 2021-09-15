// import {useRouter} from 'next/router'
// import {useQuery, gql} from '@apollo/client'
import BoardCommentWriteUI from "../../../src/components/units/board/BoardComment/write/BoardCommentWrite.presenter";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/board/BoardComment/write/BoardCommentWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
    </>
  );
}
