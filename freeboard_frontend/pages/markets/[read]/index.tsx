import { withAuth } from "../../../src/components/commons/hocs/WithAuth";
import ProductDetail from "../../../src/components/units/market/detail/ProductDetail.container";
import QuestionWritePage from "../../../src/components/units/market/question/write/QuestionWrite.container";

const ProdcutDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <QuestionWritePage />
    </>
  );
};

export default withAuth(ProdcutDetailPage);
