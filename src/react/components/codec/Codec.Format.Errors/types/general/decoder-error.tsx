import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUintError } from "@/utils/type-guards/decoder-error/uint-error";
import { UintError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/uint-error";
import { isIntError } from "@/utils/type-guards/decoder-error/int-error";
import { IntError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/int-error";
import { isBoolError } from "@/utils/type-guards/decoder-error/bool-error";
import { BoolError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bool-error";
import { isBytesStaticError } from "@/utils/type-guards/decoder-error/bytes-static-error";
import { BytesStaticError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-static-error";
import { isBytesDynamicError } from "@/utils/type-guards/decoder-error/bytes-dynamic-error";
import { BytesDynamicError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-dynamic-error";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/address-error";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/string-error";
import { isFixedError } from "@/utils/type-guards/decoder-error/fixed-error";
import { FixedError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/fixed-error";
import { isUfixedError } from "@/utils/type-guards/decoder-error/ufixed-error";
import { UfixedError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/ufixed-error";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/react/components/codec/Codec.Format.Errors/types/container/array-error";
import { isMappingError } from "@/utils/type-guards/decoder-error/mapping-error";
import { MappingError } from "@/react/components/codec/Codec.Format.Errors/types/container/mapping-error";
import { isStructError } from "@/utils/type-guards/decoder-error/struct-error";
import { StructError } from "@/react/components/codec/Codec.Format.Errors/types/container/struct-error";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/react/components/codec/Codec.Format.Errors/types/special-container/magic-error";
import { isTypeErrorUnion } from "@/utils/type-guards/decoder-error/type-error-union";
import { TypeErrorUnion } from "@/react/components/codec/Codec.Format.Errors/types/special-container/type-error-union";
import { isTupleError } from "@/utils/type-guards/decoder-error/tuple-error";
import { TupleError } from "@/react/components/codec/Codec.Format.Errors/types/container/tuple-error";
import { isEnumError } from "@/utils/type-guards/decoder-error/enum-error";
import { EnumError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/enum-error";
import { isUserDefinedValueTypeError } from "@/utils/type-guards/decoder-error/user-defined-value-type-error";
import { UserDefinedValueTypeError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/user-defined-value-type-error";
import { isContractError } from "@/utils/type-guards/decoder-error/contract-error";
import { ContractError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/contract-error";
import { isFunctionExternalError } from "@/utils/type-guards/decoder-error/function-external-error";
import { FunctionExternalError } from "@/react/components/codec/Codec.Format.Errors/types/function/function-external-error";
import { isFunctionInternalError } from "@/utils/type-guards/decoder-error/function-internal-error";
import { FunctionInternalError } from "@/react/components/codec/Codec.Format.Errors/types/function/function-internal-error";
import { isInternalUseError } from "@/utils/type-guards/decoder-error/internal-use-error";
import { InternalUseError } from "@/react/components/codec/Codec.Format.Errors/types/internal-use/internal-use-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "DecoderError";

export const { DecoderError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.DecoderError) =>
      isUintError(data) ? (
        <UintError data={data} />
      ) : isIntError(data) ? (
        <IntError data={data} />
      ) : isBoolError(data) ? (
        <BoolError data={data} />
      ) : isBytesStaticError(data) ? (
        <BytesStaticError data={data} />
      ) : isBytesDynamicError(data) ? (
        <BytesDynamicError data={data} />
      ) : isAddressError(data) ? (
        <AddressError data={data} />
      ) : isStringError(data) ? (
        <StringError data={data} />
      ) : isFixedError(data) ? (
        <FixedError data={data} />
      ) : isUfixedError(data) ? (
        <UfixedError data={data} />
      ) : isArrayError(data) ? (
        <ArrayError data={data} />
      ) : isMappingError(data) ? (
        <MappingError data={data} />
      ) : isStructError(data) ? (
        <StructError data={data} />
      ) : isMagicError(data) ? (
        <MagicError data={data} />
      ) : isTypeErrorUnion(data) ? (
        <TypeErrorUnion data={data} />
      ) : isTupleError(data) ? (
        <TupleError data={data} />
      ) : isEnumError(data) ? (
        <EnumError data={data} />
      ) : isUserDefinedValueTypeError(data) ? (
        <UserDefinedValueTypeError data={data} />
      ) : isContractError(data) ? (
        <ContractError data={data} />
      ) : isFunctionExternalError(data) ? (
        <FunctionExternalError data={data} />
      ) : isFunctionInternalError(data) ? (
        <FunctionInternalError data={data} />
      ) : isInternalUseError(data) ? (
        <InternalUseError data={data} />
      ) : (
        <GenericError data={data} />
      )
  )
};
