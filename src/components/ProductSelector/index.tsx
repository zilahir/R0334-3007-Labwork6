import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonImg, IonSlide, IonSlides, IonVirtualScroll } from "@ionic/react";
import { ReactElement, useMemo } from "react";
import { Virtuoso } from 'react-virtuoso';

import { Product, productsApi } from "../../utils/routes/api/products";
import styles from "./Productselector.module.scss";
import AddToCart from "./components/AddToCart";

const ProductSelector = (): ReactElement => {
    const products = useMemo((): Product[] => productsApi.getAllProducts(), []);

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