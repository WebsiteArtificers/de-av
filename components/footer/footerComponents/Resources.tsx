import './footerComponents.css'

export default function Resources() {
    return (
        <div className='footerComponent__container'>
            <h1 className='footerComponent__header' data-resources>Resources</h1>
            <ul className='footerComponent__ul'>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Blog
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Partners
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Schedule a Meeting
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Talk to Sales
                    </a>
                </li>
            </ul>
        </div>
    )
}