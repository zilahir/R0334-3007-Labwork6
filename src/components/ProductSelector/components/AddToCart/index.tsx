import { IonIcon } from "@ionic/react";
import { ReactElement } from "react";
import { addOutline, removeOutline } from 'ionicons/icons'
import classnames from "classnames"

import styles from "./AddToCart.module.scss"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addToCart, CartState, removeItemFromCart } from "../../../../store/reducers/cart";

interface IAddToCart {
    productId: string;
    price: string;
}

const AddToCart = ({ productId, price }: IAddToCart): ReactElement => {
    const dispatch = useAppDispatch();

    const { products } = useAppSelector((store):CartState => store.cart)
    
    const isThisProductAdded = !products.some(({ id }): boolean => id === productId)

    function handleAttToCart(): void {
        dispatch(addToCart({
            id: productId,
            price,
        }))
    }

    function handleRemoveFromCart(): void {
        if (isThisProductAdded) {
            void 0
        } else {
            dispatch(removeItemFromCart({
                id: productId
            }))
        }
    }

    
    return (
        <div className={styles.addToCartRootContainer}>
            <p
                onClick={(): void => handleRemoveFromCart()}
                className={classnames(
                    !products.some(({ id }): boolean => id === productId) && styles.disabled
                )}
            >
                <IonIcon icon={removeOutline} />
            </p>
            <p onClick={(): void => handleAttToCart()}>
                <IonIcon icon={addOutline} />
            </p>
        </div>
    )
}

export default AddToCart