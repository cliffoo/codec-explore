import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "MalformedInternalFunctionError";

export const { MalformedInternalFunctionError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.MalformedInternalFunctionError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
