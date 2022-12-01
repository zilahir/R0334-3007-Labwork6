import { random } from "lodash"
import { v4 as uuidv4 } from 'uuid';

import breadImage from "../../../../assets/images/products/bread.png";
import cakeImage from "../../../../assets/images/products/cake.png";
import cupCakeImage from "../../../../assets/images/products/cupcake.png";
import donutImage from "../../../../assets/images/products/donut.png";
import kifliImage from "../../../../assets/images/products/kifli.png";
import pieImage from "../../../../assets/images/products/pie.png";
import rollImage from "../../../../assets/images/products/roll.png";
import toastBread from "../../../../assets/images/products/toastbread.png";

const productImages = [breadImage, cakeImage, cupCakeImage, donutImage, kifliImage, pieImage, rollImage, toastBread]

interface Product {
    name: string;
    price: string;
    id: string;
    image: string;
}

interface ProductApi {
    products: ReadonlyArray<Omit<Product, "id" | "price" | "image">>,
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

export const productsApi: ProductApi = {
    products: [...products],
    getAllProducts: (): Product[] => [...products].map(({ name }): Product => ({
        id: uuidv4(),
        price: random(2.1, 7.1, true).toFixed(2),
        name,
        image: productImages[random(0, productImages.length - 1)]
    }))
}
