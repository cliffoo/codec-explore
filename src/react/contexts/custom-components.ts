import { createContext, useContext } from "react";
import type Codec from "@truffle/codec";
import type { AbiArgumentsProps } from "../components/common/abi-arguments";
import type { CodeProps } from "../components/common/code";
import type { ContainerProps } from "../components/common/container";

export type CustomComponent<P> = (props: P) => JSX.Element;
export type CustomCodecComponent<D> = CustomComponent<{ data: D }>;
type CustomCodecComponents<T> = {
  [componentName in keyof T]: CustomCodecComponent<T[componentName]>;
};
type CustomCommonComponents<T> = {
  [componentName in keyof T]: CustomComponent<T[componentName]>;
};
export interface CustomComponentsContextValue {
  // @/react/components/codec
  codec?: Partial<
    CustomCodecComponents<{
      // /Format.Errors/interfaces/container
      ArrayErrorResult: Codec.Format.Errors.ArrayErrorResult;
      MappingErrorResult: Codec.Format.Errors.MappingErrorResult;
      StructErrorResult: Codec.Format.Errors.StructErrorResult;
      TupleErrorResult: Codec.Format.Errors.TupleErrorResult;
      // /Format.Errors/interfaces/elementary
      AddressErrorResult: Codec.Format.Errors.AddressErrorResult;
      AddressPaddingError: Codec.Format.Errors.AddressPaddingError;
      BoolErrorResult: Codec.Format.Errors.BoolErrorResult;
      BoolOutOfRangeError: Codec.Format.Errors.BoolOutOfRangeError;
      BoolPaddingError: Codec.Format.Errors.BoolPaddingError;
      BytesDynamicErrorResult: Codec.Format.Errors.BytesDynamicErrorResult;
      BytesPaddingError: Codec.Format.Errors.BytesPaddingError;
      BytesStaticErrorResult: Codec.Format.Errors.BytesStaticErrorResult;
      EnumPaddingError: Codec.Format.Errors.EnumPaddingError;
      FixedErrorResult: Codec.Format.Errors.FixedErrorResult;
      FixedPaddingError: Codec.Format.Errors.FixedPaddingError;
      IntErrorResult: Codec.Format.Errors.IntErrorResult;
      IntPaddingError: Codec.Format.Errors.IntPaddingError;
      StringErrorResult: Codec.Format.Errors.StringErrorResult;
      UfixedErrorResult: Codec.Format.Errors.UfixedErrorResult;
      UfixedPaddingError: Codec.Format.Errors.UfixedPaddingError;
      UintErrorResult: Codec.Format.Errors.UintErrorResult;
      UintPaddingError: Codec.Format.Errors.UintPaddingError;
      // /Format.Errors/interfaces/function
      DeployedFunctionInConstructorError: Codec.Format.Errors.DeployedFunctionInConstructorError;
      FunctionExternalErrorResult: Codec.Format.Errors.FunctionExternalErrorResult;
      FunctionExternalNonStackPaddingError: Codec.Format.Errors.FunctionExternalNonStackPaddingError;
      FunctionExternalStackPaddingError: Codec.Format.Errors.FunctionExternalStackPaddingError;
      FunctionInternalErrorResult: Codec.Format.Errors.FunctionInternalErrorResult;
      FunctionInternalPaddingError: Codec.Format.Errors.FunctionInternalPaddingError;
      MalformedInternalFunctionError: Codec.Format.Errors.MalformedInternalFunctionError;
      NoSuchInternalFunctionError: Codec.Format.Errors.NoSuchInternalFunctionError;
      // /Format.Errors/interfaces/generic
      CodeNotSuppliedError: Codec.Format.Errors.CodeNotSuppliedError;
      IndexedReferenceTypeError: Codec.Format.Errors.IndexedReferenceTypeError;
      OverlargePointersNotImplementedError: Codec.Format.Errors.OverlargePointersNotImplementedError;
      OverlongArraysAndStringsNotImplementedError: Codec.Format.Errors.OverlongArraysAndStringsNotImplementedError;
      ReadErrorBytes: Codec.Format.Errors.ReadErrorBytes;
      ReadErrorStack: Codec.Format.Errors.ReadErrorStack;
      ReadErrorStorage: Codec.Format.Errors.ReadErrorStorage;
      StorageNotSuppliedError: Codec.Format.Errors.StorageNotSuppliedError;
      UnsupportedConstantError: Codec.Format.Errors.UnsupportedConstantError;
      UnusedImmutableError: Codec.Format.Errors.UnusedImmutableError;
      UserDefinedTypeNotFoundError: Codec.Format.Errors.UserDefinedTypeNotFoundError;
      // /Format.Errors/interfaces/internal-use
      InternalFunctionInABIError: Codec.Format.Errors.InternalFunctionInABIError;
      OverlongArrayOrStringStrictModeError: Codec.Format.Errors.OverlongArrayOrStringStrictModeError;
      // /Format.Errors/interfaces/other
      OptionsErrorResult: Codec.Format.Errors.OptionsErrorResult;
      // /Format.Errors/interfaces/special-container
      MagicErrorResult: Codec.Format.Errors.MagicErrorResult;
      TypeErrorResult: Codec.Format.Errors.TypeErrorResult;
      // /Format.Errors/interfaces/user-defined-elementary
      ContractErrorResult: Codec.Format.Errors.ContractErrorResult;
      ContractPaddingError: Codec.Format.Errors.ContractPaddingError;
      EnumErrorResult: Codec.Format.Errors.EnumErrorResult;
      EnumNotFoundDecodingError: Codec.Format.Errors.EnumNotFoundDecodingError;
      EnumOutOfRangeError: Codec.Format.Errors.EnumOutOfRangeError;
      UserDefinedValueTypeErrorResult: Codec.Format.Errors.UserDefinedValueTypeErrorResult;
      WrappedError: Codec.Format.Errors.WrappedError;
      // /Format.Errors/types/container
      ArrayError: Codec.Format.Errors.ArrayError;
      MappingError: Codec.Format.Errors.MappingError;
      StructError: Codec.Format.Errors.StructError;
      TupleError: Codec.Format.Errors.TupleError;
      // /Format.Errors/types/elementary
      AddressError: Codec.Format.Errors.AddressError;
      BoolError: Codec.Format.Errors.BoolError;
      BuiltInValueErrorResult: Codec.Format.Errors.BuiltInValueErrorResult;
      BytesDynamicError: Codec.Format.Errors.BytesDynamicError;
      BytesErrorResult: Codec.Format.Errors.BytesErrorResult;
      BytesStaticError: Codec.Format.Errors.BytesStaticError;
      ElementaryErrorResult: Codec.Format.Errors.ElementaryErrorResult;
      FixedError: Codec.Format.Errors.FixedError;
      IntError: Codec.Format.Errors.IntError;
      StringError: Codec.Format.Errors.StringError;
      UfixedError: Codec.Format.Errors.UfixedError;
      UintError: Codec.Format.Errors.UintError;
      // /Format.Errors/types/function
      FunctionExternalError: Codec.Format.Errors.FunctionExternalError;
      FunctionInternalError: Codec.Format.Errors.FunctionInternalError;
      // /Format.Errors/types/general
      AbiErrorResult: Codec.Format.Errors.AbiErrorResult;
      DecoderError: Codec.Format.Errors.DecoderError;
      ErrorResult: Codec.Format.Errors.ErrorResult;
      // /Format.Errors/types/generic
      DynamicDataImplementationError: Codec.Format.Errors.DynamicDataImplementationError;
      ErrorForThrowing: Codec.Format.Errors.ErrorForThrowing;
      GenericError: Codec.Format.Errors.GenericError;
      ReadError: Codec.Format.Errors.ReadError;
      // /Format.Errors/types/internal-use
      InternalUseError: Codec.Format.Errors.InternalUseError;
      // /Format.Errors/types/other
      BytesLocation: Codec.Format.Errors.BytesLocation;
      OptionsError: Codec.Format.Errors.OptionsError;
      // /Format.Errors/types/special-container
      MagicError: Codec.Format.Errors.MagicError;
      TypeErrorUnion: Codec.Format.Errors.TypeErrorUnion;
      // /Format.Errors/types/user-defined-elementary
      ContractError: Codec.Format.Errors.ContractError;
      EnumError: Codec.Format.Errors.EnumError;
      UserDefinedValueTypeError: Codec.Format.Errors.UserDefinedValueTypeError;
      // /Format.Values/interfaces/container
      ArrayValue: Codec.Format.Values.ArrayValue;
      MappingValue: Codec.Format.Values.MappingValue;
      StructValue: Codec.Format.Values.StructValue;
      TupleValue: Codec.Format.Values.TupleValue;
      // /Format.Values/interfaces/elementary
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
      // /Format.Values/interfaces/function
      FunctionExternalValueInfoInvalid: Codec.Format.Values.FunctionExternalValueInfoInvalid;
      FunctionExternalValueInfoKnown: Codec.Format.Values.FunctionExternalValueInfoKnown;
      FunctionExternalValueInfoUnknown: Codec.Format.Values.FunctionExternalValueInfoUnknown;
      FunctionExternalValue: Codec.Format.Values.FunctionExternalValue;
      FunctionInternalValueInfoException: Codec.Format.Values.FunctionInternalValueInfoException;
      FunctionInternalValueInfoKnown: Codec.Format.Values.FunctionInternalValueInfoKnown;
      FunctionInternalValueInfoUnknown: Codec.Format.Values.FunctionInternalValueInfoUnknown;
      FunctionInternalValue: Codec.Format.Values.FunctionInternalValue;
      // /Format.Values/interfaces/other
      KeyValuePair: Codec.Format.Values.KeyValuePair;
      NameValuePair: Codec.Format.Values.NameValuePair;
      OptionallyNamedValue: Codec.Format.Values.OptionallyNamedValue;
      // /Format.Values/interfaces/special
      OptionsValue: Codec.Format.Values.OptionsValue;
      // /Format.Values/interfaces/special-container
      MagicValue: Codec.Format.Values.MagicValue;
      TypeValueContract: Codec.Format.Values.TypeValueContract;
      TypeValueEnum: Codec.Format.Values.TypeValueEnum;
      // /Format.Values/interfaces/user-defined-elementary
      ContractValueInfoKnown: Codec.Format.Values.ContractValueInfoKnown;
      ContractValueInfoUnknown: Codec.Format.Values.ContractValueInfoUnknown;
      ContractValue: Codec.Format.Values.ContractValue;
      EnumValue: Codec.Format.Values.EnumValue;
      UserDefinedValueTypeValue: Codec.Format.Values.UserDefinedValueTypeValue;
      // /Format.Values/types/container
      ArrayResult: Codec.Format.Values.ArrayResult;
      MappingResult: Codec.Format.Values.MappingResult;
      StructResult: Codec.Format.Values.StructResult;
      TupleResult: Codec.Format.Values.TupleResult;
      // /Format.Values/types/elementary
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
      // /Format.Values/types/function
      FunctionExternalResult: Codec.Format.Values.FunctionExternalResult;
      FunctionExternalValueInfo: Codec.Format.Values.FunctionExternalValueInfo;
      FunctionInternalResult: Codec.Format.Values.FunctionInternalResult;
      FunctionInternalValueInfo: Codec.Format.Values.FunctionInternalValueInfo;
      // /Format.Values/types/general
      AbiResult: Codec.Format.Values.AbiResult;
      AbiValue: Codec.Format.Values.AbiValue;
      ElementaryResult: Codec.Format.Values.ElementaryResult;
      ElementaryValue: Codec.Format.Values.ElementaryValue;
      Result: Codec.Format.Values.Result;
      Value: Codec.Format.Values.Value;
      // /Format.Values/types/other
      BuiltInValueValue: Codec.Format.Values.BuiltInValueValue;
      // /Format.Values/types/special
      OptionsResult: Codec.Format.Values.OptionsResult;
      // /Format.Values/types/special-container
      MagicResult: Codec.Format.Values.MagicResult;
      TypeResult: Codec.Format.Values.TypeResult;
      TypeValue: Codec.Format.Values.TypeValue;
      // /Format.Values/types/user-defined-elementary
      ContractResult: Codec.Format.Values.ContractResult;
      ContractValueInfo: Codec.Format.Values.ContractValueInfo;
      EnumResult: Codec.Format.Values.EnumResult;
      UserDefinedValueTypeResult: Codec.Format.Values.UserDefinedValueTypeResult;
      // /interfaces/interfaces
      Options: Codec.Options;
      // /interfaces/output
      AbiArgument: Codec.AbiArgument;
      AnonymousDecoding: Codec.AnonymousDecoding;
      BytecodeDecoding: Codec.BytecodeDecoding;
      ConstructorDecoding: Codec.ConstructorDecoding;
      EmptyFailureDecoding: Codec.EmptyFailureDecoding;
      EventDecoding: Codec.EventDecoding;
      FunctionDecoding: Codec.FunctionDecoding;
      MessageDecoding: Codec.MessageDecoding;
      RawReturnDecoding: Codec.RawReturnDecoding;
      ReturnDecoding: Codec.ReturnDecoding;
      RevertMessageDecoding: Codec.RevertMessageDecoding;
      SelfDestructDecoding: Codec.SelfDestructDecoding;
      StateVariable: Codec.StateVariable;
      UnknownBytecodeDecoding: Codec.UnknownBytecodeDecoding;
      UnknownCallDecoding: Codec.UnknownCallDecoding;
      UnknownCreationDecoding: Codec.UnknownCreationDecoding;
      CalldataDecoding: Codec.CalldataDecoding;
    }>
  >;
  // @/react/components/common
  common?: Partial<
    CustomCommonComponents<{
      AbiArguments: AbiArgumentsProps;
      Code: CodeProps;
      Container: ContainerProps;
    }>
  >;
}
export const CustomComponentsContext =
  createContext<CustomComponentsContextValue>({});
export const useCustomComponents = () => useContext(CustomComponentsContext);
