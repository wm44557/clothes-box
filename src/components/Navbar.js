import * as React from "react"
import tw from 'tailwind-styled-components'
import {HiMenu, HiOutlineShoppingBag, HiOutlineCubeTransparent} from 'react-icons/hi'
import {useContext, useState} from "react";
import {AppContext} from "../data/AppContext";
import {Link} from "gatsby"

export const Navbar = () => {
    const {open, setOpen} = useContext(AppContext);
    return (
        <>
            <NavbarWrapper>
                <MenuHiddenLink
                    to="/"
                    id="menu-toggle"
                >
                    <HiMenu/>
                </MenuHiddenLink>
                <Menu id="menu">
                    <MenuItem href="#">Menu</MenuItem>
                </Menu>
                <Header to="/">Clothes <HiOutlineCubeTransparent className={' text-5xl p-1.5'}/> Box</Header>
                <IconWrapper onClick={() => setOpen(!open)}>
                    <IconLink><HiOutlineShoppingBag/></IconLink>
                </IconWrapper>
            </NavbarWrapper>
        </>
    )
}

const NavbarWrapper = tw.div`
  w-full z-30 top-0 py-1 container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3
`
const Menu = tw.nav`
    hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1
    md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0
`
const MenuItem = tw.a`
    inline-block no-underline hover:text-black hover:underline py-1 px-3
`
const Header = tw(Link)`
    order-1 md:order-2
    flex items-center tracking-wide no-underline hover:no-underline font-medium text-gray-800 text-xl
`
const IconWrapper = tw.div`
    order-2 md:order-3 flex items-center 
`
const IconLink = tw.a`
    inline-block no-underline hover:text-black text-2xl cursor-pointer  p-3
`
const MenuHiddenLink = tw(Link)`
    cursor-pointer md:hidden block  text-2xl
`

