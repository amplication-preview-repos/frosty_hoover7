import { ProcessedMessage as TProcessedMessage } from "../api/processedMessage/ProcessedMessage";

export const PROCESSEDMESSAGE_TITLE_FIELD = "id";

export const ProcessedMessageTitle = (record: TProcessedMessage): string => {
  return record.id?.toString() || String(record.id);
};
