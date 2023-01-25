import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const EnumNotFoundDecodingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumNotFoundDecodingError) => data.rawAsBN.toString()
);
