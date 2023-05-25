import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { FunctionExternalValueInfoUnknown } = createCodecComponent(
  "FunctionExternalValueInfoUnknown",
  (data: Format.Values.FunctionExternalValueInfoUnknown) => (
    // TODO
    <span>{data.selector}</span>
  )
);
