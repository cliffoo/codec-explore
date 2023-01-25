import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isArrayValue, isArrayErrorResult, isArrayResult, arrayGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.ArrayValue,
    Format.Errors.ArrayErrorResult,
    Format.Values.ArrayResult
  >(data => data.type.typeClass === "array");
