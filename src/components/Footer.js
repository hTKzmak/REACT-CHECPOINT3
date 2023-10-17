import { forwardRef } from "react"

const Footer = forwardRef((props, ref) => {

    let { autoScroll } = props

    return (
        <div ref={ref} className="footer">
            <p>just footer</p>
        </div>
    )
})


export default Footer