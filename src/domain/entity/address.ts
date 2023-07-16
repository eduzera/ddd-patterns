export default class Address {

  _street: string = "";
  _number: number = 0;
  _zipcode: string = "";
  _city: string = "";

  constructor(street: string, number: number, zipcode: string, city: string) {
    this._street = street;
    this._number = number;
    this._zipcode = zipcode;
    this._city = city;

    this.validate();
  }

  validate() {
    if(this._street.length === 0) {
      throw new Error('Street is required');
    }
    if(this._number < 0) {
      throw new Error('Number must be greater than 0');
    }
    if(this._zipcode.length === 0) {
      throw new Error('Zipcode is required');
    }
    if(this._city.length === 0) {
      throw new Error('City is required');
    }
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zipcode(): string {
    return this._zipcode;
  }

  get city(): string {
    return this._city;
  }

  toString() {
    return `${this._street} ${this._number}, ${this._zipcode}, ${this._city}`;
  }

}