import { SortOrder } from "../../util/SortOrder";

export type ProcessedMessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  processedAt?: SortOrder;
  messageId?: SortOrder;
};
