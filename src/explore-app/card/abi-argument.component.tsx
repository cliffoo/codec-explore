import type * as Codec from "@truffle/codec";
import { Result } from "@/components/Format/Values/aliases/general/result";

export interface AbiArgumentProps {
  data: Codec.AbiArgument;
}

export function AbiArgument({ data }: AbiArgumentProps): JSX.Element {
  return (
    <>
      {data.name ? `${data.name}: ` : ""}
      <Result data={data.value} />
    </>
  );
}
