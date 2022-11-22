import type { ConstructorDecoding } from "@truffle/codec";

export interface ConstructorProps {
  data: ConstructorDecoding;
}

export function Constructor({ data }: ConstructorProps): JSX.Element {
  const contractName = data.class.typeName;
  const args = data.arguments.length > 0 ? "(...)" : "()";

  return (
    <code>
      new {contractName}
      {args}
    </code>
  );
}
