export interface IProduct<T> {
    getAll(): T[];
    findProductByName(name: string): number | undefined;
    addNewProduct(t: T): void;
    updateProduct(name: string, t: T): boolean;
    deleteProduct(name: string): void;
}
