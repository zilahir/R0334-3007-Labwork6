import { IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonImg, IonSlide, IonSlides, IonVirtualScroll } from "@ionic/react";
import { ReactElement } from "react";
import { Virtuoso } from 'react-virtuoso';
import classnames from "classnames"

import { productsApi } from "../../utils/routes/api/products";
import styles from "./Productselector.module.scss";
import AddToCart from "./components/AddToCart";

const ProductSelector = (): ReactElement => {
    const products = productsApi.getAllProducts();

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
                                        <IonCardHeader className="ion-no-padding">
                                            <IonImg className={styles.productImage} src={product.image} />
                                        </IonCardHeader>
                                        <IonCardContent className={styles.productCardContainer}>
                                            <div className={styles.left}>
                                                <div className={ styles.slideCount }>
                                                    <h3 className={styles.productName}>
                                                        {product.name}
                                                    </h3>
                                                </div>
                                                <div className={ styles.slideHeader }>
                                                    {product.price} €
                                                </div>
                                            </div>
                                            <div className={styles.right}></div>
                                                <AddToCart productId={product.id} />
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