import './displays.css'
import Image from 'next/image'

export default function Audio() {
    return (
        <div className='displays__container'>
        <h1 className='displays__header'>Fill any room with superior audio tech</h1>
        <div className='displays__subcontainer'>
            <div className='displays__subcontainer--left'>
                <p className='displays__left--paragraph'>
                    <a>Audio Technology:</a> Have you noticed that humans prioritize audio quality during a production over most other things? That&apos;s why companies like YouTube maintain audio quality in their videos over visual quality in areas of poor connection. That&apos;s why research shows it&apos;s harder to focus in loud areas. Audio quality is crucial.
                </p>
                <ul className='displays__left--ul'>
                    <li className='displays__left--li'>
                    ✓ Fully integratable sound systems for any room or space
                    </li>
                    <li className='displays__left--li'>
                    ✓ A variety of product offerings for a variety of purposes
                    </li>
                    <li className='displays__left--li'>
                    ✓ Improve focus and creative reach of your company
                    </li>
                </ul>
                <button className='displays__left--button button__primary'>Explore Audio Products</button>
            </div>
            <div className='displays__subcontainer--right'>
                <Image width={400} height={400} src='/images/microphone.jpg' alt='Microphone and audio technologies' className='displays__right--image' />
            </div>
        </div>
    </div>
    )
}