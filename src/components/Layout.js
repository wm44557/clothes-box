import React, {useState} from 'react';
import {AppContext} from "../data/AppContext";
import {BESTSELLERS_CATEGORY} from "../data/categories";
import {Navbar} from "./Navbar";
import About from "./About";
import ShoppingCard from "./ShoppingCard";
import useBasket from "../hooks/useBasket";

const Layout = ({children}) => {
    const [category, setCategory] = useState(BESTSELLERS_CATEGORY);
    const [open, setOpen] = useState(false);
    const {basket, addToBasket, removeFromBasket, clearBasket, basketPrice} = useBasket([]);

    return (
        <AppContext.Provider
            value={{
                category,
                setCategory,
                open,
                setOpen,
                basket,
                removeFromBasket,
                addToBasket,
                clearBasket,
                basketPrice
            }}>

            <Navbar/>
            {children}
            <About/>
            <ShoppingCard open={open} setOpen={setOpen}/>

        </AppContext.Provider>
    );
};

export default Layout;
