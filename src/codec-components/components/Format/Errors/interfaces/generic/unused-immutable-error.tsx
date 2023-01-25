import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UnusedImmutableError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UnusedImmutableError) => data.kind
);
