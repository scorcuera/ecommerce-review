import Product from "../components/Product";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

  let products = useLoaderData();

  return (
    <div>
      This is the Dashboard
      <p>Here are my products</p>
      <div>
        {products.map(product => 
          ( 
            <Product key={product.id} product={product} />
          )
        )}
      </div>
    </div>
  )
}

export default Dashboard
