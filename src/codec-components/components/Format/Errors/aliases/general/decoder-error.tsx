import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintError } from "@/utils/type-guards/decoder-error/uint-error";
import { UintError } from "@/components/Format/Errors/aliases/elementary/uint-error";
import { isIntError } from "@/utils/type-guards/decoder-error/int-error";
import { IntError } from "@/components/Format/Errors/aliases/elementary/int-error";
import { isBoolError } from "@/utils/type-guards/decoder-error/bool-error";
import { BoolError } from "@/components/Format/Errors/aliases/elementary/bool-error";
import { isBytesStaticError } from "@/utils/type-guards/decoder-error/bytes-static-error";
import { BytesStaticError } from "@/components/Format/Errors/aliases/elementary/bytes-static-error";
import { isBytesDynamicError } from "@/utils/type-guards/decoder-error/bytes-dynamic-error";
import { BytesDynamicError } from "@/components/Format/Errors/aliases/elementary/bytes-dynamic-error";
import { isAddressError } from "@/utils/type-guards/decoder-error/address-error";
import { AddressError } from "@/components/Format/Errors/aliases/elementary/address-error";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/components/Format/Errors/aliases/elementary/string-error";
import { isFixedError } from "@/utils/type-guards/decoder-error/fixed-error";
import { FixedError } from "@/components/Format/Errors/aliases/elementary/fixed-error";
import { isUfixedError } from "@/utils/type-guards/decoder-error/ufixed-error";
import { UfixedError } from "@/components/Format/Errors/aliases/elementary/ufixed-error";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/components/Format/Errors/aliases/container/array-error";
import { isMappingError } from "@/utils/type-guards/decoder-error/mapping-error";
import { MappingError } from "@/components/Format/Errors/aliases/container/mapping-error";
import { isStructError } from "@/utils/type-guards/decoder-error/struct-error";
import { StructError } from "@/components/Format/Errors/aliases/container/struct-error";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/components/Format/Errors/aliases/special-container/magic-error";
import { isTypeErrorUnion } from "@/utils/type-guards/decoder-error/type-error-union";
import { TypeErrorUnion } from "@/components/Format/Errors/aliases/special-container/type-error-union";
import { isTupleError } from "@/utils/type-guards/decoder-error/tuple-error";
import { TupleError } from "@/components/Format/Errors/aliases/container/tuple-error";
import { isEnumError } from "@/utils/type-guards/decoder-error/enum-error";
import { EnumError } from "@/components/Format/Errors/aliases/user-defined-elementary/enum-error";
import { isUserDefinedValueTypeError } from "@/utils/type-guards/decoder-error/user-defined-value-type-error";
import { UserDefinedValueTypeError } from "@/components/Format/Errors/aliases/user-defined-elementary/user-defined-value-type-error";
import { isContractError } from "@/utils/type-guards/decoder-error/contract-error";
import { ContractError } from "@/components/Format/Errors/aliases/user-defined-elementary/contract-error";
import { isFunctionExternalError } from "@/utils/type-guards/decoder-error/function-external-error";
import { FunctionExternalError } from "@/components/Format/Errors/aliases/function/function-external-error";
import { isFunctionInternalError } from "@/utils/type-guards/decoder-error/function-internal-error";
import { FunctionInternalError } from "@/components/Format/Errors/aliases/function/function-internal-error";
import { isInternalUseError } from "@/utils/type-guards/decoder-error/internal-use-error";
import { InternalUseError } from "@/components/Format/Errors/aliases/internal-use/internal-use-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const DecoderError = createPolymorphicComponent(
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
);
