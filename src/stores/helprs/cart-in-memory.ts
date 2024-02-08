import { ProductProps } from "@/utils/data/products";
import { ProducCartProps } from "../cart-store";

export function add(products: ProducCartProps[], newProduct: ProductProps){
    const existingProduct = products.find (({id}) => newProduct === id)


    if(existingProduct){
        return products.map((product) => product.id === existingProduct.id?
        {...product, quantity: product.quantity + 1}: product)
    }



    return [...products, {... newProduct, quantity: 1}]
}


export function remove(products: ProducCartProps[], productRemovedId: string){
    const updatedProduct = products.map((product) => 
    product.id === productRemovedId? {
        ...product,
        quantity: product.quantity > 1 ? product.quantity - 1 : 0,
    } : product
    )

    return updatedProduct.filter((product) => product.quantity > 0)
}


