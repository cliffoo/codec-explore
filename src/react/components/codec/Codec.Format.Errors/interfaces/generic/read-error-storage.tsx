import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "ReadErrorStorage";

export const { ReadErrorStorage } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStorage) => (
      <span>{data.range.from.index.toString()}</span>
    )
  )
};
