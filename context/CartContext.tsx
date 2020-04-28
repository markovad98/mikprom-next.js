import React, { useState, createContext } from "react";
import {TProduct} from "./ProductsContext";

export const CartContext = createContext({} as any);

type TProps = {
    children: JSX.Element
}


export const CartProvider: React.FC<TProps> = ({ children }: any) => {
    const [products, setProducts] = useState<Array<TProduct>>([]);

    return (
        <CartContext.Provider value={[products, setProducts]}>
            {children}
        </CartContext.Provider>
    );
};
