import { ReactElement } from "react";
import Layout from "../../components/Layout";
import ProductSelector from "../../components/ProductSelector";

const ProductPage = (): ReactElement => (
    <Layout>
        <ProductSelector />
    </Layout>
)

export default ProductPage;