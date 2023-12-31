import './regularMenu.css'
import { DownArrow } from "@/icons/icons"
import { Expertise, Solutions, Resources } from './menus/menus'
import { useState } from 'react'

export default function Regular() {

    const [showExpertise, setShowExpertise] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [showResources, setShowResources] = useState(false);

    return (
        <>
            <div
                className='regular__link--container'
                onMouseEnter={() => setShowExpertise(true)}
                onMouseLeave={() => setShowExpertise(false)}
                onClick={() => setShowExpertise(!showExpertise)}
            >
                <button className='regular__link'>Expertise</button>
                <DownArrow />
                { showExpertise && <Expertise /> }
            </div>
            <div
                className='regular__link--container'
                onMouseEnter={() => setShowSolution(true)}
                onMouseLeave={() => setShowSolution(false)}
                onClick={() => setShowSolution(!showSolution)}
            >
                <button className='regular__link'>Solutions</button>
                <DownArrow />
                { showSolution && <Solutions /> }
            </div>
            <div
                className='regular__link--container'
                onMouseEnter={() => setShowResources(true)}
                onMouseLeave={() => setShowResources(false)}
                onClick={() => setShowResources(!showResources)}
            >
                <button className='regular__link'>Resources</button>
                <DownArrow />
                { showResources && <Resources /> }
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