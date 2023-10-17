import './menus.css'

export default function Resources() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Discover</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Blog</h2>
                    <p className='menu__subcontainer--description'>Regular industry insights</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Partners</h2>
                    <p className='menu__subcontainer--description'>Trusted and vetted partners</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Product Catalog</h2>
                    <p className='menu__subcontainer--description'>Industry-leading product solutions</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Information</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Support</h2>
                    <p className='menu__subcontainer--description'>Talk to a solutions expert</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Talk to Sales</h2>
                    <p className='menu__subcontainer--description'>No gimmicks. Always transparent</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>About Us</h2>
                    <p className='menu__subcontainer--description'>Founded on excellence and passion</p>
                </a>
            </div>
        </div>
    )
}