import EventInterface from "./event.inerface";

export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
  handle(event: T): void;  
}