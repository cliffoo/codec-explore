import inspect from "object-inspect";
import * as Codec from "@truffle/codec";

export interface InspectedProps {
  data: Codec.CalldataDecoding;
}

export function Inspected({ data }: InspectedProps): JSX.Element {
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
