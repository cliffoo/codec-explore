import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isBytesValue, isBytesErrorResult, isBytesResult, bytesGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.BytesValue,
    Format.Errors.BytesErrorResult,
    Format.Values.BytesResult
  >(data => data.type.typeClass === "bytes");
