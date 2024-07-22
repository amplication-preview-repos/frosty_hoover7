import { ProcessedMessage } from "../processedMessage/ProcessedMessage";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date | null;
  content: string | null;
  status?: "Option1" | null;
  processedMessages?: Array<ProcessedMessage>;
};
