import React from 'react';
import classNames from 'classnames';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    variant: 'primary' | 'secondary' | 'destructive'
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary' }) => {

    const variants = {
        primary: "bg-[#007bff] text-white",
        secondary: "bg-[#6c757d] text-white",
        destructive: "bg-[#dc3545] text-white h-fit"
    }
    
    
    return (
        <button type="button" className={classNames('px-2.5 h-full w-24 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:opacity-90', variants[variant])}>
            {children}
        </button>
    )
}

export default Button;