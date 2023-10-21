import './more.css'

export default function More() {
    return (
        <div className="more__container">
            <h1 className='more__header'>Audio, visual, <span>and so much more</span></h1>
            <p className='more__paragraph'>Delaware Audio Visual installs all of your audio and visual technology. Beyond that, Delaware Audio Visual manages and updates your systems so your company can <span>boast the best audio and visual technologies to date.</span> From a large auditorium to a small office, we have you covered. <span>Are you ready for what&apos;s next?</span></p>
            <div className='more__subcontainer'>
                <a>
                    <button className='more__button button__secondary'>Products</button>
                </a>
                <a>
                    <button className='more__button button__primary'>Services</button>
                </a>
            </div>
        </div>
    )
}