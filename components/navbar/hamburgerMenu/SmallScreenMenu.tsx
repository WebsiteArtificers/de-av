import './hamburgerMenu.css'
import { DownArrow } from "@/icons/icons"

export default function SmallScreenMenu() {
    return (
        <div className='smallScreenMenu__container'>
            <div className='smallScreenMenu__top--container'>
                <button className='smallScreenMenu__top--button button__secondary'>Log in</button>
                <button className='smallScreenMenu__top--button button__tertiary'>Get Started</button>
            </div>
            <a className='smallScreenMenu__subcontainer'>
                <button className='smallScreenMenu__button'>Contact Sales</button>
            </a>
            <div className='smallScreenMenu__subcontainer'>
                <button className='smallScreenMenu__button'>Resources</button>
                <DownArrow />
            </div>
            <div className='smallScreenMenu__subcontainer'>
                <button className='smallScreenMenu__button'>Solutions</button>
                <DownArrow />
            </div>
            <div className='smallScreenMenu__subcontainer'>
                <button className='smallScreenMenu__button'>Expertise</button>
                <DownArrow />
            </div>
        </div>
    )
}