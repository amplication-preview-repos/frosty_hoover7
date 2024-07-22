import { ProcessedMessageWhereInput } from "./ProcessedMessageWhereInput";
import { ProcessedMessageOrderByInput } from "./ProcessedMessageOrderByInput";

export type ProcessedMessageFindManyArgs = {
  where?: ProcessedMessageWhereInput;
  orderBy?: Array<ProcessedMessageOrderByInput>;
  skip?: number;
  take?: number;
};
