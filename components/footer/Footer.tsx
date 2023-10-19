import './footer.css'
import { Logo } from '@/icons/icons'
import Company from './footerComponents/Company'
import Resources from './footerComponents/Resources'
import Product from './footerComponents/Product'
import StayConnected from './footerComponents/StayConnected'
import Creator from './footerComponents/Creator'

export default function Footer() {
    return (
        <footer className='footer__container'>
            <div className='footer__subcontainer'>
                <div className='footer__container--logo'>
                    <Logo />
                </div>
            </div>
            <div className='footer__container--main'>
                <Company />
                <Resources />
                <Product />
                <StayConnected />
            </div>
            <div className='footer__container--creator'>
                <Creator />
            </div>
        </footer>
    )
}