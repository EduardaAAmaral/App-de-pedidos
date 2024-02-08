import { create } from "zustand";
import { ProductProps } from "@/utils/data/products";
import * as cartInMemory from "./helprs/cart-in-memory"

export type ProducCartProps = ProductProps & {
    quantity:number
}

type StateProps = {
    products:ProducCartProps[]
    add: (product: ProductProps) => void
    remove: (productId: string) => void
}


export const useCartStore = create<StateProps>((set) =>({
    products: [],

    add: (product: ProductProps) => 
        set((state)=>({
            products: cartInMemory.add(state.products, product)
        })),

    remove: (productId: string) =>
        set((state) => ({
            product: cartInMemory.remove(state.products, productId),
        }))
}))