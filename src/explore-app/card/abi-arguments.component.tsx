import { Fragment } from "react";
import type * as Codec from "@truffle/codec";
import { AbiArgument } from "./abi-argument.component";

export interface AbiArgumentsProps {
  data: Codec.AbiArgument[];
}

export function AbiArguments({ data }: AbiArgumentsProps): JSX.Element {
  return (
    <Fragment>
      {"("}
      {data.map((abiArgumentData, index) => (
        <Fragment key={index}>
          <AbiArgument data={abiArgumentData} />
          {index < data.length - 1 ? ", " : ""}
        </Fragment>
      ))}
      {")"}
    </Fragment>
  );
}
