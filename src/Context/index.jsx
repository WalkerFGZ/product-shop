import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const value = {
        count,
        setCount
    }

    return (
      <ShoppingCartContext.Provider value={value}>
        {children}
      </ShoppingCartContext.Provider>  
        
    )
}