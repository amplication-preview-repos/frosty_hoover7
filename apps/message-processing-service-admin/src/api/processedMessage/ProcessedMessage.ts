import { Message } from "../message/Message";

export type ProcessedMessage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  processedAt: Date | null;
  message?: Message | null;
};
