import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "ReadErrorBytes";

export const { ReadErrorBytes } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ReadErrorBytes) => (
      // TODO
      <span>
        {data.location}: {data.start} to {data.start + data.length}
      </span>
    )
  )
};
