import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";
import { uintGuards } from "@/utils/type-guards/value-and-result/uint";
import { intGuards } from "@/utils/type-guards/value-and-result/int";
import { boolGuards } from "@/utils/type-guards/value-and-result/bool";
import { bytesGuards } from "@/utils/type-guards/value-and-result/bytes";
import { addressGuards } from "@/utils/type-guards/value-and-result/address";
import { fixedGuards } from "@/utils/type-guards/value-and-result/fixed";
import { ufixedGuards } from "@/utils/type-guards/value-and-result/ufixed";
import { stringGuards } from "@/utils/type-guards/value-and-result/string";
import { arrayGuards } from "@/utils/type-guards/value-and-result/array";
import { functionExternalGuards } from "@/utils/type-guards/value-and-result/function-external";
import { tupleGuards } from "@/utils/type-guards/value-and-result/tuple";

export const [isAbiValue, isAbiErrorResult, isAbiResult, abiGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.AbiValue,
    Format.Errors.AbiErrorResult,
    Format.Values.AbiResult
  >(
    ...uintGuards,
    ...intGuards,
    ...boolGuards,
    ...bytesGuards,
    ...addressGuards,
    ...fixedGuards,
    ...ufixedGuards,
    ...stringGuards,
    ...arrayGuards,
    ...functionExternalGuards,
    ...tupleGuards
  );
