import type { ConstructorDecoding } from "@truffle/codec";

export interface ConstructorProps {
  data: ConstructorDecoding;
}

export function Constructor({ data }: ConstructorProps): JSX.Element {
  const contractName = data.class.typeName;

  return <code>new {contractName}</code>;
}
