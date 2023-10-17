import { useContext } from "react"
import { Context } from "../context/Context"
import Stars from "./Stars"

function ProductItem({ info }) {

    const { doubleDelete } = useContext(Context)

    return (
        <div className="productItem" onDoubleClick={() => doubleDelete(info.id)}>
            <img src={info.images[0]} alt=""></img>
            <h1>title: {info.title}</h1>
            <h3>price: {info.price}</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Stars rating={info.rating}/>
            </div>
        </div>
    )
}

export default ProductItem