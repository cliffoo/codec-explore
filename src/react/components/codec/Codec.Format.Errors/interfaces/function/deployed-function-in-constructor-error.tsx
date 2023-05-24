import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "DeployedFunctionInConstructorError";

export const { DeployedFunctionInConstructorError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.DeployedFunctionInConstructorError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
