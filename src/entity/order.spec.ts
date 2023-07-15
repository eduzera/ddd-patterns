import Order from "./order";
import OrderItem from "./order_item";

describe("Order", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const order = new Order("", "123", []);
    }).toThrow("Id is required");
  })

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order("123", "", []);
    }).toThrow("CustomerId is required");
  })

  it("should throw error when has no items", () => {
    expect(() => {
      const order = new Order("123", "123", []);
    }).toThrow("Item qtd must be greater than 0");
  })

  it("should calculate total", () => {
    const item1 = new OrderItem("1", "Item 1", 10);
    const item2 = new OrderItem("2", "Item 2", 20);
    const order = new Order("123", "123", [item1, item2]);

    expect(order.total()).toBe(30);
  })
})