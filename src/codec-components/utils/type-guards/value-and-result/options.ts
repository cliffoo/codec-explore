import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isOptionsValue,
  isOptionsErrorResult,
  isOptionsResult,
  optionsGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.OptionsValue,
  Format.Errors.OptionsErrorResult,
  Format.Values.OptionsResult
>(data => data.type.typeClass === "options");
