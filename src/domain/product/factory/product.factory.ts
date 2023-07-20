import Product from "../entity/product";
import ProductDouble from "../entity/product-double";
import ProductInterface from "../entity/product.interface";
import {v4 as uuid} from "uuid";

export default class ProductFactory {
  public static create(type: string, name: string, price: number): ProductInterface {
    switch (type) {
      case "product":
        return new Product(uuid(), name, price);
      case "product double":
        return new ProductDouble(uuid(), name, price);
    }
  }
}