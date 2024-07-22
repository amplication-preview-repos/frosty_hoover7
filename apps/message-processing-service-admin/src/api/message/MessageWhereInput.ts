import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProcessedMessageListRelationFilter } from "../processedMessage/ProcessedMessageListRelationFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  status?: "Option1";
  processedMessages?: ProcessedMessageListRelationFilter;
};
