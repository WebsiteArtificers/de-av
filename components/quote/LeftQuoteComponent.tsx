import './quote.css'
import Image from 'next/image'

export default function LeftQuoteComponent() {
    return (
        <div className='quote__subcontainer--left'>
            <h1 className='quote__header'>Contact <span>Sales</span></h1>
            <p className='quote__paragraph'>See how Delaware Audio Visual can help your company. We will be in contact with you shortly.</p>
            <ul className='quote__ul'>
                <li className='quote__li'>
                    <span>✓</span> See how Delaware Audio Visual improves the efficiency of your technology
                </li>
                <li className='quote__li'>
                    <span>✓</span> Future-proof your company with the latest technology
                </li>
                <li className='quote__li'>
                    <span>✓</span> Learn about technology features, pricing, security & compliance, and our dedicated support
                </li>
            </ul>
            <h3 className='quote__subheader'>Trusted by top companies on the East Coast</h3>
            <div className='quote__image--container'>
                <div className='quote__image--subcontainer'>
                    <Image className='quote__image' alt='Bloomberg Energy Logo' width={400} height={400} src='/images/bloomenergy.png'/>
                    <Image className='quote__image' alt='Christiana Care Logo' width={400} height={400} src='/images/christianacare.png'/>
                    <Image className='quote__image' alt='Delaware State College Logo' width={400} height={400} src='/images/delawarestate.png'/>
                    <Image className='quote__image' alt='Dogfish Head Logo' width={400} height={400} src='/images/dogfishhead.png'/>
                </div>
                <div className='quote__image--subcontainer'>
                    <Image className='quote__image' alt='M&T Bank Logo' width={400} height={400} src='/images/mtbank.png'/>
                    <Image className='quote__image' alt='Penske Logo' width={400} height={400} src='/images/penske.png'/>
                    <Image className='quote__image' alt='Seal of Delaware Logo' width={400} height={400} src='/images/sealofdelaware.png'/>
                    <Image className='quote__image' alt='University of Delaware Logo' width={400} height={400} src='/images/universityofdelaware.png'/>
                </div>
            </div>
        </div>
    )
}