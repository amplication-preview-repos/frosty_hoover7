import { ProcessedMessageUpdateManyWithoutMessagesInput } from "./ProcessedMessageUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  sentAt?: Date | null;
  content?: string | null;
  status?: "Option1" | null;
  processedMessages?: ProcessedMessageUpdateManyWithoutMessagesInput;
};
