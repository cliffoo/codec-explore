import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionInternalValueInfoUnknown";

export const { FunctionInternalValueInfoUnknown } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoUnknown) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
