import { createContext, useContext } from "react";
import type Codec from "@truffle/codec";
import type { AbiArgumentsProps } from "@/react/components/common/abi-arguments";
import type { CodeProps } from "@/react/components/common/code";
import type { ContainerProps } from "@/react/components/common/container";

type CustomComponent<D> = (props: { data: D }) => JSX.Element;
export interface CustomComponentsContextValue {
  // @/react/components/codec
  codec?: Partial<{
    // /Codec.Format.Values/interfaces/container
    ArrayValue: CustomComponent<Codec.Format.Values.ArrayValue>;
    MappingValue: CustomComponent<Codec.Format.Values.MappingValue>;
    StructValue: CustomComponent<Codec.Format.Values.StructValue>;
    TupleValue: CustomComponent<Codec.Format.Values.TupleValue>;
    // /Codec.Format.Values/interfaces/elementary
    AddressValue: CustomComponent<Codec.Format.Values.AddressValue>;
    BoolValue: CustomComponent<Codec.Format.Values.BoolValue>;
    BytesDynamicValue: CustomComponent<Codec.Format.Values.BytesDynamicValue>;
    BytesStaticValue: CustomComponent<Codec.Format.Values.BytesStaticValue>;
    FixedValue: CustomComponent<Codec.Format.Values.FixedValue>;
    IntValue: CustomComponent<Codec.Format.Values.IntValue>;
    StringValueInfoMalformed: CustomComponent<Codec.Format.Values.StringValueInfoMalformed>;
    StringValueInfoValid: CustomComponent<Codec.Format.Values.StringValueInfoValid>;
    StringValue: CustomComponent<Codec.Format.Values.StringValue>;
    UfixedValue: CustomComponent<Codec.Format.Values.UfixedValue>;
    UintValue: CustomComponent<Codec.Format.Values.UintValue>;
    // /Codec.Format.Values/interfaces/function
    FunctionExternalValueInfoInvalid: CustomComponent<Codec.Format.Values.FunctionExternalValueInfoInvalid>;
    FunctionExternalValueInfoKnown: CustomComponent<Codec.Format.Values.FunctionExternalValueInfoKnown>;
    FunctionExternalValueInfoUnknown: CustomComponent<Codec.Format.Values.FunctionExternalValueInfoUnknown>;
    FunctionExternalValue: CustomComponent<Codec.Format.Values.FunctionExternalValue>;
    FunctionInternalValueInfoException: CustomComponent<Codec.Format.Values.FunctionInternalValueInfoException>;
    FunctionInternalValueInfoKnown: CustomComponent<Codec.Format.Values.FunctionInternalValueInfoKnown>;
    FunctionInternalValueInfoUnknown: CustomComponent<Codec.Format.Values.FunctionInternalValueInfoUnknown>;
    FunctionInternalValue: CustomComponent<Codec.Format.Values.FunctionInternalValue>;
    // /Codec.Format.Values/interfaces/other
    KeyValuePair: CustomComponent<Codec.Format.Values.KeyValuePair>;
    NameValuePair: CustomComponent<Codec.Format.Values.NameValuePair>;
    OptionallyNamedValue: CustomComponent<Codec.Format.Values.OptionallyNamedValue>;
    // /Codec.Format.Values/interfaces/special
    OptionsValue: CustomComponent<Codec.Format.Values.OptionsValue>;
    // /Codec.Format.Values/interfaces/special-container
    MagicValue: CustomComponent<Codec.Format.Values.MagicValue>;
    TypeValueContract: CustomComponent<Codec.Format.Values.TypeValueContract>;
    TypeValueEnum: CustomComponent<Codec.Format.Values.TypeValueEnum>;
    // /Codec.Format.Values/interfaces/user-defined-elementary
    ContractValueInfoKnown: CustomComponent<Codec.Format.Values.ContractValueInfoKnown>;
    ContractValueInfoUnknown: CustomComponent<Codec.Format.Values.ContractValueInfoUnknown>;
    ContractValue: CustomComponent<Codec.Format.Values.ContractValue>;
    EnumValue: CustomComponent<Codec.Format.Values.EnumValue>;
    UserDefinedValueTypeValue: CustomComponent<Codec.Format.Values.UserDefinedValueTypeValue>;
    // /Codec.Format.Values/types/container
    ArrayResult: CustomComponent<Codec.Format.Values.ArrayResult>;
    MappingResult: CustomComponent<Codec.Format.Values.MappingResult>;
    StructResult: CustomComponent<Codec.Format.Values.StructResult>;
    TupleResult: CustomComponent<Codec.Format.Values.TupleResult>;
    // /Codec.Format.Values/types/elementary
    AddressResult: CustomComponent<Codec.Format.Values.AddressResult>;
    BoolResult: CustomComponent<Codec.Format.Values.BoolResult>;
    BytesDynamicResult: CustomComponent<Codec.Format.Values.BytesDynamicResult>;
    BytesResult: CustomComponent<Codec.Format.Values.BytesResult>;
    BytesStaticResult: CustomComponent<Codec.Format.Values.BytesStaticResult>;
    BytesValue: CustomComponent<Codec.Format.Values.BytesValue>;
    FixedResult: CustomComponent<Codec.Format.Values.FixedResult>;
    IntResult: CustomComponent<Codec.Format.Values.IntResult>;
    StringResult: CustomComponent<Codec.Format.Values.StringResult>;
    StringValueInfo: CustomComponent<Codec.Format.Values.StringValueInfo>;
    UfixedResult: CustomComponent<Codec.Format.Values.UfixedResult>;
    UintResult: CustomComponent<Codec.Format.Values.UintResult>;
    // /Codec.Format.Values/types/function
    FunctionExternalResult: CustomComponent<Codec.Format.Values.FunctionExternalResult>;
    FunctionExternalValueInfo: CustomComponent<Codec.Format.Values.FunctionExternalValueInfo>;
    FunctionInternalResult: CustomComponent<Codec.Format.Values.FunctionInternalResult>;
    FunctionInternalValueInfo: CustomComponent<Codec.Format.Values.FunctionInternalValueInfo>;
    // /Codec.Format.Values/types/general
    AbiResult: CustomComponent<Codec.Format.Values.AbiResult>;
    AbiValue: CustomComponent<Codec.Format.Values.AbiValue>;
    ElementaryResult: CustomComponent<Codec.Format.Values.ElementaryResult>;
    ElementaryValue: CustomComponent<Codec.Format.Values.ElementaryValue>;
    Result: CustomComponent<Codec.Format.Values.Result>;
    Value: CustomComponent<Codec.Format.Values.Value>;
    // /Codec.Format.Values/types/other
    BuiltInValueValue: CustomComponent<Codec.Format.Values.BuiltInValueValue>;
    // /Codec.Format.Values/types/special
    OptionsResult: CustomComponent<Codec.Format.Values.OptionsResult>;
    // /Codec.Format.Values/types/special-container
    MagicResult: CustomComponent<Codec.Format.Values.MagicResult>;
    TypeResult: CustomComponent<Codec.Format.Values.TypeResult>;
    TypeValue: CustomComponent<Codec.Format.Values.TypeValue>;
    // /Codec.Format.Values/types/user-defined-elementary
    ContractResult: CustomComponent<Codec.Format.Values.ContractResult>;
    ContractValueInfo: CustomComponent<Codec.Format.Values.ContractValueInfo>;
    EnumResult: CustomComponent<Codec.Format.Values.EnumResult>;
    UserDefinedValueTypeResult: CustomComponent<Codec.Format.Values.UserDefinedValueTypeResult>;
    // /interfaces
    AbiArgument: CustomComponent<Codec.AbiArgument>;
    ConstructorDecoding: CustomComponent<Codec.ConstructorDecoding>;
    Options: CustomComponent<Codec.Options>;
  }>;
  // @/react/components/common
  common?: Partial<{
    AbiArguments: CustomComponent<AbiArgumentsProps>;
    Code: CustomComponent<CodeProps>;
    Container: CustomComponent<ContainerProps>;
  }>;
}
export const CustomComponentsContext =
  createContext<CustomComponentsContextValue>({});
export const useCustomComponents = () => useContext(CustomComponentsContext);
