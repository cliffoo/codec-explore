import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isBytesStaticValue,
  isBytesStaticErrorResult,
  isBytesStaticResult,
  bytesStaticGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.BytesStaticValue,
  Format.Errors.BytesStaticErrorResult,
  Format.Values.BytesStaticResult
>(data => data.type.typeClass === "bytes" && data.type.kind === "static");
