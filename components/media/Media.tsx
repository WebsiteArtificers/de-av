import './media.css'
import MediaBlogCover from './MediaBlogCover'

export default function Media() {
    return (
        <div className="media__container">
            <h1 className='media__header'>Power</h1>
            <h2 className='media__subheader'>innovation</h2>
            <p className='media__paragraph media__paragraph--top'>Get ahead of the competition with our audio and visual solutions. Not sure where to start? Get our professional perspective.</p>
            <div className='media__subcontainer'>
                <a>
                    <button className='media__subcontainer--button button__primary'>Contact Sales</button>
                </a>
                <a>
                    <button className='media__subcontainer--button button__quaternary'>Explore Products</button>
                </a>
            </div>
            <p className='media__paragraph'>or see what makes us different</p>
            <MediaBlogCover />
            <button className='media__button button__secondary button__tertiary'>Explore all blogs</button>
        </div>
    )
}