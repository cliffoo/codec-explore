import type { Format } from "@truffle/codec";
import {
  // General categories
  ElementaryValue,
  Result,
  // Elementary types
  StringValueInfo,
  // Function types
  FunctionExternalValueInfo,
  FunctionInternalValueInfo,
  // User-defined elementary types
  ContractValueInfo,
  // Other
  BuiltInValueValue
} from "./aliases";
import { Options } from "../options";
import {
  createPolymorphicComponent,
  createValueTypeGuard,
  typeGuardExprs
} from "../utils";

/**
 * Elementary types
 */

export const isAddressValue = createValueTypeGuard<Format.Values.AddressValue>(
  typeGuardExprs.address
);
export const AddressValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.AddressValue) => value.asAddress
);

export const isBoolValue = createValueTypeGuard<Format.Values.BoolValue>(
  typeGuardExprs.bool
);
export const BoolValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BoolValue) => value.asBoolean.toString()
);

export const isBytesDynamicValue =
  createValueTypeGuard<Format.Values.BytesDynamicValue>(
    typeGuardExprs.bytesDynamic
  );
export const BytesDynamicValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BytesDynamicValue) => value.asHex
);

export const isBytesStaticValue =
  createValueTypeGuard<Format.Values.BytesStaticValue>(
    typeGuardExprs.bytesStatic
  );
export const BytesStaticValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BytesStaticValue) => value.asHex
);

export const isFixedValue = createValueTypeGuard<Format.Values.FixedValue>(
  typeGuardExprs.fixed
);
export const FixedValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.FixedValue) => value.asBig.toString()
);

export const isIntValue = createValueTypeGuard<Format.Values.IntValue>(
  typeGuardExprs.int
);
export const IntValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.IntValue) => value.asBN.toString()
);

export const isStringValue = createValueTypeGuard<Format.Values.StringValue>(
  typeGuardExprs.string
);
export const StringValue = createPolymorphicComponent(
  ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
);

export const isStringValueInfoMalformed = (
  data: Format.Values.StringValueInfo
): data is Format.Values.StringValueInfoMalformed => data.kind === "malformed";
export const StringValueInfoMalformed = createPolymorphicComponent(
  // TODO
  (data: Format.Values.StringValueInfoMalformed) => data.asHex
);

export const isStringValueInfoValid = (
  data: Format.Values.StringValueInfo
): data is Format.Values.StringValueInfoValid => data.kind === "valid";
export const StringValueInfoValid = createPolymorphicComponent(
  // TODO
  (data: Format.Values.StringValueInfoValid) => data.asString
);

export const isUfixedValue = createValueTypeGuard<Format.Values.UfixedValue>(
  typeGuardExprs.ufixed
);
export const UfixedValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.UfixedValue) => value.asBig.toString()
);

export const isUintValue = createValueTypeGuard<Format.Values.UintValue>(
  typeGuardExprs.uint
);
export const UintValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.UintValue) => value.asBN.toString()
);

/**
 * Container types
 */

export const isArrayValue = createValueTypeGuard<Format.Values.ArrayValue>(
  typeGuardExprs.array
);
export const ArrayValue = createPolymorphicComponent(
  ({ value }: Format.Values.ArrayValue) => (
    // TODO
    <>
      {value.map((result, index) => (
        <Result data={result} key={index} />
      ))}
    </>
  )
);

export const isMappingValue = createValueTypeGuard<Format.Values.MappingValue>(
  typeGuardExprs.mapping
);
export const MappingValue = createPolymorphicComponent(
  ({ value }: Format.Values.MappingValue) => (
    // TODO
    <>
      {value.map((keyValuePair, index) => (
        <KeyValuePair data={keyValuePair} key={index} />
      ))}
    </>
  )
);

export const isStructValue = createValueTypeGuard<Format.Values.StructValue>(
  typeGuardExprs.struct
);
export const StructValue = createPolymorphicComponent(
  ({ value }: Format.Values.StructValue) => (
    // TODO
    <>
      {value.map((nameValuePair, index) => (
        <NameValuePair data={nameValuePair} key={index} />
      ))}
    </>
  )
);

export const isTupleValue = createValueTypeGuard<Format.Values.TupleValue>(
  typeGuardExprs.tuple
);
export const TupleValue = createPolymorphicComponent(
  ({ value }: Format.Values.TupleValue) => (
    // TODO
    <>
      {value.map((optionallyNamedValue, index) => (
        <OptionallyNamedValue data={optionallyNamedValue} key={index} />
      ))}
    </>
  )
);

/**
 * Function types
 */

export const isFunctionExternalValue =
  createValueTypeGuard<Format.Values.FunctionExternalValue>(
    typeGuardExprs.functionExternal
  );
export const FunctionExternalValue = createPolymorphicComponent(
  ({ value }: Format.Values.FunctionExternalValue) => (
    <FunctionExternalValueInfo data={value} />
  )
);

export const isFunctionExternalValueInfoInvalid = (
  data: Format.Values.FunctionExternalValueInfo
): data is Format.Values.FunctionExternalValueInfoInvalid =>
  data.kind === "invalid";
export const FunctionExternalValueInfoInvalid = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoInvalid) => data.selector
);

export const isFunctionExternalValueInfoKnown = (
  data: Format.Values.FunctionExternalValueInfo
): data is Format.Values.FunctionExternalValueInfoKnown =>
  data.kind === "known";
