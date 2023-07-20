import ProductFactory from "./product.factory"

describe('Product Factory', () => {
  it('should be able to create a product', () => {
    const product = ProductFactory.create('product', 'Product A', 1)
    expect(product.id).toBeDefined()
    expect(product.name).toBe('Product A')
    expect(product.price).toBe(1)
    expect(product.constructor.name).toBe('Product')
  })

  it('should be able to create a product double', () => {
    const product = ProductFactory.create('product double', 'Product Double', 2)
    expect(product.id).toBeDefined()
    expect(product.name).toBe('Product Double')
    expect(product.price).toBe(4)
    expect(product.constructor.name).toBe('ProductDouble')
  })
})