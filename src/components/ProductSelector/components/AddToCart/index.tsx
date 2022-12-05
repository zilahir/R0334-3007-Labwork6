import { IonIcon } from "@ionic/react";
import { ReactElement } from "react";
import { addOutline, removeOutline } from 'ionicons/icons'

import styles from "./AddToCart.module.scss"
import { useAppDispatch } from "../../../../store/hooks";
import { addToCart } from "../../../../store/reducers/cart";

interface IAddToCart {
    productId: string;
    price: string;
}

const AddToCart = ({ productId, price }: IAddToCart): ReactElement => {
    const dispatch = useAppDispatch()

    function handleAttToCart(): void {
        dispatch(addToCart({
            id: productId,
            price,
        }))
    }
    return (
        <div className={styles.addToCartRootContainer}>
            <p onClick={(): void => handleAttToCart()}>
                <IonIcon icon={addOutline} />
            </p>
            <p>
                <IonIcon icon={removeOutline} />
            </p>
        </div>
    )
}

export default AddToCart