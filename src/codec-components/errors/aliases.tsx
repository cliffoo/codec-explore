import type { Format } from "@truffle/codec";
import {
  createPolymorphicComponent,
  ComponentDataTypeIsNeverError
} from "../utils";
import {
  // Elementary types
  isAddressErrorResult,
  AddressErrorResult,
  isAddressPaddingError,
  AddressPaddingError,
  isBoolErrorResult,
  BoolErrorResult,
  isBoolOutOfRangeError,
  BoolOutOfRangeError,
  isBoolPaddingError,
  BoolPaddingError,
  isBytesDynamicErrorResult,
  BytesDynamicErrorResult,
  isBytesPaddingError,
  BytesPaddingError,
  isBytesStaticErrorResult,
  BytesStaticErrorResult,
  isEnumPaddingError,
  EnumPaddingError,
  isFixedErrorResult,
  FixedErrorResult,
  isFixedPaddingError,
  FixedPaddingError,
  isIntErrorResult,
  IntErrorResult,
  isIntPaddingError,
  IntPaddingError,
  isStringErrorResult,
  StringErrorResult,
  isUfixedErrorResult,
  UfixedErrorResult,
  isUfixedPaddingError,
  UfixedPaddingError,
  isUintErrorResult,
  UintErrorResult,
  isUintPaddingError,
  UintPaddingError,
  // Container types
  isArrayErrorResult,
  ArrayErrorResult,
  isMappingErrorResult,
  MappingErrorResult,
  isStructErrorResult,
  StructErrorResult,
  isTupleErrorResult,
  TupleErrorResult,
  // Function types
  isDeployedFunctionInConstructorError,
  DeployedFunctionInConstructorError,
  isFunctionExternalErrorResult,
  FunctionExternalErrorResult,
  isFunctionExternalNonStackPaddingError,
  FunctionExternalNonStackPaddingError,
  isFunctionExternalStackPaddingError,
  FunctionExternalStackPaddingError,
  isFunctionInternalErrorResult,
  FunctionInternalErrorResult,
  isFunctionInternalPaddingError,
  FunctionInternalPaddingError,
  isMalformedInternalFunctionError,
  MalformedInternalFunctionError,
  isNoSuchInternalFunctionError,
  NoSuchInternalFunctionError,
  // Special container types (debugger-only)
  isMagicErrorResult,
  MagicErrorResult,
  isTypeErrorResult,
  TypeErrorResult,
  // Generic errors
  isIndexedReferenceTypeError,
  IndexedReferenceTypeError,
  isOverlargePointersNotImplementedError,
  OverlargePointersNotImplementedError,
  isOverlongArraysAndStringsNotImplementedError,
  OverlongArraysAndStringsNotImplementedError,
  isReadErrorBytes,
  ReadErrorBytes,
  isReadErrorStack,
  ReadErrorStack,
  isReadErrorStorage,
  ReadErrorStorage,
  isUnsupportedConstantError,
  UnsupportedConstantError,
  isUnusedImmutableError,
  UnusedImmutableError,
  isUserDefinedTypeNotFoundError,
  UserDefinedTypeNotFoundError,
  // Internal-use errors
  isInternalFunctionInABIError,
  InternalFunctionInABIError,
  isOverlongArrayOrStringStrictModeError,
  OverlongArrayOrStringStrictModeError,
  // User-defined elementary types
  isContractErrorResult,
  ContractErrorResult,
  isContractPaddingError,
  ContractPaddingError,
  isEnumErrorResult,
  EnumErrorResult,
  isEnumNotFoundDecodingError,
  EnumNotFoundDecodingError,
  isEnumOutOfRangeError,
  EnumOutOfRangeError,
  isUserDefinedValueTypeErrorResult,
  UserDefinedValueTypeErrorResult,
  isWrappedError,
  WrappedError,
  // Other
  OptionsErrorResult,
  // Undocumented
  isCodeNotSuppliedError,
  CodeNotSuppliedError,
  isStorageNotSuppliedError,
  StorageNotSuppliedError
} from "./interfaces";

/**
 * General categories
 */

export const isAbiErrorResult = (
  data: Format.Errors.ErrorResult
): data is Format.Errors.AbiErrorResult =>
  isUintErrorResult(data) ||
  isIntErrorResult(data) ||
  isBoolErrorResult(data) ||
  isBytesErrorResult(data) ||
  isAddressErrorResult(data) ||
  isFixedErrorResult(data) ||
  isUfixedErrorResult(data) ||
  isStringErrorResult(data) ||
  isArrayErrorResult(data) ||
  isFunctionExternalErrorResult(data) ||
  isTupleErrorResult(data);
