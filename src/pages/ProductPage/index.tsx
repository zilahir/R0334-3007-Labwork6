import { IonCard, IonCardHeader } from "@ionic/react";
import React, { ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';

import Layout from "../../components/Layout";
import ProductSelector from "../../components/ProductSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { CartState, wipeCart } from "../../store/reducers/cart";
import styles from "./ProductPage.module.scss";
import { countTotalSum } from "../../store/reducers/cart/selectors"
import Button from "../../components/Button";
import { createNewOrder } from "../../store/reducers/orders";

const ProductPage = (): ReactElement => {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((store): CartState => store.cart)

    function handlePlacingOrder(): void {
        dispatch(createNewOrder({
            order: {
                id: uuidv4(),
                products: products
            }
        }))

        dispatch(wipeCart())
    }
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
            {
                products.length > 0 ? (
                    <Button
                        label="Place this order"
                        onClick={(): void => handlePlacingOrder()}
                    />
                ) : <React.Fragment />
            }
        </Layout>
    )
}

export default ProductPage;