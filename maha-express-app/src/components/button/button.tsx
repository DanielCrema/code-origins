import React from "react"
import styles from "./button.module.css"

type ButtonProps = {
    children: React.ReactNode
    icon?: string
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={`${styles.button}`}>
            {props?.icon && <img src={`/${props.icon}.svg`} className={styles.icon} alt="icon" />}
            {children}
        </button>
    )
}

export default Button