export const AbiErrorResult = createPolymorphicComponent(
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
);

// No type guard for DecoderError
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

export const isErrorResult = (
  data: Format.Values.Result
): data is Format.Errors.ErrorResult => data.kind === "error";
export const ErrorResult = createPolymorphicComponent(
  (data: Format.Errors.ErrorResult) =>
    isElementaryErrorResult(data) ? (
      <ElementaryErrorResult data={data} />
    ) : isArrayErrorResult(data) ? (
      <ArrayErrorResult data={data} />
    ) : isMappingErrorResult(data) ? (
      <MappingErrorResult data={data} />
    ) : isStructErrorResult(data) ? (
      <StructErrorResult data={data} />
    ) : isMagicErrorResult(data) ? (
      <MagicErrorResult data={data} />
    ) : isTypeErrorResult(data) ? (
      <TypeErrorResult data={data} />
    ) : isTupleErrorResult(data) ? (
      <TupleErrorResult data={data} />
    ) : isFunctionExternalErrorResult(data) ? (
      <FunctionExternalErrorResult data={data} />
    ) : isFunctionInternalErrorResult(data) ? (
      <FunctionInternalErrorResult data={data} />
    ) : (
      <OptionsErrorResult data={data} />
    )
);

/**
 * Elementary types
 */

export const isAddressError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.AddressError => isAddressPaddingError(data);
export const AddressError = createPolymorphicComponent(
  (data: Format.Errors.AddressError) => <AddressPaddingError data={data} />
);

export const isBoolError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.BoolError =>
  isBoolOutOfRangeError(data) || isBoolPaddingError(data);
export const BoolError = createPolymorphicComponent(
  (data: Format.Errors.BoolError) =>
    isBoolOutOfRangeError(data) ? (
      <BoolOutOfRangeError data={data} />
    ) : (
      <BoolPaddingError data={data} />
    )
);

export const isBuiltInValueErrorResult = (
  data: Format.Errors.ErrorResult
): data is Format.Errors.BuiltInValueErrorResult =>
  isUintErrorResult(data) ||
  isIntErrorResult(data) ||
  isBoolErrorResult(data) ||
  isBytesStaticErrorResult(data) ||
  isAddressErrorResult(data) ||
  isFixedErrorResult(data) ||
  isUfixedErrorResult(data);
export const BuiltInValueErrorResult = createPolymorphicComponent(
  (data: Format.Errors.BuiltInValueErrorResult) =>
    isUintErrorResult(data) ? (
      <UintErrorResult data={data} />
    ) : isIntErrorResult(data) ? (
      <IntErrorResult data={data} />
    ) : isBoolErrorResult(data) ? (
      <BoolErrorResult data={data} />
    ) : isBytesStaticErrorResult(data) ? (
      <BytesStaticErrorResult data={data} />
    ) : isAddressErrorResult(data) ? (
      <AddressErrorResult data={data} />
    ) : isFixedErrorResult(data) ? (
      <FixedErrorResult data={data} />
    ) : (
      <UfixedErrorResult data={data} />
    )
);

export const isBytesDynamicError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.BytesDynamicError =>
  isDynamicDataImplementationError(data);
export const BytesDynamicError = createPolymorphicComponent(
  (data: Format.Errors.BytesDynamicError) => (
    <DynamicDataImplementationError data={data} />
  )
);

export const isBytesErrorResult = (
  data: Format.Errors.ErrorResult
): data is Format.Errors.BytesErrorResult =>
  isBytesStaticErrorResult(data) || isBytesDynamicErrorResult(data);
export const BytesErrorResult = createPolymorphicComponent(
  (data: Format.Errors.BytesErrorResult) =>
    isBytesStaticErrorResult(data) ? (
      <BytesStaticErrorResult data={data} />
    ) : (
      <BytesDynamicErrorResult data={data} />
    )
);

