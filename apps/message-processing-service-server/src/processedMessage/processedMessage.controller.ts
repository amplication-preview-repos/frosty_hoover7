import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedMessageService } from "./processedMessage.service";
import { ProcessedMessageControllerBase } from "./base/processedMessage.controller.base";

@swagger.ApiTags("processedMessages")
@common.Controller("processedMessages")
export class ProcessedMessageController extends ProcessedMessageControllerBase {
  constructor(protected readonly service: ProcessedMessageService) {
    super(service);
  }
}
