import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const StringValueInfoMalformed = createPolymorphicComponent(
  // TODO
  (data: Format.Values.StringValueInfoMalformed) => data.asHex
);
