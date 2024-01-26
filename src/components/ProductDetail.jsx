import { useLoaderData } from "react-router-dom"

const ProductDetail = () => {

    let product = useLoaderData();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail
