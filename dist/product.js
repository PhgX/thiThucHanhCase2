"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, id, type, price, amount, discribe, date) {
        this._date = new Date().toString();
        this._name = name;
        this._id = id;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._discribe = discribe;
        this._date = date;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get amount() {
        return this._amount;
    }
    set amount(amount) {
        this._amount = amount;
    }
    get discribe() {
        return this._discribe;
    }
    set discribe(discribe) {
        this._discribe = discribe;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map