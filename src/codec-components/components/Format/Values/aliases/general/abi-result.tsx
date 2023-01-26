import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintResult } from "@/utils/type-guards/value-and-result/uint";
import { UintResult } from "@/components/Format/Values/aliases/elementary/uint-result";
import { isIntResult } from "@/utils/type-guards/value-and-result/int";
import { IntResult } from "@/components/Format/Values/aliases/elementary/int-result";
import { isBoolResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolResult } from "@/components/Format/Values/aliases/elementary/bool-result";
import { isBytesResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesResult } from "@/components/Format/Values/aliases/elementary/bytes-result";
import { isAddressResult } from "@/utils/type-guards/value-and-result/address";
import { AddressResult } from "@/components/Format/Values/aliases/elementary/address-result";
import { isFixedResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedResult } from "@/components/Format/Values/aliases/elementary/fixed-result";
import { isUfixedResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedResult } from "@/components/Format/Values/aliases/elementary/ufixed-result";
import { isStringResult } from "@/utils/type-guards/value-and-result/string";
import { StringResult } from "@/components/Format/Values/aliases/elementary/string-result";
import { isArrayResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayResult } from "@/components/Format/Values/aliases/container/array-result";
import { isFunctionExternalResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalResult } from "@/components/Format/Values/aliases/function/function-external-result";
import { TupleResult } from "@/components/Format/Values/aliases/container/tuple-result";

const displayName = "AbiResult";

export const { AbiResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.AbiResult) =>
      isUintResult(data) ? (
        <UintResult data={data} />
      ) : isIntResult(data) ? (
        <IntResult data={data} />
      ) : isBoolResult(data) ? (
        <BoolResult data={data} />
      ) : isBytesResult(data) ? (
        <BytesResult data={data} />
      ) : isAddressResult(data) ? (
        <AddressResult data={data} />
      ) : isFixedResult(data) ? (
        <FixedResult data={data} />
      ) : isUfixedResult(data) ? (
        <UfixedResult data={data} />
      ) : isStringResult(data) ? (
        <StringResult data={data} />
      ) : isArrayResult(data) ? (
        <ArrayResult data={data} />
      ) : isFunctionExternalResult(data) ? (
        <FunctionExternalResult data={data} />
      ) : (
        <TupleResult data={data} />
      )
  )
};
