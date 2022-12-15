import type { Format } from "@truffle/codec";
import {
  // Elementary types
  isAddressValue,
  AddressValue,
  isBoolValue,
  BoolValue,
  isBytesDynamicValue,
  BytesDynamicValue,
  isBytesStaticValue,
  BytesStaticValue,
  isFixedValue,
  FixedValue,
  isIntValue,
  IntValue,
  isStringValue,
  StringValue,
  StringValueInfoMalformed,
  isStringValueInfoValid,
  StringValueInfoValid,
  isUfixedValue,
  UfixedValue,
  isUintValue,
  UintValue,
  // Container types
  isArrayValue,
  ArrayValue,
  isMappingValue,
  MappingValue,
  isStructValue,
  StructValue,
  isTupleValue,
  TupleValue,
  // Function types
  isFunctionExternalValue,
  FunctionExternalValue,
  isFunctionExternalValueInfoInvalid,
  FunctionExternalValueInfoInvalid,
  isFunctionExternalValueInfoKnown,
  FunctionExternalValueInfoKnown,
  FunctionExternalValueInfoUnknown,
  isFunctionInternalValue,
  FunctionInternalValue,
  isFunctionInternalValueInfoException,
  FunctionInternalValueInfoException,
  isFunctionInternalValueInfoKnown,
  FunctionInternalValueInfoKnown,
  FunctionInternalValueInfoUnknown,
  // Special container types (debugger-only)
  isMagicValue,
  MagicValue,
  isTypeValueContract,
  TypeValueContract,
  TypeValueEnum,
  // Special type (encoder-only)
  isOptionsValue,
  OptionsValue,
  // User-defined elementary types
  isContractValue,
  ContractValue,
  isContractValueInfoKnown,
  ContractValueInfoKnown,
  ContractValueInfoUnknown,
  isEnumValue,
  EnumValue,
  isUserDefinedValueTypeValue,
  UserDefinedValueTypeValue
} from "./interfaces";
import {
  // Elementary types
  isAddressErrorResult,
  AddressErrorResult,
  isBoolErrorResult,
  BoolErrorResult,
  isBytesDynamicErrorResult,
  BytesDynamicErrorResult,
  isBytesStaticErrorResult,
  BytesStaticErrorResult,
  isFixedErrorResult,
  FixedErrorResult,
  isIntErrorResult,
  IntErrorResult,
  isStringErrorResult,
  StringErrorResult,
  isUfixedErrorResult,
  UfixedErrorResult,
  isUintErrorResult,
  UintErrorResult,
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
  isFunctionExternalErrorResult,
  FunctionExternalErrorResult,
  isFunctionInternalErrorResult,
  FunctionInternalErrorResult,
  // Special container types (debugger-only)
  isMagicErrorResult,
  MagicErrorResult,
  isTypeErrorResult,
  TypeErrorResult,
  // User-defined elementary types
  isContractErrorResult,
  ContractErrorResult,
  isEnumErrorResult,
  EnumErrorResult,
  isUserDefinedValueTypeErrorResult,
  UserDefinedValueTypeErrorResult,
  // Other
  isOptionsErrorResult,
  OptionsErrorResult
} from "../errors";
import {
  createPolymorphicComponent,
  createResultTypeGuard,
  createValueTypeGuard,
  typeGuardExprs
} from "../utils";

/**
 * General categories
 */

export const isAbiValue = (
  data: Format.Values.Value
): data is Format.Values.AbiValue =>
  isUintValue(data) ||
  isIntValue(data) ||
  isBoolValue(data) ||
  isBytesValue(data) ||
  isAddressValue(data) ||
  isFixedValue(data) ||
  isUfixedValue(data) ||
  isStringValue(data) ||
  isArrayValue(data) ||
  isFunctionExternalValue(data) ||
  isTupleValue(data);
