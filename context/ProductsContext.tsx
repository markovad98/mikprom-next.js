import React, { useState, createContext } from 'react';

export const ProductsContext = createContext({} as any);

interface Props {
    children: JSX.Element;
}

export type TProduct = {
    img: string,
    title: string,
    price: number,
    count: number,
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<Array<TProduct>>([
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)1",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)2",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)3",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)4",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)5",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)6",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)7",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)8",
            price: 500,
            count: 1
        },
        {
            img: require("../public/images/chickenPhotos/1.svg"),
            title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)9",
            price: 500,
            count: 1
        },
    ]);

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            { children }
        </ProductsContext.Provider>
    )
}
