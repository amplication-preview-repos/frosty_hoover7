import { ProcessedMessageCreateNestedManyWithoutMessagesInput } from "./ProcessedMessageCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  sentAt?: Date | null;
  content?: string | null;
  status?: "Option1" | null;
  processedMessages?: ProcessedMessageCreateNestedManyWithoutMessagesInput;
};