export const isBytesStaticError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.BytesStaticError => isBytesPaddingError(data);
export const BytesStaticError = createPolymorphicComponent(
  (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
);

export const isElementaryErrorResult = (
  data: Format.Errors.ErrorResult
): data is Format.Errors.ElementaryErrorResult =>
  isUintErrorResult(data) ||
  isIntErrorResult(data) ||
  isBoolErrorResult(data) ||
  isBytesErrorResult(data) ||
  isAddressErrorResult(data) ||
  isStringErrorResult(data) ||
  isFixedErrorResult(data) ||
  isUfixedErrorResult(data) ||
  isEnumErrorResult(data) ||
  isUserDefinedValueTypeErrorResult(data) ||
  isContractErrorResult(data);
export const ElementaryErrorResult = createPolymorphicComponent(
  (data: Format.Errors.ElementaryErrorResult) =>
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
    ) : isStringErrorResult(data) ? (
      <StringErrorResult data={data} />
    ) : isFixedErrorResult(data) ? (
      <FixedErrorResult data={data} />
    ) : isUfixedErrorResult(data) ? (
      <UfixedErrorResult data={data} />
    ) : isEnumErrorResult(data) ? (
      <EnumErrorResult data={data} />
    ) : isUserDefinedValueTypeErrorResult(data) ? (
      <UserDefinedValueTypeErrorResult data={data} />
    ) : (
      <ContractErrorResult data={data} />
    )
);

