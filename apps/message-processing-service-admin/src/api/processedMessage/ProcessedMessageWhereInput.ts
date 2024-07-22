import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type ProcessedMessageWhereInput = {
  id?: StringFilter;
  processedAt?: DateTimeNullableFilter;
  message?: MessageWhereUniqueInput;
};
