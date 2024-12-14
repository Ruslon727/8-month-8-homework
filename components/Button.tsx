"use client"
import React, { ReactNode } from "react"

interface ButtonType {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    title: string
    extraStyle?: string
    onClick?: () => void
    type:"submit" | "button" | "reset"
}
const Button: React.FC<ButtonType> = ({ leftIcon, extraStyle, onClick, rightIcon, title, type }) => {
    return (
        <button type={type} onClick={onClick} className={`${extraStyle} bg-[#46A358] text-white py-[7px] rounded-[6px] font-medium text-[16px] flex items-center justify-center gap-[4px] px-[17px] `}>
            {leftIcon && leftIcon}
            {rightIcon && rightIcon}
            <span>{title}</span>
        </button>
    )
}

export default Button