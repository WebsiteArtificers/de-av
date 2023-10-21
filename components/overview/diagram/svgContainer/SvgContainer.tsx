import './svgContainer.css'
import { Audio, Visual, Maintenance } from '@/icons/icons'

export default function SvgContainer() {
    return (
        <div className="svg__container">
            <div className='svg__subcontainer'>
                <Audio />
            </div>
            <div className='svg__subcontainer'>
                <Visual />
            </div>
            <div className='svg__subcontainer'>
                <Maintenance />
            </div>
        </div>
    )
}