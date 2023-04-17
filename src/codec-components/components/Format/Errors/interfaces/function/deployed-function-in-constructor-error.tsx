import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "DeployedFunctionInConstructorError";

export const { DeployedFunctionInConstructorError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.DeployedFunctionInConstructorError) => (
      // TODO
      <Code>{data.constructorProgramCounter.toString()}</Code>
    )
  )
};
