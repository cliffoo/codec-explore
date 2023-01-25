import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isUintValue, isUintErrorResult, isUintResult, uintGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.UintValue,
    Format.Errors.UintErrorResult,
    Format.Values.UintResult
  >(data => data.type.typeClass === "uint");
