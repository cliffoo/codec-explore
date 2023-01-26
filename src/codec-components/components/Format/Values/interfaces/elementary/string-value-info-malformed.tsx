import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "StringValueInfoMalformed";

export const { StringValueInfoMalformed } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.StringValueInfoMalformed) => data.asHex
  )
};
