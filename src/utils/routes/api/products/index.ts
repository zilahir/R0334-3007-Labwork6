import { random } from "lodash"
import { v4 as uuidv4 } from 'uuid';

interface Product {
    name: string;
    price: number;
    id: string;
}

interface ProductApi {
    products: ReadonlyArray<Omit<Product, "id" | "price">>,
    getAllProducts: () => Product[]
}

const products = [
    {
        name: "White dinner rolls"
    },
    {
        name: "Vienna loaf"
    },
    {
        name: "Cob loaf"
    },
    {
        name: "Bread rolls"
    },
    {
        name: "Hot dog buns"
    },
    {
        name: "Sourdough and Artisan loaves"
    },
    {
        name: "Breadsticks"
    },
    {
        name: "Croissants"
    }
]

export const bekaryProducts: ProductApi = {
    products: [...products],
    getAllProducts: (): Product[] => [...products].map(({ name }): Product => ({
        id: uuidv4(),
        price: random(2.1, 7.1, true),
        name,
    }))
}
