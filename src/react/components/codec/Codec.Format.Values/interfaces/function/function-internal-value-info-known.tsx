import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { FunctionInternalValueInfoKnown } = createCodecComponent(
  "FunctionInternalValueInfoKnown",
  (data: Format.Values.FunctionInternalValueInfoKnown) => (
    // TODO
    <span>{data.name}</span>
  )
);
