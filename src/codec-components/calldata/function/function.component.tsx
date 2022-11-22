import { Fragment } from "react";
import type { FunctionDecoding, Format } from "@truffle/codec";

export interface FunctionProps {
  data: FunctionDecoding;
}

export function Function({ data }: FunctionProps): JSX.Element {
  const contractName = data.class.typeName;
  const functionName = data.abi.name;
  const args = data.arguments.map((arg, index) => {
    const { type, name } = data.abi.inputs[index];
    let value;
    if (arg.value.kind === "value") {
      switch (arg.value.type.typeClass) {
        case "uint":
          value = (arg.value as Format.Values.UintValue).value.asBN.toString();
          break;
        case "int":
          value = (arg.value as Format.Values.IntValue).value.asBN.toString();
          break;
        case "bool":
          value = (
            arg.value as Format.Values.BoolValue
          ).value.asBoolean.toString();
          break;
        case "bytes":
          value = (arg.value as Format.Values.BytesValue).value.asHex;
          break;
        case "address":
          value = (arg.value as Format.Values.AddressValue).value.asAddress;
          break;
        case "fixed":
          value = (arg.value as Format.Values.FixedValue).value.asBig;
          break;
        case "ufixed":
          value = (arg.value as Format.Values.UfixedValue).value.asBig;
          break;
        case "string":
          const isValid =
            (arg.value as Format.Values.StringValue).value.kind === "valid";
          if (isValid) {
            value = (arg.value.value as Format.Values.StringValueInfoValid)
              .asString;
          } else {
            value = (arg.value.value as Format.Values.StringValueInfoMalformed)
              .asHex;
          }
          break;
        case "array":
          value = "[...]";
          break;
        case "function":
          value = "externalFunctionValue";
          break;
        case "tuple":
          value = "(...)";
          break;
        default:
          value = "?";
      }
    }

    return (
      <Fragment key={index}>
        <span data-tooltip={`${type} ${name}`}>{value}</span>
        {index < data.arguments.length - 1 ? ", " : ""}
      </Fragment>
    );
  });

  return (
    <code>
      {contractName}.{functionName}({args})
    </code>
  );
}
