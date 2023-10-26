"use client"
import { useState } from 'react'
import './product.css'
import { Audio, Visual, Updates } from './displays/displays'

export default function Product() {

    const [ activateLeft, setActivateLeft ] = useState(true)
    const [ activateRight, setActivateRight ] = useState(false)
    const [ activateCenter, setActivateCenter ] = useState(false)

    function handleActivateLeft() {
        setActivateLeft(true)

        setActivateCenter(false)
        setActivateRight(false)
    }

    function handleActivateCenter() {
        setActivateCenter(true)
        
        setActivateRight(false)
        setActivateLeft(false)
    }

    function handleActivateRight() {
        setActivateRight(true)

        setActivateLeft(false)
        setActivateCenter(false)
    }

    function renderComponents() {
        if (activateLeft) return <Audio />
        else if (activateRight) return <Updates />
        else if (activateCenter) return <Visual />
        else return <Audio />
    }

    return (
        <div className='product__container'>
            <div className='product__button--container'>
                <button onClick={handleActivateLeft} className={`product__button ${activateLeft === true ? 'active' : ''} left`}>Audio</button>
                <button onClick={handleActivateCenter} className={`product__button ${activateCenter === true ? 'active' : ''} center`}>Visual</button>
                <button onClick={handleActivateRight} className={`product__button ${activateRight === true ? 'active' : ''} right`}>Upgrade</button>
            </div>
            <div>
                {renderComponents()}
            </div>
        </div>
    )
}