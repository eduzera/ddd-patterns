import EventHandlerInterface from "../../@shared/event-handler.interface";
import EventInterface from "../../@shared/event.inerface";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface {
  handle(event: EventInterface): void {
    console.log(`---> Sending email to ......`);
  }
}