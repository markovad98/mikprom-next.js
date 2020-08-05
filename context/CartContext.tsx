import React, { useState, createContext } from "react";

export const CartContext = createContext({} as any);

type TProps = {
    children: JSX.Element
}


export const CartProvider: React.FC<TProps> = ({ children }: any) => {
    const [isActiveWidget, setIsActiveWidget] = useState(false);

    return (
        <CartContext.Provider value={[isActiveWidget, setIsActiveWidget]}>
            {children}
        </CartContext.Provider>
    );
};
