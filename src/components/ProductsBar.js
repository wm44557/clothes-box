import React from 'react';
import {BiFilter} from "react-icons/bi";
import {HiOutlineSearch} from "react-icons/hi";
import tw from "tailwind-styled-components";

import {Menu} from "./Menu";

const ProductsBar = () => {
    return (
        <ProductsNavigation>
            <NavigationName href="#">
                Store
            </NavigationName>
            <div>
                <Menu/>
            </div>
            <NavigationIconsWrapper>
                <IconWrapper href="#">
                    <BiFilter/>
                </IconWrapper>
                <IconWrapper href="#">
                    <HiOutlineSearch/>
                </IconWrapper>
            </NavigationIconsWrapper>
        </ProductsNavigation>
    );
};
const ProductsNavigation = tw.nav`w-full z-30 top-0 px-6 py-1 w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3`;
const NavigationName = tw.a` tracking-wide no-underline hover:no-underline font-mediun text-gray-800 text-xl`;
const NavigationIconsWrapper = tw.div`flex items-center`;
const IconWrapper = tw.a`pl-3 inline-block no-underline hover:text-black fill-current hover:text-black text-2xl`;
export default ProductsBar;
