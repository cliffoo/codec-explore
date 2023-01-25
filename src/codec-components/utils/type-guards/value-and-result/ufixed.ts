import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isUfixedValue,
  isUfixedErrorResult,
  isUfixedResult,
  ufixedGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.UfixedValue,
  Format.Errors.UfixedErrorResult,
  Format.Values.UfixedResult
>(data => data.type.typeClass === "ufixed");
