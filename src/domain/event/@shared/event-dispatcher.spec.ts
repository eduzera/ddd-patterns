import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../product/product-created.event";
import EventDispatcher from "./event-dispatcher";

describe("EventDispatcher", () => {
  it('should register event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);

    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent']).toBeDefined();
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'].length).toBe(1);
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);
  })

  it('should unregister event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    eventDispatcher.unregister('ProductCreatedEvent', eventHandler);
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0]).toBeUndefined();
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'].length).toBe(0);
  })

  it('should unregister all event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register('ProductCreatedEvent', eventHandler);
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent']).toBeUndefined();
  })

  it('should notify', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, 'handle');

    eventDispatcher.register('ProductCreatedEvent', eventHandler);
    expect(eventDispatcher.getEventHandlers['ProductCreatedEvent'][0]).toMatchObject(eventHandler);

    const productCreatedevent = new ProductCreatedEvent(new Date(), {name: 'Product 1'});

    eventDispatcher.notify(productCreatedevent);

    expect(spyEventHandler).toHaveBeenCalled();
  })
})