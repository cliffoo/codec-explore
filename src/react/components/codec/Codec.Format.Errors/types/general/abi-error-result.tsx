import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUintErrorResult } from "@/utils/type-guards/value-and-result/uint";
import { UintErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/uint-error-result";
import { isIntErrorResult } from "@/utils/type-guards/value-and-result/int";
import { IntErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/int-error-result";
import { isBoolErrorResult } from "@/utils/type-guards/value-and-result/bool";
import { BoolErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bool-error-result";
import { isBytesErrorResult } from "@/utils/type-guards/value-and-result/bytes";
import { BytesErrorResult } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-error-result";
import { isAddressErrorResult } from "@/utils/type-guards/value-and-result/address";
import { AddressErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/address-error-result";
import { isFixedErrorResult } from "@/utils/type-guards/value-and-result/fixed";
import { FixedErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-error-result";
import { isUfixedErrorResult } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/ufixed-error-result";
import { isStringErrorResult } from "@/utils/type-guards/value-and-result/string";
import { StringErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/string-error-result";
import { isArrayErrorResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/array-error-result";
import { isFunctionExternalErrorResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-error-result";
import { TupleErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/tuple-error-result";

const displayName = "AbiErrorResult";

export const { AbiErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.AbiErrorResult) =>
      isUintErrorResult(data) ? (
        <UintErrorResult data={data} />
      ) : isIntErrorResult(data) ? (
        <IntErrorResult data={data} />
      ) : isBoolErrorResult(data) ? (
        <BoolErrorResult data={data} />
      ) : isBytesErrorResult(data) ? (
        <BytesErrorResult data={data} />
      ) : isAddressErrorResult(data) ? (
        <AddressErrorResult data={data} />
      ) : isFixedErrorResult(data) ? (
        <FixedErrorResult data={data} />
      ) : isUfixedErrorResult(data) ? (
        <UfixedErrorResult data={data} />
      ) : isStringErrorResult(data) ? (
        <StringErrorResult data={data} />
      ) : isArrayErrorResult(data) ? (
        <ArrayErrorResult data={data} />
      ) : isFunctionExternalErrorResult(data) ? (
        <FunctionExternalErrorResult data={data} />
      ) : (
        <TupleErrorResult data={data} />
      )
  )
};
