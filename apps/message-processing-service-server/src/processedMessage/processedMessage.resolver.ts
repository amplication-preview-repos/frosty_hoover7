import * as graphql from "@nestjs/graphql";
import { ProcessedMessageResolverBase } from "./base/processedMessage.resolver.base";
import { ProcessedMessage } from "./base/ProcessedMessage";
import { ProcessedMessageService } from "./processedMessage.service";

@graphql.Resolver(() => ProcessedMessage)
export class ProcessedMessageResolver extends ProcessedMessageResolverBase {
  constructor(protected readonly service: ProcessedMessageService) {
    super(service);
  }
}
