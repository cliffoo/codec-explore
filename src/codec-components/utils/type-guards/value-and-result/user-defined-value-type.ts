import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isUserDefinedValueTypeValue,
  isUserDefinedValueTypeErrorResult,
  isUserDefinedValueTypeResult,
  userDefinedValueTypeGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.UserDefinedValueTypeValue,
  Format.Errors.UserDefinedValueTypeErrorResult,
  Format.Values.UserDefinedValueTypeResult
>(data => data.type.typeClass === "userDefinedValueType");
