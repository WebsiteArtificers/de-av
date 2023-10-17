import './regularMenu.css'
import { DownArrow } from "@/icons/icons"
import { Expertise, Solutions, Resources } from './menus/menus';

export default function Regular() {
    return (
        <>
            <div className='regular__link--container'>
                <button className='regular__link'>Expertise</button>
                <DownArrow />
                <Expertise />
            </div>
            <div className='regular__link--container'>
                <button className='regular__link'>Solutions</button>
                <DownArrow />
                <Solutions />
            </div>
            <div className='regular__link--container'>
                <button className='regular__link'>Resources</button>
                <DownArrow />
                <Resources />
            </div>
            <a className='regular__link--container' href='/contact-sales'>
                <button className='regular__link'>Contact Sales</button>
            </a>
            <div data-separate>
                <a className='regular__link--container'>
                    <button className='separate__link button__primary'>Log in</button>
                </a>
                <a className='regular__link--container'>
                    <button className='separate__link button__tertiary'>Get Started</button>
                </a>
            </div>
        </>
    )
}