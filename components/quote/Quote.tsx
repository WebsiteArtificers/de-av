import './quote.css'
import Image from 'next/image'

export default function Quote() {
    return(
        <div className="quote__container">
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
            <div className='quote__subcontainer--right'>
                <form className='quote__form'>
                    <div className='quote__form--container'>
                        <div className='quote__input--container'>
                            <label className='quote__form--label' htmlFor='fullname'>Full Name</label>
                            <input required className='quote__form--input' id='fullname' placeholder='First and last name'/>
                        </div>
                        <div className='quote__input--container'>
                            <label className='quote__form--label' htmlFor='email'>Work Email</label>
                            <input required className='quote__form--input' id='email' placeholder='example@company.com'/>
                        </div>
                    </div>
                    <div className='quote__form--container'>
                        <div className='quote__input--container'>
                            <label className='quote__form--label' htmlFor='company'>Company</label>
                            <input required className='quote__form--input' id='company' placeholder='Company name' />
                        </div>
                        <div className='quote__input--container'>
                            <label className='quote__form--label' htmlFor='size'>Company Size</label>
                            <select required className='quote__form--input' id='size' placeholder='Company size'>
                                <option disabled>Number of employees</option>
                                <option value='1-100'>1-100</option>
                                <option value='100-500'>100-500</option>
                                <option value='500-5000'>500-5000</option>
                                <option value='5000+'>5000+</option>
                            </select>
                        </div>
                    </div>
                    <div className='quote__form--container'>
                        <div className='quote__input--container container__textarea'>
                            <label className='quote__form--label' htmlFor='message'>Message <span>(Optional)</span></label>
                            <textarea className='quote__form--textarea' id='message' placeholder='Tell us about your projects, timelines, needs, etc' />
                        </div>
                    </div>
                    <div className='quote__form--container'>
                        <div className='quote__input--container'>
                            <label className='quote__form--label' htmlFor='connection'>Where did you find us? <span>(Optional)</span></label>
                            <input className='quote__form--input' id='connection' placeholder='How did you hear about DAV?' />
                        </div>
                        <div className='quote__input--container'>
                            <button className='quote__form--button button__secondary'>Contact Sales</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}