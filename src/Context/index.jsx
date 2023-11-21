import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const value = {
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail
    }

    return (
      <ShoppingCartContext.Provider value={value}>
        {children}
      </ShoppingCartContext.Provider>  
        
    )
}