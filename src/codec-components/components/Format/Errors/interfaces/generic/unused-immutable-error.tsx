import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UnusedImmutableError";

export const { UnusedImmutableError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnusedImmutableError) => data.kind
  )
};
