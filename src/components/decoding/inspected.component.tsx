import inspect from "object-inspect";
import * as Codec from "@truffle/codec";

import { DecodingProps } from "./decoding.component";

export function Inspected({ data }: DecodingProps): JSX.Element {
  const inspected = inspect(new Codec.Export.CalldataDecodingInspector(data), {
    quoteStyle: "double"
  });

  return (
    <div>
      <h3>util.inspect</h3>
      <code>{inspected}</code>
    </div>
  );
}
