import { useContext } from "react"
import ProductItem from "./ProductItem"
import { Context } from "../context/Context"

function ProductList() {

    const { products } = useContext(Context)

    return (
        <div className="productList">
            {products.map(elem => 
                <ProductItem 
                    key={elem.id}
                    info={elem}
                />    
            )}
        </div>
    )
}

export default ProductList