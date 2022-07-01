"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    getAll() {
        return ProductManager.products;
    }
    findProductByName(name) {
        let products = this.getAll();
        let index = -1;
        for (let product of products) {
            if (product.name == name) {
                index = products.indexOf(product);
            }
        }
        if (index == -1) {
            return undefined;
        }
        else if (index != -1) {
            return index;
        }
    }
    addNewProduct(t) {
        ProductManager.products.push(t);
    }
    updateProduct(name, t) {
        let index = this.findProductByName(name);
        if (index == undefined) {
            return false;
        }
        else {
            ProductManager.products[index] = t;
            return true;
        }
    }
    deleteProduct(name) {
        let index = this.findProductByName(name);
        if (index == undefined) {
            console.log(`Sản phẩm không tồn tại`);
        }
        else if (index != undefined) {
            ProductManager.products.splice(index, 1);
        }
    }
}
exports.ProductManager = ProductManager;
ProductManager.products = [];
//# sourceMappingURL=ProductManager.js.map