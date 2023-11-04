import './reviews.css'
import Image from 'next/image'

export default function Reviews() {
    return (
        <div className='reviews__container'>
            <div className='reviews__width--container'>
                <h1 className='reviews__header'>Join our incredible community</h1>
                <h2 className='reviews__subheader'>Innovating <span>audio and visual capabilities</span></h2>
                <div className='reviews__subcontainer'>
                    <div className='reviews__subcontainer--left'>
                        <Image width={800} height={800} alt='Delaware Audio Visual Community' src='/images/community.jpg' className='reviews__container--left__image'/>
                    </div>
                    <div className='reviews__subcontainer--right'>
                        <p className='reviews__subcontainer--right__paragraph'>
                            Delaware Audio Visual does more than just provide the best audio and visual solutions for your business. We are a community supported by countless individuals and business owners alike.
                        </p>
                        <a className='reviews__subcontainer--right__link'>
                            <button className='reviews__subcontainer--right__button button__secondary'>Join our community</button>
                        </a>
                    </div>
                </div>
                <div className='reviews__subcontainer--reviews'>
                    <div className='reviews__review--container'>
                        <h3 className='reviews__review--header'>ChristianaCare</h3>
                        <p className='reviews__review--quote'>&quot;Very responsive to support needs. Willingness to work around conference room schedules.&quot;</p>
                        <p className='reviews__review--writer'>Terri Schleifer</p>
                    </div>
                    <div className='reviews__review--container'>
                        <h3 className='reviews__review--header'>Bloom Energy</h3>
                        <p className='reviews__review--quote'>&quot;Great job. Very pleased with the work that was done. Thank you!&quot;</p>
                        <p className='reviews__review--writer'>Zachery Dean</p>
                    </div>
                    <div className='reviews__review--container'>
                        <h3 className='reviews__review--header'>University of Delaware</h3>
                        <p className='reviews__review--quote'>&quot;Great company and employees. All of them exceed above and beyond from documentation to final product and aesthetics. They never disappoint!&quot;</p>
                        <p className='reviews__review--writer'>Matthew Holden</p>
                    </div>
                    <div className='reviews__review--container'>
                        <h3 className='reviews__review--header'>North Wildwood, NJ</h3>
                        <p className='reviews__review--quote'>&quot;We have worked with DelawareAV for many years and have found their work product and customer support to be of the highest caliber.&quot;</p>
                        <p className='reviews__review--writer'> Patrick Rosenello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}