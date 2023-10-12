"use client"
import './navbar.css'
import { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import Hamburger from "./hamburgerMenu/HamburgerMenu";
import Regular from "./regularMenu/RegularMenu";

export default function Navbar() {

    const isScreenSmall = useMediaQuery('(max-width: 1200px)')
    const [isOpen, setIsOpen] = useState(false)

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar__sticky--container'>
            <div>
                
            </div>
            <div>
                {isScreenSmall ? <Hamburger isOpen={isOpen} onClick={handleHamburgerClick} /> : <Regular />}
            </div>
        </nav>
    )
}