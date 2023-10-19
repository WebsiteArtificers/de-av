import './footerComponents.css'
import { Facebook, Google, LinkedIn, Email } from '@/icons/icons'

export default function StayConnected() {
    return (
        <div className='footerComponent__container'>
            <h1 className='footerComponent__header' data-stayConnected>Stay Connected</h1>
            <ul className='footerComponent__ul'>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        <Facebook />Facebook
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        <LinkedIn />LinkedIn
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        <Google />Google
                    </a>
                </li>
                <li className='footerComponent__li'>
                    <a className='footerComponent__link'>
                        <Email />Newsletter
                    </a>
                </li>
            </ul>
        </div>
    )
}