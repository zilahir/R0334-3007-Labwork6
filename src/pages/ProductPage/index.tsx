import { IonCard, IonCardHeader } from "@ionic/react";
import { ReactElement } from "react";

import Layout from "../../components/Layout";
import ProductSelector from "../../components/ProductSelector";
import { useAppSelector } from "../../store/hooks";
import { CartState } from "../../store/reducers/cart";
import styles from "./ProductPage.module.scss";
import { countTotalSum } from "../../store/reducers/cart/selectors"

const ProductPage = (): ReactElement => {
    const { products } = useAppSelector((store): CartState => store.cart)
    return (
        <Layout>
            <IonCard className={styles.totalContainer}>
                <IonCardHeader className={styles.header}>
                    <h4>
                        Total items: {countTotalSum(products).numOfProducts}
                    </h4>
                    <h3>
                        Total sum {countTotalSum(products).totalSum} €
                    </h3>
                </IonCardHeader>
            </IonCard>
            <ProductSelector />
        </Layout>
    )
}

export default ProductPage;