export const AbiValue = createPolymorphicComponent(
  (data: Format.Values.AbiValue) =>
    isUintValue(data) ? (
      <UintValue data={data} />
    ) : isIntValue(data) ? (
      <IntValue data={data} />
    ) : isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : isBytesValue(data) ? (
      <BytesValue data={data} />
    ) : isAddressValue(data) ? (
      <AddressValue data={data} />
    ) : isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : isUfixedValue(data) ? (
      <UfixedValue data={data} />
    ) : isStringValue(data) ? (
      <StringValue data={data} />
    ) : isArrayValue(data) ? (
      <ArrayValue data={data} />
    ) : isFunctionExternalValue(data) ? (
      <FunctionExternalValue data={data} />
    ) : (
      <TupleValue data={data} />
    )
);

export const isElementaryValue = (
  data: Format.Values.Value
): data is Format.Values.ElementaryValue =>
  isUintValue(data) ||
  isIntValue(data) ||
  isBoolValue(data) ||
  isBytesValue(data) ||
  isAddressValue(data) ||
  isStringValue(data) ||
  isFixedValue(data) ||
  isUfixedValue(data) ||
  isEnumValue(data) ||
  isUserDefinedValueTypeValue(data) ||
  isContractValue(data);
export const ElementaryValue = createPolymorphicComponent(
  (data: Format.Values.ElementaryValue) =>
    isUintValue(data) ? (
      <UintValue data={data} />
    ) : isIntValue(data) ? (
      <IntValue data={data} />
    ) : isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : isBytesValue(data) ? (
      <BytesValue data={data} />
    ) : isAddressValue(data) ? (
      <AddressValue data={data} />
    ) : isStringValue(data) ? (
      <StringValue data={data} />
    ) : isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : isUfixedValue(data) ? (
      <UfixedValue data={data} />
    ) : isEnumValue(data) ? (
      <EnumValue data={data} />
    ) : isUserDefinedValueTypeValue(data) ? (
      <UserDefinedValueTypeValue data={data} />
    ) : (
      <ContractValue data={data} />
    )
);

// No type guard for Result
export const Result = createPolymorphicComponent((data: Format.Values.Result) =>
  isElementaryResult(data) ? (
    <ElementaryResult data={data} />
  ) : isArrayResult(data) ? (
    <ArrayResult data={data} />
  ) : isMappingResult(data) ? (
    <MappingResult data={data} />
  ) : isStructResult(data) ? (
    <StructResult data={data} />
  ) : isTupleResult(data) ? (
    <TupleResult data={data} />
  ) : isMagicResult(data) ? (
    <MagicResult data={data} />
  ) : isTypeResult(data) ? (
    <TypeResult data={data} />
  ) : isFunctionExternalResult(data) ? (
    <FunctionExternalResult data={data} />
  ) : isFunctionInternalResult(data) ? (
    <FunctionInternalResult data={data} />
  ) : (
    <OptionsResult data={data} />
  )
);

// No type guard for Value
export const Value = createPolymorphicComponent((data: Format.Values.Value) =>
  isElementaryValue(data) ? (
    <ElementaryValue data={data} />
  ) : isArrayValue(data) ? (
    <ArrayValue data={data} />
  ) : isMappingValue(data) ? (
    <MappingValue data={data} />
  ) : isStructValue(data) ? (
    <StructValue data={data} />
  ) : isTupleValue(data) ? (
    <TupleValue data={data} />
  ) : isMagicValue(data) ? (
    <MagicValue data={data} />
  ) : isTypeValue(data) ? (
    <TypeValue data={data} />
  ) : isFunctionExternalValue(data) ? (
    <FunctionExternalValue data={data} />
  ) : isFunctionInternalValue(data) ? (
    <FunctionInternalValue data={data} />
  ) : (
    <OptionsValue data={data} />
  )
);

/**
 * Elementary types
 */

export const isAddressResult =
  createResultTypeGuard<Format.Values.AddressResult>([
    isAddressValue,
    isAddressErrorResult
  ]);
export const AddressResult = createPolymorphicComponent(
  (data: Format.Values.AddressResult) =>
    isAddressValue(data) ? (
      <AddressValue data={data} />
    ) : (
      <AddressErrorResult data={data} />
    )
);

export const isBoolResult = createResultTypeGuard<Format.Values.BoolResult>([
  isBoolValue,
  isBoolErrorResult
]);
export const BoolResult = createPolymorphicComponent(
  (data: Format.Values.BoolResult) =>
    isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : (
      <BoolErrorResult data={data} />
    )
);

