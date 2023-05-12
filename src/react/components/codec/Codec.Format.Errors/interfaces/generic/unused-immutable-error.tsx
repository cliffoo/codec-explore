import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "UnusedImmutableError";

export const { UnusedImmutableError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnusedImmutableError) => <span>{data.kind}</span>
  )
};
