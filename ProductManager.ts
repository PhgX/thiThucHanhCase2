import { Product } from "./product";
import { IProduct } from './IProduct';

export class ProductManager implements IProduct <Product> {
    private static products : Product[] = [];

    getAll(): Product[] {
        return ProductManager.products;
    }
    findProductByName(name: string): number | undefined {
        let products = this.getAll();
        let index = -1;
        for(let product of products){
            if(product.name == name){
                index = products.indexOf(product);               
            }
        }        
        if(index == -1){
            return undefined
        } else if(index != -1){
            return index;
        }
        
    }
    addNewProduct(t: Product): void {
       ProductManager.products.push(t)
    }
    updateProduct(name: string, t: Product): boolean {
        let index = this.findProductByName(name);
        if(index == undefined){            
            return false;
        } else {
            ProductManager.products[index] = t;
            return true;
        }
    }
    deleteProduct(name: string): void {
        let index  = this.findProductByName(name);
        if(index == undefined){
            console.log(`Sản phẩm không tồn tại`)
        } else if(index != undefined) {
            ProductManager.products.splice(index, 1);
        }
    }

}