export const isBytesDynamicResult =
  createResultTypeGuard<Format.Values.BytesDynamicResult>([
    isBytesDynamicValue,
    isBytesDynamicErrorResult
  ]);
export const BytesDynamicResult = createPolymorphicComponent(
  (data: Format.Values.BytesDynamicResult) =>
    isBytesDynamicValue(data) ? (
      <BytesDynamicValue data={data} />
    ) : (
      <BytesDynamicErrorResult data={data} />
    )
);

export const isBytesStaticResult =
  createResultTypeGuard<Format.Values.BytesStaticResult>([
    isBytesStaticValue,
    isBytesStaticErrorResult
  ]);
export const BytesStaticResult = createPolymorphicComponent(
  (data: Format.Values.BytesStaticResult) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesStaticErrorResult data={data} />
    )
);

export const isBytesResult = createResultTypeGuard<Format.Values.BytesResult>([
  isBytesStaticResult,
  isBytesDynamicResult
]);
export const BytesResult = createPolymorphicComponent(
  (data: Format.Values.BytesResult) =>
    isBytesStaticResult(data) ? (
      <BytesStaticResult data={data} />
    ) : (
      <BytesDynamicResult data={data} />
    )
);

export const isBytesValue = createValueTypeGuard<Format.Values.BytesValue>(
  typeGuardExprs.bytes
);
export const BytesValue = createPolymorphicComponent(
  (data: Format.Values.BytesValue) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesDynamicValue data={data} />
    )
);

export const isFixedResult = createResultTypeGuard<Format.Values.FixedResult>([
  isFixedValue,
  isFixedErrorResult
]);
export const FixedResult = createPolymorphicComponent(
  (data: Format.Values.FixedResult) =>
    isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : (
      <FixedErrorResult data={data} />
    )
);

export const isIntResult = createResultTypeGuard<Format.Values.IntResult>([
  isIntValue,
  isIntErrorResult
]);
export const IntResult = createPolymorphicComponent(
  (data: Format.Values.IntResult) =>
    isIntValue(data) ? <IntValue data={data} /> : <IntErrorResult data={data} />
);

export const isStringResult = createResultTypeGuard<Format.Values.StringResult>(
  [isStringValue, isStringErrorResult]
);
export const StringResult = createPolymorphicComponent(
  (data: Format.Values.StringResult) =>
    isStringValue(data) ? (
      <StringValue data={data} />
    ) : (
      <StringErrorResult data={data} />
    )
);

// No type guard for StringValueInfo
export const StringValueInfo = createPolymorphicComponent(
  (data: Format.Values.StringValueInfo) =>
    isStringValueInfoValid(data) ? (
      <StringValueInfoValid data={data} />
    ) : (
      <StringValueInfoMalformed data={data} />
    )
);

export const isUfixedResult = createResultTypeGuard<Format.Values.UfixedResult>(
  [isUfixedValue, isUfixedErrorResult]
);
export const UfixedResult = createPolymorphicComponent(
  (data: Format.Values.UfixedResult) =>
    isUfixedValue(data) ? (
      <UfixedValue data={data} />
    ) : (
      <UfixedErrorResult data={data} />
    )
);

export const isUintResult = createResultTypeGuard<Format.Values.UintResult>([
  isUintValue,
  isUintErrorResult
]);
export const UintResult = createPolymorphicComponent(
  (data: Format.Values.UintResult) =>
    isUintValue(data) ? (
      <UintValue data={data} />
    ) : (
      <UintErrorResult data={data} />
    )
);

/**
 * Container types
 */

export const isArrayResult = createResultTypeGuard<Format.Values.ArrayResult>([
  isArrayValue,
  isArrayErrorResult
]);
export const ArrayResult = createPolymorphicComponent(
  (data: Format.Values.ArrayResult) =>
    isArrayValue(data) ? (
      <ArrayValue data={data} />
    ) : (
      <ArrayErrorResult data={data} />
    )
);

export const isMappingResult =
  createResultTypeGuard<Format.Values.MappingResult>([
    isMappingValue,
    isMappingErrorResult
  ]);
