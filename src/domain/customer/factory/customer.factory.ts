import Address from "../entity/value-object/address";
import Customer from "../entity/customer";
import { v4 as uuid } from "uuid";

export default class CustomerFactory {
  public static create(name: string): Customer {
    return new Customer(uuid(), name);
  }

  public static createWithAddress(name: string, address: Address): Customer {
    const customer = CustomerFactory.create(name);
    customer.changeAddress(address);
    return customer;
  }
}