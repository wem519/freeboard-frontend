import { withAuth } from "../../../src/components/commons/hocs/WithAuth";
import ProductDetail from "../../../src/components/units/market/detail/ProductDetail.container";

const ProdcutDetailPage = () => {
  return (
    <>
      <ProductDetail />
    </>
  );
};

export default withAuth(ProdcutDetailPage);