export const MappingResult = createPolymorphicComponent(
  (data: Format.Values.MappingResult) =>
    isMappingValue(data) ? (
      <MappingValue data={data} />
    ) : (
      <MappingErrorResult data={data} />
    )
);

export const isStructResult = createResultTypeGuard<Format.Values.StructResult>(
  [isStructValue, isStructErrorResult]
);
export const StructResult = createPolymorphicComponent(
  (data: Format.Values.StructResult) =>
    isStructValue(data) ? (
      <StructValue data={data} />
    ) : (
      <StructErrorResult data={data} />
    )
);

export const isTupleResult = createResultTypeGuard<Format.Values.TupleResult>([
  isTupleValue,
  isTupleErrorResult
]);
export const TupleResult = createPolymorphicComponent(
  (data: Format.Values.TupleResult) =>
    isTupleValue(data) ? (
      <TupleValue data={data} />
    ) : (
      <TupleErrorResult data={data} />
    )
);

/**
 * Function types
 */

export const isFunctionExternalResult =
  createResultTypeGuard<Format.Values.FunctionExternalResult>([
    isFunctionExternalValue,
    isFunctionExternalErrorResult
  ]);
export const FunctionExternalResult = createPolymorphicComponent(
  (data: Format.Values.FunctionExternalResult) =>
    isFunctionExternalValue(data) ? (
      <FunctionExternalValue data={data} />
    ) : (
      <FunctionExternalErrorResult data={data} />
    )
);

// No type guard for FunctionExternalValueInfo
export const FunctionExternalValueInfo = createPolymorphicComponent(
  (data: Format.Values.FunctionExternalValueInfo) =>
    isFunctionExternalValueInfoKnown(data) ? (
      <FunctionExternalValueInfoKnown data={data} />
    ) : isFunctionExternalValueInfoInvalid(data) ? (
      <FunctionExternalValueInfoInvalid data={data} />
    ) : (
      <FunctionExternalValueInfoUnknown data={data} />
    )
);

export const isFunctionInternalResult =
  createResultTypeGuard<Format.Values.FunctionInternalResult>([
    isFunctionInternalValue,
    isFunctionInternalErrorResult
  ]);
export const FunctionInternalResult = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalResult) =>
    isFunctionInternalValue(data) ? (
      <FunctionInternalValue data={data} />
    ) : (
      <FunctionInternalErrorResult data={data} />
    )
);

// No type guard for FunctionInternalValueInfo
export const FunctionInternalValueInfo = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfo) =>
    isFunctionInternalValueInfoKnown(data) ? (
      <FunctionInternalValueInfoKnown data={data} />
    ) : isFunctionInternalValueInfoException(data) ? (
      <FunctionInternalValueInfoException data={data} />
    ) : (
      <FunctionInternalValueInfoUnknown data={data} />
    )
);

/**
 * Special container types (debugger-only)
 */

export const isMagicResult = createResultTypeGuard<Format.Values.MagicResult>([
  isMagicValue,
  isMagicErrorResult
]);
export const MagicResult = createPolymorphicComponent(
  (data: Format.Values.MagicResult) =>
    isMagicValue(data) ? (
      <MagicValue data={data} />
    ) : (
      <MagicErrorResult data={data} />
    )
);

export const isTypeValue = createValueTypeGuard<Format.Values.TypeValue>(
  typeGuardExprs.type
);
export const TypeValue = createPolymorphicComponent(
  (data: Format.Values.TypeValue) =>
    isTypeValueContract(data) ? (
      <TypeValueContract data={data} />
    ) : (
      <TypeValueEnum data={data} />
    )
);

export const isTypeResult = createResultTypeGuard<Format.Values.TypeResult>([
  isTypeValue,
  isTypeErrorResult
]);
export const TypeResult = createPolymorphicComponent(
  (data: Format.Values.TypeResult) =>
    isTypeValue(data) ? (
      <TypeValue data={data} />
    ) : (
      <TypeErrorResult data={data} />
    )
);

/**
 * Special types (encoder-only)
 */

export const isOptionsResult =
  createResultTypeGuard<Format.Values.OptionsResult>([
    isOptionsValue,
    isOptionsErrorResult
  ]);
