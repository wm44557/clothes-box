import React, {useContext} from 'react';
import {AppContext} from "../data/AppContext";
import tw from "tailwind-styled-components";
import {
    SHOES_CATEGORY,
    CAPS_CATEGORY,
    TSHIRTS_CATEGORY,
    TROUSERS_CATEGORY,
    BESTSELLERS_CATEGORY
} from "../data/categories";


export const Menu = () => {
    const {category} = useContext(AppContext) || {};
    const {setCategory} = useContext(AppContext) || {};
    return (
        <MenuWrapper>
            <MenuItem
                currentCategory={category}
                name={BESTSELLERS_CATEGORY}
                onClick={(e) => setCategory(e.target.getAttribute('name'))}
            >
                {BESTSELLERS_CATEGORY}
            </MenuItem>
            <MenuItem
                currentCategory={category}
                name={SHOES_CATEGORY}
                onClick={(e) => setCategory(e.target.getAttribute('name'))}
            >
                {SHOES_CATEGORY}
            </MenuItem>
            <MenuItem currentCategory={category}
                      name={CAPS_CATEGORY}
                      onClick={(e) => setCategory(e.target.getAttribute('name'))}
            >{
                CAPS_CATEGORY}
            </MenuItem>
            <MenuItem currentCategory={category}
                      name={TROUSERS_CATEGORY}
                      onClick={(e) => setCategory(e.target.getAttribute('name'))}
            >
                {TROUSERS_CATEGORY}
            </MenuItem>
            <MenuItem
                currentCategory={category}
                name={TSHIRTS_CATEGORY}
                onClick={(e) => setCategory(e.target.getAttribute('name'))}
            >
                {TSHIRTS_CATEGORY}</MenuItem>
        </MenuWrapper>
    );
};
const MenuWrapper = tw.nav`flex z-0`;
const MenuItem = tw.div`
${(p) => (p.name === p.currentCategory ? "text-gray-400" : "text-gray-800 ")}
mr-6 text-black-500  font-medium text-m hover:text-gray-400 cursor-pointer`;
