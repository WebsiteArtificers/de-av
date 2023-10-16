import './regularMenu.css'

export default function Regular() {
    return (
        <>
            <div className='regular__link--container'>
                <button className='regular__link'>Expertise</button>
            </div>
            <div className='regular__link--container'>
                <button className='regular__link'>Solutions</button>
            </div>
            <div className='regular__link--container'>
                <button className='regular__link'>Resources</button>
            </div>
            <a className='regular__link--container' href='/contact-sales'>
                <button className='regular__link'>Contact Sales</button>
            </a>
        </>
    )
}