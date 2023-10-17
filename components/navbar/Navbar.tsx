"use client"
import './navbar.css'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import Hamburger from "./hamburgerMenu/HamburgerMenu";
import Regular from "./regularMenu/RegularMenu";
import SmallScreenMenu from './hamburgerMenu/SmallScreenMenu';
import { Logo } from "@/icons/icons"

export default function Navbar() {

    const isScreenSmall = useMediaQuery('(max-width: 1100px)')
    const [isOpen, setIsOpen] = useState(false)

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    }
    
    useEffect(() => { !isScreenSmall && setIsOpen(false) }, [isScreenSmall])

    return (
        <>
            <nav className='navbar__container'>
                <div className='navbar__logo--container'>
                    <Logo />
                </div>
                <div className='navbar__links--container'>
                    {isScreenSmall ? <Hamburger isOpen={isOpen} onClick={handleHamburgerClick} /> : <Regular />}
                </div>
            </nav>
            {isOpen &&  <SmallScreenMenu /> }
        </>
    )
}