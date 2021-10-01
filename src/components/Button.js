import React from 'react'

function Button({onClick,className,children,style}) {
    return (
        <button style={style} onClick={onClick}
        className={`hover:opacity-80 bg-primary font-semibold text-xs sm:text-md lg:text-lg p-3 rounded-2xl transition-all duration-150 ${className}`} >
            {children}
        </button>
    )
}

export default Button;
