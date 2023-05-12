import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "DeployedFunctionInConstructorError";

export const { DeployedFunctionInConstructorError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.DeployedFunctionInConstructorError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
