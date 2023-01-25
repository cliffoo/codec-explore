import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isTypeValue, isTypeErrorResult, isTypeResult, typeGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.TypeValue,
    Format.Errors.TypeErrorResult,
    Format.Values.TypeResult
  >(data => data.type.typeClass === "type");
