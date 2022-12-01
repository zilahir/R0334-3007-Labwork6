import { ReactElement } from "react";

import styles from "./AddToCart.module.scss"

const AddToCart = (): ReactElement => (
    <div className={styles.addToCartRootContainer}>
        <p>+</p>
        <p>-</p>
    </div>
)

export default AddToCart