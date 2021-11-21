import React, {useContext} from 'react';
import tw from 'tailwind-styled-components';
import {HiOutlinePlusCircle} from 'react-icons/hi'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {AppContext} from "../data/AppContext";
import {Link} from "gatsby"

const ProductCard = ({product}) => {
    const {setOpen} = useContext(AppContext) || {};
    const {addToBasket} = useContext(AppContext) || {};

    const image = getImage(product.image)
    return (
        <CardWrapper to={`product/${product.name}`}>
            <Image image={image}/>
            <InfoWrapper>
                <ProductName>{product.nameItem}</ProductName>
                <IconWrapper>
                    <HiOutlinePlusCircle onClick={(e) => {
                        e.preventDefault();
                        addToBasket(product);
                        setOpen(true);
                    }}/>
                </IconWrapper>
            </InfoWrapper>
            <ProductDescription> ${product.price}</ProductDescription>
        </CardWrapper>
    );
};

const CardWrapper = tw(Link)`w-full md:w-1/3 xl:w-1/4 p-8 flex flex-col`;
const Image = tw(GatsbyImage)`hover:shadow-lg hover:grow`;
const IconWrapper = tw.div`h-6 w-6 fill-current text-gray-500 hover:text-black text-2xl`;
const InfoWrapper = tw.div`pt-3 flex items-center justify-between`;
const ProductName = tw.p``;
const ProductDescription = tw.p`pt-1 text-gray-900`;


export default ProductCard;