export const FunctionExternalValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoKnown) => data.abi.name
);

export const isFunctionExternalValueInfoUnknown = (
  data: Format.Values.FunctionExternalValueInfo
): data is Format.Values.FunctionExternalValueInfoUnknown =>
  data.kind === "unknown";
export const FunctionExternalValueInfoUnknown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoUnknown) => data.selector
);

export const isFunctionInternalValue =
  createValueTypeGuard<Format.Values.FunctionInternalValue>(
    typeGuardExprs.functionInternal
  );
export const FunctionInternalValue = createPolymorphicComponent(
  ({ value }: Format.Values.FunctionInternalValue) => (
    <FunctionInternalValueInfo data={value} />
  )
);

export const isFunctionInternalValueInfoException = (
  data: Format.Values.FunctionInternalValueInfo
): data is Format.Values.FunctionInternalValueInfoException =>
  data.kind === "exception";
export const FunctionInternalValueInfoException = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfoException) =>
    // TODO
    data.constructorProgramCounter.toString()
);

export const isFunctionInternalValueInfoKnown = (
  data: Format.Values.FunctionInternalValueInfo
): data is Format.Values.FunctionInternalValueInfoKnown =>
  data.kind === "function";
export const FunctionInternalValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionInternalValueInfoKnown) => data.name
);

export const isFunctionInternalValueInfoUnknown = (
  data: Format.Values.FunctionInternalValueInfo
): data is Format.Values.FunctionInternalValueInfoUnknown =>
  data.kind === "unknown";
export const FunctionInternalValueInfoUnknown = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfoUnknown) =>
    // TODO
    data.constructorProgramCounter.toString()
);

/**
 * Special container types (debugger-only)
 */

export const isMagicValue = createValueTypeGuard<Format.Values.MagicValue>(
  typeGuardExprs.magic
);
export const MagicValue = createPolymorphicComponent(
  ({ value }: Format.Values.MagicValue) => (
    // TODO
    <>
      {Object.values(value).map((result, index) => (
        <Result data={result} key={index} />
      ))}
    </>
  )
);

export const isTypeValueContract =
  createValueTypeGuard<Format.Values.TypeValueContract>(
    typeGuardExprs.typeContract
  );
export const TypeValueContract = createPolymorphicComponent(
  ({ value }: Format.Values.TypeValueContract) => (
    // TODO
    <>
      {value.map((nameValuePair, index) => (
        <NameValuePair data={nameValuePair} key={index} />
      ))}
    </>
  )
);

export const isTypeValueEnum =
  createValueTypeGuard<Format.Values.TypeValueEnum>(typeGuardExprs.typeEnum);
export const TypeValueEnum = createPolymorphicComponent(
  ({ value }: Format.Values.TypeValueEnum) => (
    // TODO
    <>
      {value.map((enumValue, index) => (
        <EnumValue data={enumValue} key={index} />
      ))}
    </>
  )
);

/**
 * Special types (encoder-only)
 */

export const isOptionsValue = createValueTypeGuard<Format.Values.OptionsValue>(
  typeGuardExprs.options
);
export const OptionsValue = createPolymorphicComponent(
  ({ value }: Format.Values.OptionsValue) => <Options data={value} />
);

/**
 * User-defined elementary types
 */

export const isContractValue =
  createValueTypeGuard<Format.Values.ContractValue>(typeGuardExprs.contract);
export const ContractValue = createPolymorphicComponent(
  ({ value }: Format.Values.ContractValue) => <ContractValueInfo data={value} />
);

export const isContractValueInfoKnown = (
  data: Format.Values.ContractValueInfo
): data is Format.Values.ContractValueInfoKnown => data.kind === "known";
export const ContractValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.ContractValueInfoKnown) => data.address
);

export const isContractValueInfoUnknown = (
  data: Format.Values.ContractValueInfo
): data is Format.Values.ContractValueInfoUnknown => data.kind === "unknown";
export const ContractValueInfoUnknown = createPolymorphicComponent(
  (data: Format.Values.ContractValueInfoUnknown) => data.address
);

export const isEnumValue = createValueTypeGuard<Format.Values.EnumValue>(
  typeGuardExprs.enum
);
export const EnumValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.EnumValue) => value.name
);

export const isUserDefinedValueTypeValue =
  createValueTypeGuard<Format.Values.UserDefinedValueTypeValue>(
    typeGuardExprs.userDefinedValueType
  );
export const UserDefinedValueTypeValue = createPolymorphicComponent(
  ({ value }: Format.Values.UserDefinedValueTypeValue) => (
    <BuiltInValueValue data={value} />
  )
);

/**
 * Other
 */

// No type guard for KeyValuePair
export const KeyValuePair = createPolymorphicComponent(
  ({ key, value }: Format.Values.KeyValuePair) => (
    // TODO
    <>
      <ElementaryValue data={key} />: <Result data={value} />
    </>
  )
);

// No type guard for NameValuePair
export const NameValuePair = createPolymorphicComponent(
  ({ name, value }: Format.Values.NameValuePair) => (
    // TODO
    <>
      {name}: <Result data={value} />
    </>
  )
);

// No type guard for OptionallyNamedValue
export const OptionallyNamedValue = createPolymorphicComponent(
  ({ name, value }: Format.Values.OptionallyNamedValue) => (
    // TODO
    <>
      {name || "<no-name>"}: <Result data={value} />
    </>
  )
);
