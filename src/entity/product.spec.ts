import Product from "./product";

describe("Product", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "123", 1000);
    }).toThrow("Id is required");
  })

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("123", "", 1000);
    }).toThrow("Name is required");
  })

  it("should throw error when price is less than 0", () => {
    expect(() => {
      const product = new Product("123", "123", -1);
    }).toThrow("Price must be greater than 0");
  })

  it("should change name", () => {
    const product = new Product("123", "123", 1000);
    product.changeName("iPhone 3G");
    expect(product.name).toBe("iPhone 3G");
  })

  it("should change price", () => {
    const product = new Product("123", "123", 1000);
    product.changePrice(2000);
    expect(product.price).toBe(2000);
  })
})