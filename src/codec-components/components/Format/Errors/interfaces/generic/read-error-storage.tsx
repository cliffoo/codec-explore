import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "ReadErrorStorage";

export const { ReadErrorStorage } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStorage) => (
      <Code>{data.range.from.index.toString()}</Code>
    )
  )
};
