import { Product } from './../../../../utils/routes/api/products/index';
import { RootState } from './../../../index';

export const selectAllProducts = (store: RootState): Product[] => store.products.products