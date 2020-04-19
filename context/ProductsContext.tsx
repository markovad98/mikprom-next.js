import React, { useState, createContext } from 'react';

export const ProductsContext = createContext({} as any);

interface Props {
    children: JSX.Element;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<any>([]);

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            { children }
        </ProductsContext.Provider>
    )
}
