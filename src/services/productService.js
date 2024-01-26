const API_URL = "http://localhost:3000/products"

const productService = {
    async getProducts() {
        let response = await fetch(API_URL);
        let products = await response.json();
        return products;
    },
    async getProduct(id) {
        let response = await fetch(`${API_URL}/${id}`);
        let product = await response.json();
        return product
    },
    async createProduct() {
        console.log("hola")
    },
    async updateProduct() {
        console.log("hola")
    },
    async deleteProduct() {
        console.log("hola")
    }
}

export default productService;
