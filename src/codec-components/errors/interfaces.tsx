import type { Format } from "@truffle/codec";
import {
  createPolymorphicComponent,
  createErrorResultTypeGuard,
  createErrorTypeGuard,
  typeGuardExprs
} from "../utils";
import {
  // Elementary types
  isAddressError,
  AddressError,
  isBoolError,
  BoolError,
  BuiltInValueErrorResult,
  isBytesDynamicError,
  BytesDynamicError,
  isBytesStaticError,
  BytesStaticError,
  isFixedError,
  FixedError,
  isIntError,
  IntError,
  isStringError,
  StringError,
  isUfixedError,
  UfixedError,
  isUintError,
  UintError,
  // Container types
  isArrayError,
  ArrayError,
  isMappingError,
  MappingError,
  isStructError,
  StructError,
  isTupleError,
  TupleError,
  // Function types
  isFunctionExternalError,
  FunctionExternalError,
  isFunctionInternalError,
  FunctionInternalError,
  // Generic errors
  GenericError,
  // User-defined elementary types
  isContractError,
  ContractError,
  isEnumError,
  EnumError,
  isUserDefinedValueTypeError,
  UserDefinedValueTypeError
} from "./aliases";

/**
 * Elementary types
 */

export const isAddressErrorResult =
  createErrorResultTypeGuard<Format.Errors.AddressErrorResult>(
    typeGuardExprs.address
  );
export const AddressErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.AddressErrorResult) =>
    isAddressError(error) ? (
      <AddressError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isAddressPaddingError =
  createErrorTypeGuard<Format.Errors.AddressPaddingError>(
    "AddressPaddingError"
  );
export const AddressPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.AddressPaddingError) => data.raw
);

export const isBoolErrorResult =
  createErrorResultTypeGuard<Format.Errors.BoolErrorResult>(
    typeGuardExprs.bool
  );
export const BoolErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.BoolErrorResult) =>
    isBoolError(error) ? (
      <BoolError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isBoolOutOfRangeError =
  createErrorTypeGuard<Format.Errors.BoolOutOfRangeError>(
    "BoolOutOfRangeError"
  );
export const BoolOutOfRangeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BoolOutOfRangeError) => data.rawAsBN.toString()
);

export const isBoolPaddingError =
  createErrorTypeGuard<Format.Errors.BoolPaddingError>("BoolPaddingError");
export const BoolPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BoolPaddingError) => data.raw
);

export const isBytesDynamicErrorResult =
  createErrorResultTypeGuard<Format.Errors.BytesDynamicErrorResult>(
    typeGuardExprs.bytesDynamic
  );
export const BytesDynamicErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.BytesDynamicErrorResult) =>
    isBytesDynamicError(error) ? (
      <BytesDynamicError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isBytesPaddingError =
  createErrorTypeGuard<Format.Errors.BytesPaddingError>("BytesPaddingError");
export const BytesPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BytesPaddingError) => data.raw
);

export const isBytesStaticErrorResult =
  createErrorResultTypeGuard<Format.Errors.BytesStaticErrorResult>(
    typeGuardExprs.bytesStatic
  );
export const BytesStaticErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.BytesStaticErrorResult) =>
    isBytesStaticError(error) ? (
      <BytesStaticError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isEnumPaddingError =
  createErrorTypeGuard<Format.Errors.EnumPaddingError>("EnumPaddingError");
export const EnumPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumPaddingError) => data.raw
);

export const isFixedErrorResult =
  createErrorResultTypeGuard<Format.Errors.FixedErrorResult>(
    typeGuardExprs.fixed
  );
export const FixedErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FixedErrorResult) =>
    isFixedError(error) ? (
      <FixedError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isFixedPaddingError =
  createErrorTypeGuard<Format.Errors.FixedPaddingError>("FixedPaddingError");
export const FixedPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FixedPaddingError) => data.raw
);

export const isIntErrorResult =
  createErrorResultTypeGuard<Format.Errors.IntErrorResult>(typeGuardExprs.int);
