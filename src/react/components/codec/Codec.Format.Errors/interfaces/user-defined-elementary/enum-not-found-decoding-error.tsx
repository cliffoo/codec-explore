import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "EnumNotFoundDecodingError";

export const { EnumNotFoundDecodingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumNotFoundDecodingError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
