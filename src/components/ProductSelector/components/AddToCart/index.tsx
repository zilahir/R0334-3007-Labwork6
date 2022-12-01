import { IonIcon } from "@ionic/react";
import { ReactElement } from "react";
import { addOutline, removeOutline } from 'ionicons/icons'

import styles from "./AddToCart.module.scss"

interface IAddToCart {
    productId: string;
}

const AddToCart = ({ productId }: IAddToCart): ReactElement => (
    <div className={styles.addToCartRootContainer}>
        <p>
            <IonIcon icon={addOutline} />
        </p>
        <p>
            <IonIcon icon={removeOutline} />
        </p>
    </div>
)

export default AddToCart