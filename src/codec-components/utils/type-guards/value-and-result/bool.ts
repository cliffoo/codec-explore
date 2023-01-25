import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isBoolValue, isBoolErrorResult, isBoolResult, boolGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.BoolValue,
    Format.Errors.BoolErrorResult,
    Format.Values.BoolResult
  >(data => data.type.typeClass === "bool");
