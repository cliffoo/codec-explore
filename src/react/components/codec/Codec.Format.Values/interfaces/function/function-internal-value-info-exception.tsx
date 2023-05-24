import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionInternalValueInfoException";

export const { FunctionInternalValueInfoException } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoException) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
