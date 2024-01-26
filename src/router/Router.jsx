import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Contact from "../pages/Contact"
import Root from "./Root"
import ProductDetail from "../components/ProductDetail"
import productService from "../services/productService"

const getProducts = async () => {
    let products = await productService.getProducts();
    return products;
}

const getProduct = async({params}) => {
    let id = params.id;
    let product = await productService.getProduct(id);
    return product;
}

export const router = createBrowserRouter([
    {
        path: "/homepage",
        element: <Root />,
        children: [
            {
                path: "/homepage/dashboard",
                element: <Dashboard />,
                loader: getProducts
            },
            {
                path: "/homepage/contact",
                element: <Contact />,
                loader: getProducts
            },
            {
                path:"/homepage/productDetail/:id",
                element: <ProductDetail />,
                loader: getProduct
            }
        ]
    },


])