export const isFixedError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.FixedError => isFixedPaddingError(data);
export const FixedError = createPolymorphicComponent(
  (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
);

export const isIntError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.IntError => isIntPaddingError(data);
export const IntError = createPolymorphicComponent(
  (data: Format.Errors.IntError) => <IntPaddingError data={data} />
);

export const isStringError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.StringError => isDynamicDataImplementationError(data);
export const StringError = createPolymorphicComponent(
  (data: Format.Errors.StringError) => (
    <DynamicDataImplementationError data={data} />
  )
);

export const isUfixedError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.UfixedError => isUfixedPaddingError(data);
export const UfixedError = createPolymorphicComponent(
  (data: Format.Errors.UfixedError) => <UfixedPaddingError data={data} />
);

export const isUintError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.UintError => isUintPaddingError(data);
export const UintError = createPolymorphicComponent(
  (data: Format.Errors.UintError) => <UintPaddingError data={data} />
);

/**
 * Container types
 */

export const isArrayError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.ArrayError => isDynamicDataImplementationError(data);
export const ArrayError = createPolymorphicComponent(
  (data: Format.Errors.ArrayError) => (
    <DynamicDataImplementationError data={data} />
  )
);

export const isMappingError = (data: any): data is Format.Errors.MappingError =>
  false;
export const MappingError = createPolymorphicComponent(
  (data: Format.Errors.MappingError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MappingError");
  }
);

export const isStructError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.StructError => isDynamicDataImplementationError(data);
export const StructError = createPolymorphicComponent(
  (data: Format.Errors.StructError) => (
    <DynamicDataImplementationError data={data} />
  )
);

export const isTupleError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.TupleError => isDynamicDataImplementationError(data);
export const TupleError = createPolymorphicComponent(
  (data: Format.Errors.TupleError) => (
    <DynamicDataImplementationError data={data} />
  )
);

/**
 * Function types
 */

export const isFunctionExternalError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.FunctionExternalError =>
  isFunctionExternalNonStackPaddingError(data) ||
  isFunctionExternalStackPaddingError(data);
export const FunctionExternalError = createPolymorphicComponent(
  (data: Format.Errors.FunctionExternalError) =>
    isFunctionExternalNonStackPaddingError(data) ? (
      <FunctionExternalNonStackPaddingError data={data} />
    ) : (
      <FunctionExternalStackPaddingError data={data} />
    )
);

export const isFunctionInternalError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.FunctionInternalError =>
  isFunctionInternalPaddingError(data) ||
  isNoSuchInternalFunctionError(data) ||
  isDeployedFunctionInConstructorError(data) ||
  isMalformedInternalFunctionError(data);
export const FunctionInternalError = createPolymorphicComponent(
  (data: Format.Errors.FunctionInternalError) =>
    isFunctionInternalPaddingError(data) ? (
      <FunctionInternalPaddingError data={data} />
    ) : isNoSuchInternalFunctionError(data) ? (
      <NoSuchInternalFunctionError data={data} />
    ) : isDeployedFunctionInConstructorError(data) ? (
      <DeployedFunctionInConstructorError data={data} />
    ) : (
      <MalformedInternalFunctionError data={data} />
    )
);

/**
 * Special container types (debugger-only)
 */

export const isMagicError = (data: any): data is Format.Errors.MagicError =>
  false;
export const MagicError = createPolymorphicComponent(
  (data: Format.Errors.MagicError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
  }
);

export const isTypeErrorUnion = (
  data: any
): data is Format.Errors.TypeErrorUnion => false;
export const TypeErrorUnion = createPolymorphicComponent(
  (data: Format.Errors.TypeErrorUnion) => {
    throw new ComponentDataTypeIsNeverError(
      "Codec.Format.Errors.TypeErrorUnion"
    );
  }
);

/**
 * Generic errors
 */

export const isDynamicDataImplementationError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.DynamicDataImplementationError =>
  isOverlongArraysAndStringsNotImplementedError(data) ||
  isOverlargePointersNotImplementedError(data);
export const DynamicDataImplementationError = createPolymorphicComponent(
  (data: Format.Errors.DynamicDataImplementationError) =>
    isOverlongArraysAndStringsNotImplementedError(data) ? (
      <OverlongArraysAndStringsNotImplementedError data={data} />
    ) : (
      <OverlargePointersNotImplementedError data={data} />
    )
);

export const isErrorForThrowing = (
  data: Format.Errors.DecoderError
): data is Format.Errors.ErrorForThrowing =>
  isUserDefinedTypeNotFoundError(data) || isReadError(data);
export const ErrorForThrowing = createPolymorphicComponent(
  (data: Format.Errors.ErrorForThrowing) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : (
      <ReadError data={data} />
    )
);

export const isGenericError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.GenericError =>
  isUserDefinedTypeNotFoundError(data) ||
  isIndexedReferenceTypeError(data) ||
  isReadError(data);
export const GenericError = createPolymorphicComponent(
  (data: Format.Errors.GenericError) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : isIndexedReferenceTypeError(data) ? (
      <IndexedReferenceTypeError data={data} />
    ) : (
      <ReadError data={data} />
    )
);

export const isReadError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.ReadError =>
  isUnsupportedConstantError(data) ||
  isReadErrorStack(data) ||
  isReadErrorBytes(data) ||
  isReadErrorStorage(data) ||
  isUnusedImmutableError(data) ||
  isCodeNotSuppliedError(data) ||
  isStorageNotSuppliedError(data);
export const ReadError = createPolymorphicComponent(
  (data: Format.Errors.ReadError) =>
    isUnsupportedConstantError(data) ? (
      <UnsupportedConstantError data={data} />
    ) : isReadErrorStack(data) ? (
      <ReadErrorStack data={data} />
    ) : isReadErrorBytes(data) ? (
      <ReadErrorBytes data={data} />
    ) : isReadErrorStorage(data) ? (
      <ReadErrorStorage data={data} />
    ) : isUnusedImmutableError(data) ? (
      <UnusedImmutableError data={data} />
    ) : isCodeNotSuppliedError(data) ? (
      <CodeNotSuppliedError data={data} />
    ) : (
      <StorageNotSuppliedError data={data} />
    )
);

/**
 * Internal-use errors
 */

export const isInternalUseError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.InternalUseError =>
  isOverlongArrayOrStringStrictModeError(data) ||
  isInternalFunctionInABIError(data);
export const InternalUseError = createPolymorphicComponent(
  (data: Format.Errors.InternalUseError) =>
    isOverlongArrayOrStringStrictModeError(data) ? (
      <OverlongArrayOrStringStrictModeError data={data} />
    ) : (
      <InternalFunctionInABIError data={data} />
    )
);

/**
 * User-defined elementary types
 */

export const isContractError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.ContractError => isContractPaddingError(data);
export const ContractError = createPolymorphicComponent(
  (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
);

export const isEnumError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.EnumError =>
  isEnumOutOfRangeError(data) ||
  isEnumPaddingError(data) ||
  isEnumNotFoundDecodingError(data);
export const EnumError = createPolymorphicComponent(
  (data: Format.Errors.EnumError) =>
    isEnumOutOfRangeError(data) ? (
      <EnumOutOfRangeError data={data} />
    ) : isEnumPaddingError(data) ? (
      <EnumPaddingError data={data} />
    ) : (
      <EnumNotFoundDecodingError data={data} />
    )
);

export const isUserDefinedValueTypeError = (
  data: Format.Errors.DecoderError
): data is Format.Errors.UserDefinedValueTypeError => isWrappedError(data);
export const UserDefinedValueTypeError = createPolymorphicComponent(
  (data: Format.Errors.UserDefinedValueTypeError) => (
    <WrappedError data={data} />
  )
);

/**
 * Other
 */

export const isBytesLocation = (
  data: string
): data is Format.Errors.BytesLocation =>
  data === "memory" ||
  data === "calldata" ||
  data === "eventdata" ||
  data === "returndata" ||
  data === "code";
export const BytesLocation = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BytesLocation) => data
);

export const isOptionsError = (data: any): data is Format.Errors.OptionsError =>
  false;
export const OptionsError = createPolymorphicComponent(
  (data: Format.Errors.OptionsError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.OptionsError");
  }
);
