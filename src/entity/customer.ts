import Address from './address';

export default class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if(this._name.length === 0) {
      throw new Error('Name is required');
    }
    if(this._id.length === 0) {
      throw new Error('Id is required');
    }
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): Address {
    return this._address;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  set address(address: Address) {
    this._address = address;
  }

  activate() {
    if(this.address === undefined) {
      throw new Error('Address is required');
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}