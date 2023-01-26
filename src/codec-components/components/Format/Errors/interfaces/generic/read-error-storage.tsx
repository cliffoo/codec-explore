import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ReadErrorStorage";

export const { ReadErrorStorage } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStorage) => data.range.from.index.toString()
  )
};
