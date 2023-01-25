import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ReadErrorStack = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ReadErrorStack) => `${data.from} to ${data.to}`
);
