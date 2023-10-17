import './menus.css'

export default function Solutions() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Projects</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Christiana Care</h2>
                    <p className='menu__subcontainer--description'>Healthcare</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>University of Delaware</h2>
                    <p className='menu__subcontainer--description'>Education</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Amazon Fulfillment</h2>
                    <p className='menu__subcontainer--description'>Corporate</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Delaware Department of Transportation</h2>
                    <p className='menu__subcontainer--description'>Government</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>{`Morey's Pier, NJ`}</h2>
                    <p className='menu__subcontainer--description'>Entertainment</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>More projects</h2>
                    <p className='menu__subcontainer--description'>See our vast experience</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Use Cases</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Sound Masking</h2>
                    <p className='menu__subcontainer--description'>More privacy and security</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Presentation Technology</h2>
                    <p className='menu__subcontainer--description'>Supercharge your presentations</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Control Centers</h2>
                    <p className='menu__subcontainer--description'>Automate with technology</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>More uses</h2>
                    <p className='menu__subcontainer--description'>See more integrations and use cases</p>
                </a>
            </div>
        </div>
    )
}