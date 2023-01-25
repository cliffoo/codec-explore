import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ReadErrorBytes = createPolymorphicComponent(
  (data: Format.Errors.ReadErrorBytes) =>
    // TODO
    `${data.location}: ${data.start} to ${data.start + data.length}`
);
