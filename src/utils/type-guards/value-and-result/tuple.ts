import type { Format } from "@truffle/codec";
import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isTupleValue, isTupleErrorResult, isTupleResult, tupleGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.TupleValue,
    Format.Errors.TupleErrorResult,
    Format.Values.TupleResult
  >(data => data.type.typeClass === "tuple");
