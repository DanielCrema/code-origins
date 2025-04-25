import React, { ReactNode } from 'react';

type HeaderProps = {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, children }) => {
    return (
        <header className='relative flex flex-col items-center justify-center gap-2 min-h-[150px] p-5 text-center bg-gray-50 border-b border-gray-300'>
            <h1 className='text-4xl text-gray-800'>
                {title}
            </h1>
            {subtitle && 
                <h2 className='m-0 text-xl text-gray-600'>
                    {subtitle}
                </h2>}
            {children}
        </header>
    );
};

export default Header;