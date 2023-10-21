import './overview.css'
import Diagram from './diagram/Diagram'

export default function Overview() {
    return (
        <div className='overview__container'>
            <h2 className='overview__subheader'>Product overview</h2>
            <h1 className='overview__header'>Delaware Audio Visual</h1>
            <Diagram />
        </div>
    )
}