import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUintResult } from "@/utils/type-guards/value-and-result/uint";
import { UintResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/uint-result";
import { isIntResult } from "@/utils/type-guards/value-and-result/int";
import { IntResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/int-result";
import { isBoolResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bool-result";
import { isBytesResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bytes-result";
import { isAddressResult } from "@/utils/type-guards/value-and-result/address";
import { AddressResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/address-result";
import { isFixedResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/fixed-result";
import { isUfixedResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/ufixed-result";
import { isStringResult } from "@/utils/type-guards/value-and-result/string";
import { StringResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/string-result";
import { isArrayResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayResult } from "@/react/components/codec/Codec.Format.Values/types/container/array-result";
import { isFunctionExternalResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalResult } from "@/react/components/codec/Codec.Format.Values/types/function/function-external-result";
import { TupleResult } from "@/react/components/codec/Codec.Format.Values/types/container/tuple-result";

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
