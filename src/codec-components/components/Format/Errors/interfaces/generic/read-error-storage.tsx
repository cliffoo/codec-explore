import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ReadErrorStorage = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ReadErrorStorage) => data.range.from.index.toString()
);
