// import { forwardRef } from "react"

// const Header = forwardRef((props, ref) => {

//     let { autoScroll } = props

//     return (
//         <div ref={ref} className="header">
//             <button onClick={autoScroll}>Auto scroll</button>
//         </div>
//     )
// })


// export default Header

function Header(props) {

    let { footerScroll } = props

    return (
        <div className="header">
            <button onClick={footerScroll}>Scroll to footer</button>
        </div>
    )
}

export default Header