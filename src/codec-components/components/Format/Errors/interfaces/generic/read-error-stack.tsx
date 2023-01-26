import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ReadErrorStack";

export const { ReadErrorStack } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStack) => `${data.from} to ${data.to}`
  )
};
