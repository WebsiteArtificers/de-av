import './menus.css'

export default function Expertise() {
    return (
        <div className='menu__container'>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Products</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Audio</h2>
                    <p className='menu__subcontainer--description'>Turn up the volume!</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Visual</h2>
                    <p className='menu__subcontainer--description'>Surveillance from anywhere</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>More</h2>
                    <p className='menu__subcontainer--description'>See countless audio and visual solutions</p>
                </a>
            </div>
            <div className='menu__subcontainer'>
                <h1 className='menu__subcontainer--header'>Services</h1>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Design</h2>
                    <p className='menu__subcontainer--description'>Develop innovative solutions</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Engineer</h2>
                    <p className='menu__subcontainer--description'>Integrate cutting-edge technology</p>
                </a>
                <a className='menu__subcontainer--link'>
                    <h2 className='menu__subcontainer--subheader'>Supercharge</h2>
                    <p className='menu__subcontainer--description'>Continued support and advancements</p>
                </a>
            </div>
        </div>
    )
}