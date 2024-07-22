import { Module } from "@nestjs/common";
import { ProcessedMessageModuleBase } from "./base/processedMessage.module.base";
import { ProcessedMessageService } from "./processedMessage.service";
import { ProcessedMessageController } from "./processedMessage.controller";
import { ProcessedMessageResolver } from "./processedMessage.resolver";

@Module({
  imports: [ProcessedMessageModuleBase],
  controllers: [ProcessedMessageController],
  providers: [ProcessedMessageService, ProcessedMessageResolver],
  exports: [ProcessedMessageService],
})
export class ProcessedMessageModule {}
