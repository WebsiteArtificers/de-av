import './diagram.css'
import SvgContainer from './svgContainer/SvgContainer'

export default function Diagram(){
    return (
        <div className="diagram__container">
            <SvgContainer />
            <div className='diagram__subcontainer audio'>
                <a href='/audio'>
                    <button className='diagram__button audio__button'>Audio</button>
                </a>
                <p className='diagram__paragraph audio__paragraph'>
                    Unique and tailored audio setups to meet the specific needs of your business. Let us supercharge your audio capabilities.
                </p>
            </div>
            <div className='diagram__subcontainer visual'>
                <a href='/visual'>
                    <button className='diagram__button visual__button'>Visual</button>
                </a>
                <p className='diagram__paragraph visual__paragraph'>
                    From presentations to video walls, we take your visual aspirations to the next level. Let your visual aspirations become reality.
                </p>
            </div>
            <div className='diagram__subcontainer upgrade'>
                <a href='/upgrade'>
                    <button className='diagram__button upgrade__button'>Upgrade</button>
                </a>
                <p className='diagram__paragraph upgrade__paragraph'>
                    Like any good mechanic, we assist you with any future repairs and upgrades that your company requires. It&apos;s our job to keep you running.
                </p>
            </div>
        </div>
    )
}