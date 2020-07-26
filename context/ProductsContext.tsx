import React, {useState, createContext, useEffect} from 'react';
import unfetch from "unfetch";
import {BASE_URL} from "../constants/BASE_URL";

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
    const [products, setProducts] = useState<any>([
    ]);

    useEffect(() => {
        unfetch(`${BASE_URL}/products`).then(data => data.json().then(data => {
            const products = data.map((prod: any) => {

                return {...prod, img: `${BASE_URL}${prod.img.url}`}
            })

            setProducts(products)
        }))
    }, [])

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            { children }
        </ProductsContext.Provider>
    )
}
