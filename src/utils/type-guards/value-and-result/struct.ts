import type { Format } from "@truffle/codec";
import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [
  isStructValue,
  isStructErrorResult,
  isStructResult,
  structGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.StructValue,
  Format.Errors.StructErrorResult,
  Format.Values.StructResult
>(data => data.type.typeClass === "struct");