export const IntErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.IntErrorResult) =>
    isIntError(error) ? (
      <IntError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isIntPaddingError =
  createErrorTypeGuard<Format.Errors.IntPaddingError>("IntPaddingError");
export const IntPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.IntPaddingError) => data.raw
);

export const isStringErrorResult =
  createErrorResultTypeGuard<Format.Errors.StringErrorResult>(
    typeGuardExprs.string
  );
export const StringErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.StringErrorResult) =>
    isStringError(error) ? (
      <StringError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isUfixedErrorResult =
  createErrorResultTypeGuard<Format.Errors.UfixedErrorResult>(
    typeGuardExprs.ufixed
  );
export const UfixedErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.UfixedErrorResult) =>
    isUfixedError(error) ? (
      <UfixedError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isUfixedPaddingError =
  createErrorTypeGuard<Format.Errors.UfixedPaddingError>("UfixedPaddingError");
export const UfixedPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UfixedPaddingError) => data.raw
);

export const isUintErrorResult =
  createErrorResultTypeGuard<Format.Errors.UintErrorResult>(
    typeGuardExprs.uint
  );
export const UintErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.UintErrorResult) =>
    isUintError(error) ? (
      <UintError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isUintPaddingError =
  createErrorTypeGuard<Format.Errors.UintPaddingError>("UintPaddingError");
export const UintPaddingError = createPolymorphicComponent(
  (data: Format.Errors.UintPaddingError) => data.raw
);

/**
 * Container types
 */

export const isArrayErrorResult =
  createErrorResultTypeGuard<Format.Errors.ArrayErrorResult>(
    typeGuardExprs.array
  );
export const ArrayErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.ArrayErrorResult) =>
    isArrayError(error) ? (
      <ArrayError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isMappingErrorResult =
  createErrorResultTypeGuard<Format.Errors.MappingErrorResult>(
    typeGuardExprs.mapping
  );
export const MappingErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.MappingErrorResult) =>
    isMappingError(error) ? (
      <MappingError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isStructErrorResult =
  createErrorResultTypeGuard<Format.Errors.StructErrorResult>(
    typeGuardExprs.struct
  );
export const StructErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.StructErrorResult) =>
    isStructError(error) ? (
      <StructError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isTupleErrorResult =
  createErrorResultTypeGuard<Format.Errors.TupleErrorResult>(
    typeGuardExprs.tuple
  );
export const TupleErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.TupleErrorResult) =>
    isTupleError(error) ? (
      <TupleError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

/**
 * Function types
 */

export const isDeployedFunctionInConstructorError =
  createErrorTypeGuard<Format.Errors.DeployedFunctionInConstructorError>(
    "DeployedFunctionInConstructorError"
  );
export const DeployedFunctionInConstructorError = createPolymorphicComponent(
  (data: Format.Errors.DeployedFunctionInConstructorError) =>
    // TODO
    data.constructorProgramCounter.toString()
);

export const isFunctionExternalErrorResult =
  createErrorResultTypeGuard<Format.Errors.FunctionExternalErrorResult>(
    typeGuardExprs.functionExternal
  );
export const FunctionExternalErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FunctionExternalErrorResult) =>
    isFunctionExternalError(error) ? (
      <FunctionExternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isFunctionExternalNonStackPaddingError =
  createErrorTypeGuard<Format.Errors.FunctionExternalNonStackPaddingError>(
    "FunctionExternalNonStackPaddingError"
  );
export const FunctionExternalNonStackPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionExternalNonStackPaddingError) => data.raw
);

export const isFunctionExternalStackPaddingError =
  createErrorTypeGuard<Format.Errors.FunctionExternalStackPaddingError>(
    "FunctionExternalStackPaddingError"
  );
export const FunctionExternalStackPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionExternalStackPaddingError) => data.rawAddress
);

export const isFunctionInternalErrorResult =
  createErrorResultTypeGuard<Format.Errors.FunctionInternalErrorResult>(
    typeGuardExprs.functionInternal
  );
