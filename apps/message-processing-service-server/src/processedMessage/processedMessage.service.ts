import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedMessageServiceBase } from "./base/processedMessage.service.base";

@Injectable()
export class ProcessedMessageService extends ProcessedMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
