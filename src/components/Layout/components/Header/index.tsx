import { IonButton, IonHeader, IonIcon } from "@ionic/react";
import { ReactElement } from "react";
import { returnUpBackOutline } from "ionicons/icons"
import styled from "styled-components"

import styles from "./Header.module.scss";

interface IHeader {
    rightIcon?: string
    rightIconOnclick?: () => void
}

const StyledButton = styled.button`
    font-size: 30px;
    background: transparent;
`

const Header = ({ rightIcon, rightIconOnclick }: IHeader): ReactElement => (
    <IonHeader className={styles.headerRootContainer}>
        <div>
            <StyledButton onClick={(): void => alert("hello")} >
                <IonIcon icon={returnUpBackOutline} />
            </StyledButton>
        </div>
        {
            (rightIcon && rightIconOnclick) && (
                <StyledButton onClick={(): void => alert("hello")} >
                    <IonIcon icon={rightIcon} />
                </StyledButton>
            )
        }
    </IonHeader>
)

export default Header;