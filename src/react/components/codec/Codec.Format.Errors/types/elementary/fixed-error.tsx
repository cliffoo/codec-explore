import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { FixedPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-padding-error";

const displayName = "FixedError";

export const { FixedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
  )
};
