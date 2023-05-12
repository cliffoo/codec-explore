import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "ReadErrorStack";

export const { ReadErrorStack } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStack) => (
      <span>
        {data.from} to {data.to}
      </span>
    )
  )
};
