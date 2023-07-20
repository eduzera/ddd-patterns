import Product from "./product";

export default class ProductDouble extends Product { 
  get price(): number {
    return this._price * 2;
  }
}