export const FunctionInternalErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FunctionInternalErrorResult) =>
    isFunctionInternalError(error) ? (
      <FunctionInternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isFunctionInternalPaddingError =
  createErrorTypeGuard<Format.Errors.FunctionInternalPaddingError>(
    "FunctionInternalPaddingError"
  );
export const FunctionInternalPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionInternalPaddingError) => data.raw
);

export const isMalformedInternalFunctionError =
  createErrorTypeGuard<Format.Errors.MalformedInternalFunctionError>(
    "MalformedInternalFunctionError"
  );
export const MalformedInternalFunctionError = createPolymorphicComponent(
  (data: Format.Errors.MalformedInternalFunctionError) =>
    // TODO
    data.constructorProgramCounter.toString()
);

export const isNoSuchInternalFunctionError =
  createErrorTypeGuard<Format.Errors.NoSuchInternalFunctionError>(
    "NoSuchInternalFunctionError"
  );
export const NoSuchInternalFunctionError = createPolymorphicComponent(
  (data: Format.Errors.NoSuchInternalFunctionError) =>
    // TODO
    data.constructorProgramCounter.toString()
);

/**
 * Special container types (debugger-only)
 */

export const isMagicErrorResult =
  createErrorResultTypeGuard<Format.Errors.MagicErrorResult>(
    typeGuardExprs.magic
  );
export const MagicErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.MagicErrorResult) => <GenericError data={error} />
);

export const isTypeErrorResult =
  createErrorResultTypeGuard<Format.Errors.TypeErrorResult>(
    typeGuardExprs.type
  );
export const TypeErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.TypeErrorResult) => <GenericError data={error} />
);

/**
 * Generic errors
 */

export const isIndexedReferenceTypeError =
  createErrorTypeGuard<Format.Errors.IndexedReferenceTypeError>(
    "IndexedReferenceTypeError"
  );
export const IndexedReferenceTypeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.IndexedReferenceTypeError) => data.raw
);

export const isOverlargePointersNotImplementedError =
  createErrorTypeGuard<Format.Errors.OverlargePointersNotImplementedError>(
    "OverlargePointersNotImplementedError"
  );
export const OverlargePointersNotImplementedError = createPolymorphicComponent(
  (data: Format.Errors.OverlargePointersNotImplementedError) =>
    // TODO
    data.pointerAsBN.toString()
);

export const isOverlongArraysAndStringsNotImplementedError =
  createErrorTypeGuard<Format.Errors.OverlongArraysAndStringsNotImplementedError>(
    "OverlongArraysAndStringsNotImplementedError"
  );
export const OverlongArraysAndStringsNotImplementedError =
  createPolymorphicComponent(
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) =>
      // TODO
      data.lengthAsBN.toString()
  );

export const isReadErrorBytes =
  createErrorTypeGuard<Format.Errors.ReadErrorBytes>("ReadErrorBytes");
export const ReadErrorBytes = createPolymorphicComponent(
  (data: Format.Errors.ReadErrorBytes) =>
    // TODO
    `${data.location}: ${data.start} to ${data.start + data.length}`
);

export const isReadErrorStack =
  createErrorTypeGuard<Format.Errors.ReadErrorStack>("ReadErrorStack");
export const ReadErrorStack = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ReadErrorStack) => `${data.from} to ${data.to}`
);

export const isReadErrorStorage =
  createErrorTypeGuard<Format.Errors.ReadErrorStorage>("ReadErrorStorage");
export const ReadErrorStorage = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ReadErrorStorage) => data.range.from.index.toString()
);

export const isUnsupportedConstantError =
  createErrorTypeGuard<Format.Errors.UnsupportedConstantError>(
    "UnsupportedConstantError"
  );
export const UnsupportedConstantError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UnsupportedConstantError) => data.definition.name
);

export const isUnusedImmutableError =
  createErrorTypeGuard<Format.Errors.UnusedImmutableError>(
    "UnusedImmutableError"
  );
