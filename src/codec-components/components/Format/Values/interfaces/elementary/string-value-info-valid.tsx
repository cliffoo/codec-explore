import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const StringValueInfoValid = createPolymorphicComponent(
  // TODO
  (data: Format.Values.StringValueInfoValid) => data.asString
);
