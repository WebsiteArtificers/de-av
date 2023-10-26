import './displays.css'
import Image from 'next/image'

export default function Visual() {
    return (
        <div className='displays__container'>
            <h1 className='displays__header'>Your visual tech one-stop-shop</h1>
            <div className='displays__subcontainer'>
                <div className='displays__subcontainer--left'>
                    <p className='displays__left--paragraph'>
                        <a>Visual Technology:</a> Visual presentation is becoming ever-important in today&apos;s business world.
                        At Delaware Audio Visual, we&apos;ve done it all. From presentation rooms to video walls, you can count on us to satisfy your visual needs.
                    </p>
                    <ul className='displays__left--ul'>
                        <li className='displays__left--li'>
                        ✓ Professionally installed for any room and any space
                        </li>
                        <li className='displays__left--li'>
                        ✓ A variety of product offerings for a variety of purposes
                        </li>
                        <li className='displays__left--li'>
                        ✓ Visualize analytics and data to clearly define goals and objectives
                        </li>
                    </ul>
                    <button className='displays__left--button button__primary'>Explore Visual Products</button>
                </div>
                <div className='displays__subcontainer--right'>
                    <Image width={400} height={400} src='/images/projector.jpg' alt='Projector displaying on a screen' className='displays__right--image' />
                </div>
            </div>
        </div>
    )
}