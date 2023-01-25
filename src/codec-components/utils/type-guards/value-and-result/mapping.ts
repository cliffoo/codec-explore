import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isMappingValue,
  isMappingErrorResult,
  isMappingResult,
  mappingGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.MappingValue,
  Format.Errors.MappingErrorResult,
  Format.Values.MappingResult
>(data => data.type.typeClass === "mapping");
