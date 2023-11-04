import './quote.css'
import RightQuoteComponent from './RightQuoteComponent'
import LeftQuoteComponent from './LeftQuoteComponent'

export default function Quote() {
    return(
        <div className="quote__container">
            <LeftQuoteComponent />
            <RightQuoteComponent />
        </div>
    )
}