import './hero.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className='hero__container'>
            <div className='hero__subcontainer hero__left'>
                <h2 className='hero__subheader'>Supercharge</h2>
                <h1 className='hero__header'>
                    audio and visual performance
                </h1>
                <p className='hero__paragraph'>We provide <span>cutting-edge</span> and <span>scalable</span> technologies for all things audio and visual. Let <span>Delaware Audio Visual</span> be your audio and visual solution.</p>
                <div className='hero__button--container'>
                    <button className='hero__button button__quinary left__button'>Contact Sales</button>
                    <button className='hero__button button__quaternary right__button'>Our Expertise</button>
                </div>
            </div>
            <div className='hero__subcontainer hero__right'>
                <Image className='hero__image' width={3200} height={2800} alt='Image of audio and visual services' src='/images/hero.png'/>
            </div>
        </div>
    )
}