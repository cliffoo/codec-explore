import type { Format } from "@truffle/codec";
import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";

export const [isMagicValue, isMagicErrorResult, isMagicResult, magicGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.MagicValue,
    Format.Errors.MagicErrorResult,
    Format.Values.MagicResult
  >(data => data.type.typeClass === "magic");
