import './menus.css'

export default function Resources() {
    return (
        <div className='hamburgerMenu__container'>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Discover</h1>
                <a className='hamburgerMenu__subcontainer--link' href='/blog'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Blog</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Regular industry insights</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Partners</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Trusted and vetted partners</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Product Catalog</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Industry-leading product solutions</p>
                </a>
            </div>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Information</h1>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Support</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Talk to a solutions expert</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Talk to Sales</h2>
                    <p className='hamburgerMenu__subcontainer--description'>No gimmicks. Always transparent</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>About Us</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Founded on excellence and passion</p>
                </a>
            </div>
        </div>
    )
}