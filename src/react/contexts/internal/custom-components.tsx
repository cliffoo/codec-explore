import { createContext, useContext } from "react";
import type Codec from "@truffle/codec";
import type { AbiArgumentsProps } from "@/react/components/common/abi-arguments";
import type { CodeProps } from "@/react/components/common/code";
import type { ContainerProps } from "@/react/components/common/container";

type CustomComponent<D> = (props: { data: D }) => JSX.Element;
type CustomComponents<T> = {
  [componentName in keyof T]: CustomComponent<T[componentName]>;
};
export interface CustomComponentsContextValue {
  // @/react/components/codec
  codec?: Partial<
    CustomComponents<{
      // /Codec.Format.Values/interfaces/container
      ArrayValue: Codec.Format.Values.ArrayValue;
      MappingValue: Codec.Format.Values.MappingValue;
      StructValue: Codec.Format.Values.StructValue;
      TupleValue: Codec.Format.Values.TupleValue;
      // /Codec.Format.Values/interfaces/elementary
      AddressValue: Codec.Format.Values.AddressValue;
      BoolValue: Codec.Format.Values.BoolValue;
      BytesDynamicValue: Codec.Format.Values.BytesDynamicValue;
      BytesStaticValue: Codec.Format.Values.BytesStaticValue;
      FixedValue: Codec.Format.Values.FixedValue;
      IntValue: Codec.Format.Values.IntValue;
      StringValueInfoMalformed: Codec.Format.Values.StringValueInfoMalformed;
      StringValueInfoValid: Codec.Format.Values.StringValueInfoValid;
      StringValue: Codec.Format.Values.StringValue;
      UfixedValue: Codec.Format.Values.UfixedValue;
      UintValue: Codec.Format.Values.UintValue;
      // /Codec.Format.Values/interfaces/function
      FunctionExternalValueInfoInvalid: Codec.Format.Values.FunctionExternalValueInfoInvalid;
      FunctionExternalValueInfoKnown: Codec.Format.Values.FunctionExternalValueInfoKnown;
      FunctionExternalValueInfoUnknown: Codec.Format.Values.FunctionExternalValueInfoUnknown;
      FunctionExternalValue: Codec.Format.Values.FunctionExternalValue;
      FunctionInternalValueInfoException: Codec.Format.Values.FunctionInternalValueInfoException;
      FunctionInternalValueInfoKnown: Codec.Format.Values.FunctionInternalValueInfoKnown;
      FunctionInternalValueInfoUnknown: Codec.Format.Values.FunctionInternalValueInfoUnknown;
      FunctionInternalValue: Codec.Format.Values.FunctionInternalValue;
      // /Codec.Format.Values/interfaces/other
      KeyValuePair: Codec.Format.Values.KeyValuePair;
      NameValuePair: Codec.Format.Values.NameValuePair;
      OptionallyNamedValue: Codec.Format.Values.OptionallyNamedValue;
      // /Codec.Format.Values/interfaces/special
      OptionsValue: Codec.Format.Values.OptionsValue;
      // /Codec.Format.Values/interfaces/special-container
      MagicValue: Codec.Format.Values.MagicValue;
      TypeValueContract: Codec.Format.Values.TypeValueContract;
      TypeValueEnum: Codec.Format.Values.TypeValueEnum;
      // /Codec.Format.Values/interfaces/user-defined-elementary
      ContractValueInfoKnown: Codec.Format.Values.ContractValueInfoKnown;
      ContractValueInfoUnknown: Codec.Format.Values.ContractValueInfoUnknown;
      ContractValue: Codec.Format.Values.ContractValue;
      EnumValue: Codec.Format.Values.EnumValue;
      UserDefinedValueTypeValue: Codec.Format.Values.UserDefinedValueTypeValue;
      // /Codec.Format.Values/types/container
      ArrayResult: Codec.Format.Values.ArrayResult;
      MappingResult: Codec.Format.Values.MappingResult;
      StructResult: Codec.Format.Values.StructResult;
      TupleResult: Codec.Format.Values.TupleResult;
      // /Codec.Format.Values/types/elementary
      AddressResult: Codec.Format.Values.AddressResult;
      BoolResult: Codec.Format.Values.BoolResult;
      BytesDynamicResult: Codec.Format.Values.BytesDynamicResult;
      BytesResult: Codec.Format.Values.BytesResult;
      BytesStaticResult: Codec.Format.Values.BytesStaticResult;
      BytesValue: Codec.Format.Values.BytesValue;
      FixedResult: Codec.Format.Values.FixedResult;
      IntResult: Codec.Format.Values.IntResult;
      StringResult: Codec.Format.Values.StringResult;
      StringValueInfo: Codec.Format.Values.StringValueInfo;
      UfixedResult: Codec.Format.Values.UfixedResult;
      UintResult: Codec.Format.Values.UintResult;
      // /Codec.Format.Values/types/function
      FunctionExternalResult: Codec.Format.Values.FunctionExternalResult;
      FunctionExternalValueInfo: Codec.Format.Values.FunctionExternalValueInfo;
      FunctionInternalResult: Codec.Format.Values.FunctionInternalResult;
      FunctionInternalValueInfo: Codec.Format.Values.FunctionInternalValueInfo;
      // /Codec.Format.Values/types/general
      AbiResult: Codec.Format.Values.AbiResult;
      AbiValue: Codec.Format.Values.AbiValue;
      ElementaryResult: Codec.Format.Values.ElementaryResult;
      ElementaryValue: Codec.Format.Values.ElementaryValue;
      Result: Codec.Format.Values.Result;
      Value: Codec.Format.Values.Value;
      // /Codec.Format.Values/types/other
      BuiltInValueValue: Codec.Format.Values.BuiltInValueValue;
      // /Codec.Format.Values/types/special
      OptionsResult: Codec.Format.Values.OptionsResult;
      // /Codec.Format.Values/types/special-container
      MagicResult: Codec.Format.Values.MagicResult;
      TypeResult: Codec.Format.Values.TypeResult;
      TypeValue: Codec.Format.Values.TypeValue;
      // /Codec.Format.Values/types/user-defined-elementary
      ContractResult: Codec.Format.Values.ContractResult;
      ContractValueInfo: Codec.Format.Values.ContractValueInfo;
      EnumResult: Codec.Format.Values.EnumResult;
      UserDefinedValueTypeResult: Codec.Format.Values.UserDefinedValueTypeResult;
      // /interfaces/interfaces
      Options: Codec.Options;
      // /interfaces/output
      AbiArgument: Codec.AbiArgument;
      ConstructorDecoding: Codec.ConstructorDecoding;
    }>
  >;
  // @/react/components/common
  common?: Partial<
    CustomComponents<{
      AbiArguments: AbiArgumentsProps;
      Code: CodeProps;
      Container: ContainerProps;
    }>
  >;
}
export const CustomComponentsContext =
  createContext<CustomComponentsContextValue>({});
export const useCustomComponents = () => useContext(CustomComponentsContext);
