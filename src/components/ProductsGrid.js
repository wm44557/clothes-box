import React from 'react';
import tw from 'tailwind-styled-components';
import ProductsBar from "./ProductsBar";
import ProductCard from "./ProductCard";


const ProductsGrid = ({products}) => {
    const productsItems = products.map((product) => (
        <ProductCard product={product}/>

    ))
    return (
        <ProductsWrapper>
            <ProductsBar/>
            {productsItems}
        </ProductsWrapper>
    );
};

export default ProductsGrid;

const ProductsWrapper = tw.section`bg-white py-8 container mx-auto flex items-center flex-wrap pt-4 pb-12`;
