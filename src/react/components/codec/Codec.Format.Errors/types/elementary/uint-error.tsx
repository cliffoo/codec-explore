import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { UintPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/uint-padding-error";

const displayName = "UintError";

export const { UintError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UintError) => <UintPaddingError data={data} />
  )
};
