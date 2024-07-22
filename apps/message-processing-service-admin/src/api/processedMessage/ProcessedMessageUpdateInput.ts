import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type ProcessedMessageUpdateInput = {
  processedAt?: Date | null;
  message?: MessageWhereUniqueInput | null;
};
