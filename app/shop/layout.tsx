"use client"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"
import React, { ReactNode } from "react"

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const path = usePathname()
    return (
        <div>
            <div>Home / Shop {path.includes("shopping-cart") && "/ Shopping Cart"}</div>
            {children}
            <Footer/>
        </div>
    )
}

export default layout