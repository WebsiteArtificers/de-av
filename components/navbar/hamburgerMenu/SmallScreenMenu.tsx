import './hamburgerMenu.css'
import { DownArrow } from "@/icons/icons"
import { Resources, Expertise, Solutions } from './menus/menus';
import { useState } from 'react'

export default function SmallScreenMenu() {

    const [showExpertise, setShowExpertise] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [isRotatedExpertise, setIsRotatedExpertise] = useState(false);
    const [isRotatedSolution, setIsRotatedSolution] = useState(false);
    const [isRotatedResources, setIsRotatedResources] = useState(false);

    return (
        <div className='smallScreenMenu__container'>
            <div className='smallScreenMenu__top--container'>
                <button className='smallScreenMenu__top--button button__secondary'>Log in</button>
                <button className='smallScreenMenu__top--button button__tertiary'>Get Started</button>
            </div>
            <a className='smallScreenMenu__subcontainer'>
                <button className='smallScreenMenu__button'>Contact Sales</button>
            </a>
            <div onClick={() => {
                setShowResources(!showResources)
                setShowSolution(false)
                setShowExpertise(false)
                setIsRotatedResources(!isRotatedResources);
                setIsRotatedExpertise(false);
                setIsRotatedSolution(false);
            }} className='smallScreenMenu__outer--container'>
                <div className={`smallScreenMenu__subcontainer ${isRotatedResources ? 'active__background' : ''}`}>
                    <button className='smallScreenMenu__button'>Resources</button>
                    <div className={isRotatedResources ? 'rotate' : ''}>
                        <DownArrow />
                    </div>
                </div>
                { showResources && <Resources /> }
            </div>
            <div onClick={() => {
                setShowSolution(!showSolution)
                setShowResources(false)
                setShowExpertise(false)
                setIsRotatedSolution(!isRotatedSolution);
                setIsRotatedResources(false);
                setIsRotatedExpertise(false);
            }} className='smallScreenMenu__outer--container'>
                <div className={`smallScreenMenu__subcontainer ${isRotatedSolution ? 'active__background' : ''}`}>
                    <button className='smallScreenMenu__button'>Solutions</button>
                    <div className={isRotatedSolution ? 'rotate' : ''}>
                        <DownArrow />
                    </div>
                </div>
                { showSolution && <Solutions /> }
            </div>
            <div onClick={() => {
                setShowExpertise(!showExpertise)
                setShowResources(false)
                setShowSolution(false)
                setIsRotatedExpertise(!isRotatedExpertise);
                setIsRotatedResources(false);
                setIsRotatedSolution(false);
            }} className='smallScreenMenu__outer--container'>
                <div className={`smallScreenMenu__subcontainer ${isRotatedExpertise ? 'active__background' : ''}`}>
                    <button className='smallScreenMenu__button'>Expertise</button>
                    <div className={isRotatedExpertise ? 'rotate' : ''}>
                        <DownArrow />
                    </div>
                </div>
                {showExpertise && <Expertise /> }
            </div>
        </div>
    )
}