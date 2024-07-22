import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type ProcessedMessageCreateInput = {
  processedAt?: Date | null;
  message?: MessageWhereUniqueInput | null;
};
