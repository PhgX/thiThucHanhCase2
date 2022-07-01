
export class Product {
    private _name : string;
    private _id : number;
    private _type: string;
    private _price: number;
    private _amount: number;
    private _discribe: string;
    private _date: string = new Date().toString() ;
    constructor (name: string, id: number, type: string, price: number, amount: number, discribe: string, date: string){
        this._name = name;
        this._id = id;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._discribe = discribe;
        this._date = date;
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }

    get type(){
        return this._type;
    }
    set type(type: string){
        this._type = type;
    }

    get price(){
        return this._price;
    }
    set price(price: number){
        this._price = price;
    }

    get amount(){
        return this._amount;
    }
    set amount(amount: number){
        this._amount = amount;
    }

    get discribe(){
        return this._discribe;
    }
    set discribe(discribe : string){
        this._discribe = discribe;
    }

    get date(){
        return this._date;
    }
    set date(date : string){
        this._date = date;
    }
}