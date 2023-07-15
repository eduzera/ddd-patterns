export default class Address {

  _street: string = "";
  _number: string = "";
  _zipcode: string = "";
  _city: string = "";

  constructor(street: string, number: string, zipcode: string, city: string) {
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
    if(this._number.length === 0) {
      throw new Error('Number is required');
    }
    if(this._zipcode.length === 0) {
      throw new Error('Zipcode is required');
    }
    if(this._city.length === 0) {
      throw new Error('City is required');
    }
  }

  toString() {
    return `${this._street} ${this._number}, ${this._zipcode}, ${this._city}`;
  }

}