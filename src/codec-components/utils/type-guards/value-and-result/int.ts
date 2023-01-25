import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isIntValue, isIntErrorResult, isIntResult, intGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.IntValue,
    Format.Errors.IntErrorResult,
    Format.Values.IntResult
  >(data => data.type.typeClass === "int");
