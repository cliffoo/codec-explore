import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "NoSuchInternalFunctionError";

export const { NoSuchInternalFunctionError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.NoSuchInternalFunctionError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
