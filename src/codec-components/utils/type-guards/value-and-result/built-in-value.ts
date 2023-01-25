import { valueAndResultTypeGuardHelper } from "@/utils/type-guards/value-and-result/helper";
import { uintGuards } from "@/utils/type-guards/value-and-result/uint";
import { intGuards } from "@/utils/type-guards/value-and-result/int";
import { boolGuards } from "@/utils/type-guards/value-and-result/bool";
import { bytesStaticGuards } from "@/utils/type-guards/value-and-result/bytes-static";
import { addressGuards } from "@/utils/type-guards/value-and-result/address";
import { fixedGuards } from "@/utils/type-guards/value-and-result/fixed";
import { ufixedGuards } from "@/utils/type-guards/value-and-result/ufixed";

const [isBuiltInValueValue, isBuiltInValueErrorResult, _, builtInValueGuards] =
  valueAndResultTypeGuardHelper<
    Format.Values.BuiltInValueValue,
    Format.Errors.BuiltInValueErrorResult,
    any
  >(
    ...uintGuards,
    ...intGuards,
    ...boolGuards,
    ...bytesStaticGuards,
    ...addressGuards,
    ...fixedGuards,
    ...ufixedGuards
  );

export { isBuiltInValueValue, isBuiltInValueErrorResult, builtInValueGuards };
