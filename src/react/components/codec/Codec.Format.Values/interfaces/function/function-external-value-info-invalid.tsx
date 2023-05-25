import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { FunctionExternalValueInfoInvalid } = createCodecComponent(
  "FunctionExternalValueInfoInvalid",
  (data: Format.Values.FunctionExternalValueInfoInvalid) => (
    // TODO
    <span>{data.selector}</span>
  )
);
