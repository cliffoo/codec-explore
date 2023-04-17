import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "ReadErrorBytes";

export const { ReadErrorBytes } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ReadErrorBytes) => (
      // TODO
      <Code>
        {data.location}: {data.start} to {data.start + data.length}
      </Code>
    )
  )
};
