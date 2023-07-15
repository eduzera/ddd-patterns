import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Edu Zaghi");
const address = new Address("Rua Visconde de Cairu", "134", "03110-040", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);
const order = new Order("1", customer.id, [item1, item2]);