import inspect from "object-inspect";
import * as Codec from "@truffle/codec";

export function inspectCalldataDecoding(data: Codec.CalldataDecoding) {
  const inspector = new Codec.Export.CalldataDecodingInspector(data);
  return inspect(inspector, { quoteStyle: "double" });
}
