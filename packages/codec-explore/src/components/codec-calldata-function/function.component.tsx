import type { FunctionDecoding } from "@truffle/codec";
import { UintValue } from "@truffle/codec/dist/lib/format/elementary";

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
      if (arg.value.type.typeClass === "uint") {
        value = (arg.value as UintValue).value.asBN.toString();
      }
    }

    return (
      <span key={index} data-tooltip={`${type} ${name}`}>
        {value}
      </span>
    );
  });

  return (
    <code>
      {contractName}.{functionName}({args})
    </code>
  );
}
