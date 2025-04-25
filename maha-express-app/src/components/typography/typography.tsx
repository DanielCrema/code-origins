import React from "react"
import styles from "./typography.module.css"
import classNames from "@/utils/classNames"

type Typography = {
    children: React.ReactNode
    variant?: "sm" | "md" | "lg"
}

const Typography: React.FC<Typography> = ({ children, variant = 'md' }) => {
    const size = {
        sm: styles.typographySm,
        md: styles.typographyMd,
        lg: styles.typographyLg
    }[variant]

    if (variant === 'lg') {
        return (
            <h1 className={classNames(styles.typography, size)}>
                {children}
            </h1>
        )
    
    }

    return (
        <p className={classNames(styles.typography, size)}>
            {children}
        </p>
    )
}

export default Typography