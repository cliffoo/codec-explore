import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.StringValueInfoValid) => data.asString
  )
};
