import OrderItem from "./order_item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  validate() {
    if(this._id.length === 0) {
      throw new Error('Id is required');
    }
    if(this._customerId.length === 0) {
      throw new Error('CustomerId is required');
    }
    if(this._total === 0) {
      throw new Error('Item qtd must be greater than 0');
    }

    return true;
  }

  changeItems(items: OrderItem[]): void {
    this._items = items;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.total(), 0);
  }
}