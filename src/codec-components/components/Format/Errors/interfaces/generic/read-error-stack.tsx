import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "ReadErrorStack";

export const { ReadErrorStack } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStack) => (
      <Code>
        {data.from} to {data.to}
      </Code>
    )
  )
};
