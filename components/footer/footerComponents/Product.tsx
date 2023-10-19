import './footerComponents.css'

export default function Product() {
    return (
        <div className='footerComponent__container'>
            <h1 className='footerComponent__header' data-product>Product</h1>
            <ul className='footerComponent__ul'>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Audio
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Visual
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        Services
                    </a>
                </li>
            </ul>
        </div>
    )
}