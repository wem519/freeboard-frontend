import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PlayCircleOutlined)`
  font-size: 50px;
  color: grey;
`;

export default function LibararyIConPage() {
  return (
    <div>
      <MyIcon />
      {/*아이콘은 font취급, 해당 키로 css조절 */}
    </div>
  );
}
