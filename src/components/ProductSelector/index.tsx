import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonImg } from "@ionic/react";
import { ReactElement } from "react";
import { Virtuoso } from 'react-virtuoso';


import styles from "./Productselector.module.scss";
import AddToCart from "./components/AddToCart";

import { getAllProducts } from "../../store/reducers/products";
import useApi from "../../hooks/useApi";
import { selectAllProducts } from "../../store/reducers/products/selectors";

const ProductSelector = (): ReactElement => {
    
    const { data: products } = useApi({ apiFn: getAllProducts, selector: selectAllProducts })
    return (
        <IonContent>
            <Virtuoso
                style={{
                    height: '100%',
                }}
                totalCount={products.length}
                data={products}
                className={styles.scrollerContainer}
                itemContent={(index, product): ReactElement => (
                    <div style={{
                        margin: "40px 10px",
                    }}>
                        <IonCol key={product.id} className={styles.singleProduct}>
                            <IonCard>
                                <IonCardHeader className={styles.cardheader}>
                                    <h3 className={styles.productName}>
                                        {product.name}
                                    </h3>
                                    <IonImg className={styles.productImage} src={product.image} />
                                </IonCardHeader>
                                <IonCardContent className={styles.productCardContainer}>
                                    <div className={styles.left}>
                                        <div className={ styles.slideHeader }>
                                            {product.price} €
                                        </div>
                                    </div>
                                    <div className={styles.right}></div>
                                        <AddToCart price={product.price} productId={product.id} />
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </div>
                )}
            />
        </IonContent>
    )
}

export default ProductSelector