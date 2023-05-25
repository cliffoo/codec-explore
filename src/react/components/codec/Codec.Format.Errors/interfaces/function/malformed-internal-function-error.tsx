import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { MalformedInternalFunctionError } = createCodecComponent(
  "MalformedInternalFunctionError",
  (data: Format.Errors.MalformedInternalFunctionError) => (
    // TODO
    <span>{data.constructorProgramCounter.toString()}</span>
  )
);
