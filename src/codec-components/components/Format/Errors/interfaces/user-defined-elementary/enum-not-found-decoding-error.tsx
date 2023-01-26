import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "EnumNotFoundDecodingError";

export const { EnumNotFoundDecodingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumNotFoundDecodingError) => data.rawAsBN.toString()
  )
};
