import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ReadErrorBytes";

export const { ReadErrorBytes } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ReadErrorBytes) =>
      // TODO
      `${data.location}: ${data.start} to ${data.start + data.length}`
  )
};
