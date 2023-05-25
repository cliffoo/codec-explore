import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { FunctionInternalValueInfoUnknown } = createCodecComponent(
  "FunctionInternalValueInfoUnknown",
  (data: Format.Values.FunctionInternalValueInfoUnknown) => (
    // TODO
    <span>{data.constructorProgramCounter.toString()}</span>
  )
);
