export declare class Product {
    private _name;
    private _id;
    private _type;
    private _price;
    private _amount;
    private _discribe;
    private _date;
    constructor(name: string, id: number, type: string, price: number, amount: number, discribe: string, date: string);
    get name(): string;
    set name(name: string);
    get id(): number;
    set id(id: number);
    get type(): string;
    set type(type: string);
    get price(): number;
    set price(price: number);
    get amount(): number;
    set amount(amount: number);
    get discribe(): string;
    set discribe(discribe: string);
    get date(): string;
    set date(date: string);
}
