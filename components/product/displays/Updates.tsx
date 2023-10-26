import './displays.css'
import Image from 'next/image'

export default function Updates() {
    return (
        <div className='displays__container'>
        <h1 className='displays__header'>Continued support for your technologies</h1>
        <div className='displays__subcontainer'>
            <div className='displays__subcontainer--left'>
                <p className='displays__left--paragraph'>
                    <a>Updates and Maintenance:</a> Technology changes, and we adapt. We keep your audio and visual technologies updated and maintained so that your company can remain on the cutting-edge of technology.
                </p>
                <ul className='displays__left--ul'>
                    <li className='displays__left--li'>
                    ✓ Efficient and competitively-priced technology updates and maintenance
                    </li>
                    <li className='displays__left--li'>
                    ✓ We handle the technology, so you can focus on your business
                    </li>
                    <li className='displays__left--li'>
                    ✓ Eliminate technology bottlenecks quickly and smoothly
                    </li>
                </ul>
                <a>
                    <button className='displays__left--button button__primary'>Explore Updates and Maintenance</button>
                </a>
            </div>
            <div className='displays__subcontainer--right'>
                <Image width={400} height={400} src='/images/upgrade.jpg' alt='Technician installing updates' className='displays__right--image' />
            </div>
        </div>
    </div>
    )
}