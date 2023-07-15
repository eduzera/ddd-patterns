import Address from "./address";
import Customer from "./customer";

describe('Customer', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      let customer = new Customer('', 'Edu Zaghi');
    }).toThrow("Id is required");
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      let customer = new Customer('123', '');
    }).toThrow("Name is required");
  })

  it('should change name', () => {
    let customer = new Customer('123', 'Edu Zaghi');
    
    customer.changeName('Edu Oliveira');
    
    expect(customer.name).toBe('Edu Oliveira');
  })

  it('should activate', () => {
    const customer = new Customer('123', 'Edu Zaghi');
    const address = new Address('Rua Visconde de Cairu', '134', '03110-040', 'São Paulo');
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  })

  it('should deactivate', () => {
    const customer = new Customer('123', 'Edu Zaghi');

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  })

  it('should throw error when address is undefined', () => {
    expect(() => {
      const customer = new Customer('123', 'Edu Zaghi');
      customer.activate()
    }).toThrow('Address is required');
  })
})