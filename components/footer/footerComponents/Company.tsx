import './footerComponents.css'

export default function Company() {
    return (
        <div className='footerComponent__container'>
            <h1 className='footerComponent__header' data-company>Company</h1>
            <ul className='footerComponent__ul'>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Contact Customer Service
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Terms of Service
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Privacy Policy
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Accessibility Statement
                    </a>
                </li>
            </ul>
        </div>
    )
}