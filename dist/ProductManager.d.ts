import { Product } from "./product";
import { IProduct } from './IProduct';
export declare class ProductManager implements IProduct<Product> {
    private static products;
    getAll(): Product[];
    findProductByName(name: string): number | undefined;
    addNewProduct(t: Product): void;
    updateProduct(name: string, t: Product): boolean;
    deleteProduct(name: string): void;
}
