import type { Format } from "@truffle/codec";
import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";
import { uintGuards } from "@/utils/type-guards/value-and-result/uint";
import { intGuards } from "@/utils/type-guards/value-and-result/int";
import { boolGuards } from "@/utils/type-guards/value-and-result/bool";
import { bytesGuards } from "@/utils/type-guards/value-and-result/bytes";
import { addressGuards } from "@/utils/type-guards/value-and-result/address";
import { stringGuards } from "@/utils/type-guards/value-and-result/string";
import { fixedGuards } from "@/utils/type-guards/value-and-result/fixed";
import { ufixedGuards } from "@/utils/type-guards/value-and-result/ufixed";
import { enumGuards } from "@/utils/type-guards/value-and-result/enum";
import { userDefinedValueTypeGuards } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { contractGuards } from "@/utils/type-guards/value-and-result/contract";

export const [
  isElementaryValue,
  isElementaryErrorResult,
  isElementaryResult,
  elementaryGuards
] = valueAndResultTypeGuardHelper<
  Format.Values.ElementaryValue,
  Format.Errors.ElementaryErrorResult,
  Format.Values.ElementaryResult
>(
  ...uintGuards,
  ...intGuards,
  ...boolGuards,
  ...bytesGuards,
  ...addressGuards,
  ...stringGuards,
  ...fixedGuards,
  ...ufixedGuards,
  ...enumGuards,
  ...userDefinedValueTypeGuards,
  ...contractGuards
);