export const OptionsResult = createPolymorphicComponent(
  (data: Format.Values.OptionsResult) =>
    isOptionsValue(data) ? (
      <OptionsValue data={data} />
    ) : (
      <OptionsErrorResult data={data} />
    )
);

/**
 * User-defined elementary types
 */

export const isContractResult =
  createResultTypeGuard<Format.Values.ContractResult>([
    isContractValue,
    isContractErrorResult
  ]);
export const ContractResult = createPolymorphicComponent(
  (data: Format.Values.ContractResult) =>
    isContractValue(data) ? (
      <ContractValue data={data} />
    ) : (
      <ContractErrorResult data={data} />
    )
);

// No type guard for ContractValueInfo
export const ContractValueInfo = createPolymorphicComponent(
  (data: Format.Values.ContractValueInfo) =>
    isContractValueInfoKnown(data) ? (
      <ContractValueInfoKnown data={data} />
    ) : (
      <ContractValueInfoUnknown data={data} />
    )
);

export const isEnumResult = createResultTypeGuard<Format.Values.EnumResult>([
  isEnumValue,
  isEnumErrorResult
]);
export const EnumResult = createPolymorphicComponent(
  (data: Format.Values.EnumResult) =>
    isEnumValue(data) ? (
      <EnumValue data={data} />
    ) : (
      <EnumErrorResult data={data} />
    )
);

export const isUserDefinedValueTypeResult =
  createResultTypeGuard<Format.Values.UserDefinedValueTypeResult>([
    isUserDefinedValueTypeValue,
    isUserDefinedValueTypeErrorResult
  ]);
export const UserDefinedValueTypeResult = createPolymorphicComponent(
  (data: Format.Values.UserDefinedValueTypeResult) =>
    isUserDefinedValueTypeValue(data) ? (
      <UserDefinedValueTypeValue data={data} />
    ) : (
      <UserDefinedValueTypeErrorResult data={data} />
    )
);

/**
 * Other
 */

export const isBuiltInValueValue = (
  data: Format.Values.Value
): data is Format.Values.BuiltInValueValue =>
  isUintValue(data) ||
  isIntValue(data) ||
  isBoolValue(data) ||
  isBytesStaticValue(data) ||
  isAddressValue(data) ||
  isFixedValue(data) ||
  isUfixedValue(data);
export const BuiltInValueValue = createPolymorphicComponent(
  (data: Format.Values.BuiltInValueValue) =>
    isUintValue(data) ? (
      <UintValue data={data} />
    ) : isIntValue(data) ? (
      <IntValue data={data} />
    ) : isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : isAddressValue(data) ? (
      <AddressValue data={data} />
    ) : isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : (
      <UfixedValue data={data} />
    )
);

/**
 * Re-ordered to avoid use-before-assign errors
 */

export const isAbiResult = createResultTypeGuard<Format.Values.AbiResult>([
  isUintResult,
  isIntResult,
  isBoolResult,
  isBytesResult,
  isAddressResult,
  isFixedResult,
  isUfixedResult,
  isStringResult,
  isArrayResult,
  isFunctionExternalResult,
  isTupleResult
]);
export const AbiResult = createPolymorphicComponent(
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
);

export const isElementaryResult =
  createResultTypeGuard<Format.Values.ElementaryResult>([
    isUintResult,
    isIntResult,
    isBoolResult,
    isBytesResult,
    isAddressResult,
    isStringResult,
    isFixedResult,
    isUfixedResult,
    isEnumResult,
    isUserDefinedValueTypeResult,
    isContractResult
  ]);
export const ElementaryResult = createPolymorphicComponent(
  (data: Format.Values.ElementaryResult) =>
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
    ) : isStringResult(data) ? (
      <StringResult data={data} />
    ) : isFixedResult(data) ? (
      <FixedResult data={data} />
    ) : isUfixedResult(data) ? (
      <UfixedResult data={data} />
    ) : isEnumResult(data) ? (
      <EnumResult data={data} />
    ) : isUserDefinedValueTypeResult(data) ? (
      <UserDefinedValueTypeResult data={data} />
    ) : (
      <ContractResult data={data} />
    )
);
