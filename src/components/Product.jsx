import { Link } from "react-router-dom"

const Product = ({ product }) => {
    
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`/homepage/productDetail/${product.id}`}>
                <button>More info</button>
            </Link>
        </div>
    )
}

export default Product