export const UnusedImmutableError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UnusedImmutableError) => data.kind
);

export const isUserDefinedTypeNotFoundError =
  createErrorTypeGuard<Format.Errors.UserDefinedTypeNotFoundError>(
    "UserDefinedTypeNotFoundError"
  );
export const UserDefinedTypeNotFoundError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UserDefinedTypeNotFoundError) => data.kind
);

/**
 * Internal-use errors
 */

export const isInternalFunctionInABIError =
  createErrorTypeGuard<Format.Errors.InternalFunctionInABIError>(
    "InternalFunctionInABIError"
  );
export const InternalFunctionInABIError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.InternalFunctionInABIError) => data.kind
);

export const isOverlongArrayOrStringStrictModeError =
  createErrorTypeGuard<Format.Errors.OverlongArrayOrStringStrictModeError>(
    "OverlongArrayOrStringStrictModeError"
  );
export const OverlongArrayOrStringStrictModeError = createPolymorphicComponent(
  (data: Format.Errors.OverlongArrayOrStringStrictModeError) =>
    // TODO
    data.lengthAsBN.toString()
);

/**
 * User-defined elementary types
 */

export const isContractErrorResult =
  createErrorResultTypeGuard<Format.Errors.ContractErrorResult>(
    typeGuardExprs.contract
  );
export const ContractErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.ContractErrorResult) =>
    isContractError(error) ? (
      <ContractError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isContractPaddingError =
  createErrorTypeGuard<Format.Errors.ContractPaddingError>(
    "ContractPaddingError"
  );
export const ContractPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ContractPaddingError) => data.raw
);

export const isEnumErrorResult =
  createErrorResultTypeGuard<Format.Errors.EnumErrorResult>(
    typeGuardExprs.enum
  );
export const EnumErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.EnumErrorResult) =>
    isEnumError(error) ? (
      <EnumError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isEnumNotFoundDecodingError =
  createErrorTypeGuard<Format.Errors.EnumNotFoundDecodingError>(
    "EnumNotFoundDecodingError"
  );
export const EnumNotFoundDecodingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumNotFoundDecodingError) => data.rawAsBN.toString()
);

export const isEnumOutOfRangeError =
  createErrorTypeGuard<Format.Errors.EnumOutOfRangeError>(
    "EnumOutOfRangeError"
  );
export const EnumOutOfRangeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumOutOfRangeError) => data.rawAsBN.toString()
);

export const isUserDefinedValueTypeErrorResult =
  createErrorResultTypeGuard<Format.Errors.UserDefinedValueTypeErrorResult>(
    typeGuardExprs.userDefinedValueType
  );
export const UserDefinedValueTypeErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.UserDefinedValueTypeErrorResult) =>
    isUserDefinedValueTypeError(error) ? (
      <UserDefinedValueTypeError data={error} />
    ) : (
      <GenericError data={error} />
    )
);

export const isWrappedError =
  createErrorTypeGuard<Format.Errors.WrappedError>("WrappedError");
export const WrappedError = createPolymorphicComponent(
  ({ error }: Format.Errors.WrappedError) => (
    <BuiltInValueErrorResult data={error} />
  )
);

/**
 * Other
 */

export const isOptionsErrorResult =
  createErrorResultTypeGuard<Format.Errors.OptionsErrorResult>(
    typeGuardExprs.options
  );
export const OptionsErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.OptionsErrorResult) => <GenericError data={error} />
);

/**
 * Undocumented
 */

export const isCodeNotSuppliedError =
  createErrorTypeGuard<Format.Errors.CodeNotSuppliedError>(
    "CodeNotSuppliedError"
  );
export const CodeNotSuppliedError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.CodeNotSuppliedError) => data.address
);

export const isStorageNotSuppliedError =
  createErrorTypeGuard<Format.Errors.StorageNotSuppliedError>(
    "StorageNotSuppliedError"
  );
export const StorageNotSuppliedError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.StorageNotSuppliedError) => data.slot.toString()
);
