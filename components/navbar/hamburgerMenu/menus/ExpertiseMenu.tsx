import './menus.css'

export default function Expertise() {
    return (
        <div className='hamburgerMenu__container'>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Products</h1>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Audio</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Turn up the volume!</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Visual</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Surveillance from anywhere</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>More</h2>
                    <p className='hamburgerMenu__subcontainer--description'>See countless audio and visual solutions</p>
                </a>
            </div>
            <div className='hamburgerMenu__subcontainer'>
                <h1 className='hamburgerMenu__subcontainer--header'>Services</h1>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Design</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Develop innovative solutions</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Engineer</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Integrate cutting-edge technology</p>
                </a>
                <a className='hamburgerMenu__subcontainer--link'>
                    <h2 className='hamburgerMenu__subcontainer--subheader'>Supercharge</h2>
                    <p className='hamburgerMenu__subcontainer--description'>Continued support and advancements</p>
                </a>
            </div>
        </div>
    )
}