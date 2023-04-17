import { AbiArgument } from "@/components/abi-argument";
import { Container } from "@/common/container";

export interface AbiArgumentsProps {
  data: Codec.AbiArgument[];
}

export function AbiArguments({ data }: AbiArgumentsProps): JSX.Element {
  return (
    <Container indentOnWrap={false}>
      {data.map((abiArgumentData, index) => (
        <div key={index}>
          <AbiArgument data={abiArgumentData} />
          {index !== data.length - 1 && <code>,&nbsp;</code>}
        </div>
      ))}
    </Container>
  );
}
