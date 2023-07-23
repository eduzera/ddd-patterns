import Address from "../entity/value-object/address";
import CustomerFactory from "./customer.factory";

describe("CustomerFactory", () => {
  
  it("should create a customer", () => {
    const customer = CustomerFactory.create("Eduardo");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Eduardo");
    expect(customer.Address).toBeUndefined();
  })

  it("should create a customer with address", () => {
    const address = new Address("Rua ABC", 123, "12345-678", "São Paulo");
    const customer = CustomerFactory.createWithAddress("Eduardo", address)

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Eduardo");
    expect(customer.Address).toBeDefined();
    expect(customer.Address.street).toBe("Rua ABC");
    expect(customer.Address.number).toBe(123);
    expect(customer.Address.zipcode).toBe("12345-678");
    expect(customer.Address.city).toBe("São Paulo");
  })
})